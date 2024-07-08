from aws_cdk import (
    Stack,
    aws_s3 as s3,
    aws_lambda as _lambda,
    aws_route53 as route53,
    aws_route53_targets as route53_targets,
    aws_cloudfront as cloudfront,
    aws_cloudfront_origins as origins,
    aws_certificatemanager as acm,
)
import aws_cdk as cdk
from constructs import Construct
import os

IYARLES_DOMAIN = 'iyarles.net'
IYARLES2_WEBSITE_DOMAIN = 'portfolio.' + IYARLES_DOMAIN


class IYarles2Stack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Bucket holding site assets
        bucket = s3.Bucket(
            self,
            'iyarles2Bucket',
            bucket_name=IYARLES2_WEBSITE_DOMAIN,
            access_control=s3.BucketAccessControl.PUBLIC_READ,
            removal_policy=cdk.RemovalPolicy.DESTROY,
            website_index_document='index.html',
        )
        bucket.grant_public_access()

        # Create contactEmailLambda
        contact_email_lambda = _lambda.Function(
            self,
            'iyarles2ContactEmailLambda',
            code=_lambda.Code.from_asset(
                'contactEmailLambda', exclude=['*.ts']),
            function_name='iyarles2-contact-email',
            handler='contactEmailLambda.lambdaHandler',
            runtime=_lambda.Runtime.NODEJS_18_X,
        )

        # give contactEmailLambda permission to send ses emails
        contact_email_lambda.add_to_role_policy(
            statement=cdk.aws_iam.PolicyStatement(
                actions=[
                    'ses:SendEmail',
                    'ses:SendRawEmail',
                ],
                resources=['*'],
            )
        )

        # Get existing iyarles.net hosted zone
        iyarles_hosted_zone_id = os.environ['IYARLES_HOSTED_ZONE_ID']
        iyarles_hosted_zone = route53.HostedZone.from_hosted_zone_attributes(
            self,
            IYARLES_DOMAIN,
            hosted_zone_id=iyarles_hosted_zone_id,
            zone_name=IYARLES_DOMAIN
        )

        # Get existing ACM Cert for SSL
        iyarles_cert_arn = os.environ['IYARLES_CERT_ARN']
        iyarles_cert = acm.Certificate.from_certificate_arn(
            self,
            'iyarles2Cert',
            certificate_arn=iyarles_cert_arn
        )

        # CloudFront distribution
        distribution = cloudfront.Distribution(
            self,
            "iyarles2Distribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.HttpOrigin(
                    domain_name=bucket.bucket_website_domain_name,
                    protocol_policy=cloudfront.OriginProtocolPolicy.HTTP_ONLY
                ),
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            ),
            domain_names=[IYARLES2_WEBSITE_DOMAIN, IYARLES_DOMAIN],
            certificate=iyarles_cert,
            price_class=cloudfront.PriceClass.PRICE_CLASS_100,
        )

        # add alias record for static site
        iyarles2_cloudfront_target = route53.RecordTarget.from_alias(
            route53_targets.CloudFrontTarget(distribution)
        )

        route53.ARecord(
            self,
            'IYarles2AliasRecord',
            zone=iyarles_hosted_zone,
            record_name=IYARLES2_WEBSITE_DOMAIN,
            target=iyarles2_cloudfront_target,
        )

        route53.ARecord(
            self,
            'IYarles2RootAliasRecord',
            zone=iyarles_hosted_zone,
            record_name=IYARLES_DOMAIN,
            target=IYARLES2_WEBSITE_DOMAIN,
        )

        # output bucket website domain for use by next.config.js
        cdk.CfnOutput(
            self,
            'websiteUrl',
            value=f'https://{IYARLES2_WEBSITE_DOMAIN}',
        )

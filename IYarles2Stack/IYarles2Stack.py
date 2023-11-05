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
        iyarles2_bucket = s3.Bucket(
            self,
            'iyarles2Bucket',
            bucket_name=IYARLES2_WEBSITE_DOMAIN,
            removal_policy=cdk.RemovalPolicy.DESTROY,
        )

        # Create contactEmailLambda
        contact_email_lambda = _lambda.Function(
            self,
            'iyarles2ContactEmailLambda',
            code=_lambda.Code.from_asset('contactEmailLambda', exclude=['*.ts']),
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

        # CloudFront Lambda@Edge function
        # iyarles_viewer_request_lambda = cloudfront.experimental.EdgeFunction(
        #     self,
        #     'iyarles2ViewerRequestLambda',
        #     code=_lambda.Code.from_asset('viewer_request_lambda'),
        #     function_name='iyarles2-viewer-request',
        #     handler='handler.lambda_handler',
        #     runtime=_lambda.Runtime.PYTHON_3_9,
        # )

        # CloudFront distribution
        iyarles_distribution = cloudfront.Distribution(
            self,
            "iyarles2Distribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3Origin(iyarles2_bucket),
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                # edge_lambdas=[
                #     cloudfront.EdgeLambda(
                #         function_version=iyarles_viewer_request_lambda.current_version,
                #         event_type=cloudfront.LambdaEdgeEventType.VIEWER_REQUEST,
                #     )
                # ],
            ),
            domain_names=[IYARLES2_WEBSITE_DOMAIN],
            certificate=iyarles_cert,
            price_class=cloudfront.PriceClass.PRICE_CLASS_100,
            # default_root_object='index.html',
        )

        # add alias record for static site
        iyarles2_cloudfront_target = route53.RecordTarget.from_alias(
            route53_targets.CloudFrontTarget(iyarles_distribution)
        )
        iyarles2_alias_record = route53.ARecord(
            self,
            'IYarles2AliasRecord',
            zone=iyarles_hosted_zone,
            record_name=IYARLES2_WEBSITE_DOMAIN,
            target=iyarles2_cloudfront_target,
        )

        iyarles2_alias_record = route53.ARecord(
            self,
            'IYarles2RootAliasRecord',
            zone=iyarles_hosted_zone,
            record_name=IYARLES_DOMAIN,
            target=iyarles2_cloudfront_target,
        )

        # output bucket website domain for use by next.config.js
        out = cdk.CfnOutput(
            self,
            'websiteUrl',
            value=f'https://{IYARLES2_WEBSITE_DOMAIN}',
        )
        # deploy with:
        # cdk deploy --require-approval never --outputs-file cdk-outputs.json
        # npm run build
        # aws s3 sync out/ s3://portfolio.iyarles.net/

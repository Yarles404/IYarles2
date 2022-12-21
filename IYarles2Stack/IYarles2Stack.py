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
# IYARLES2_WEBSITE_DOMAIN = 'test.' + IYARLES_DOMAIN


class IYarles2Stack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Bucket holding site assets
        iyarles2_bucket = s3.Bucket(
            self,
            'iyarles2Bucket',
            bucket_name=IYARLES2_WEBSITE_DOMAIN,
            removal_policy=cdk.RemovalPolicy.DESTROY,
            # public_read_access=True,
            # website_index_document='index.html', // using S3 REST API w/ CloudFront instead of S3 website hosting
        )

        # Get existing iyarles.net hosted zone
        iyarles_hosted_zone_id = os.environ['iyarles_hosted_zone_id']
        iyarles_hosted_zone = route53.HostedZone.from_hosted_zone_attributes(
            self,
            IYARLES_DOMAIN,
            hosted_zone_id=iyarles_hosted_zone_id,
            zone_name=IYARLES_DOMAIN
        )

        # Get existing ACM Cert for SSL
        iyarles_cert_arn = os.environ['iyarles_cert_arn']
        iyarles_cert = acm.Certificate.from_certificate_arn(
            self,
            'iyarles2Cert',
            certificate_arn=iyarles_cert_arn
        )

        # CloudFront distribution
        iyarles_distribution = cloudfront.Distribution(
            self,
            "iyarles2Distribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3Origin(iyarles2_bucket),
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            ),
            domain_names=[IYARLES2_WEBSITE_DOMAIN],
            certificate=iyarles_cert,
            price_class=cloudfront.PriceClass.PRICE_CLASS_100,
            default_root_object='index.html',
        )

        # add alias record for static site
        iyarles2_alias_record = route53.ARecord(
            self,
            'IYarles2AliasRecord',
            zone=iyarles_hosted_zone,
            record_name=IYARLES2_WEBSITE_DOMAIN,
            target=route53.RecordTarget.from_alias(
                route53_targets.CloudFrontTarget(iyarles_distribution)
            ),
        )

        # output bucket website domain for use by next.config.js
        out = cdk.CfnOutput(
            self,
            'websiteUrl',
            value=f'https://{IYARLES2_WEBSITE_DOMAIN}',
        )
        # deploy with `cdk deploy --require-approval never --outputs-file cdk-outputs.json`

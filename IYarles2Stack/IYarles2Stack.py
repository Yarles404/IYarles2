from aws_cdk import (
    Stack,
    aws_s3 as s3,
    aws_lambda as _lambda,
    aws_route53 as route53,
    aws_route53_targets as route53_targets,
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
            'IYarles2Bucket',
            bucket_name=IYARLES2_WEBSITE_DOMAIN,
            removal_policy=cdk.RemovalPolicy.DESTROY,
            public_read_access=True,
            website_index_document='index.html',
        )

        # Get existing iyarles.net hosted zone
        iyarles_hosted_zone_id = os.environ['iyarles_hosted_zone_id']
        iyarles_hosted_zone = route53.HostedZone.from_hosted_zone_attributes(
            self,
            IYARLES_DOMAIN,
            hosted_zone_id=iyarles_hosted_zone_id,
            zone_name=IYARLES_DOMAIN
        )

        # add alias record for static site
        iyarles2_alias_record = route53.ARecord(
            self,
            'IYarles2AliasRecord',
            zone=iyarles_hosted_zone,
            record_name=IYARLES2_WEBSITE_DOMAIN,
            target=route53.RecordTarget.from_alias(
                route53_targets.BucketWebsiteTarget(iyarles2_bucket)
            ),
        )

        # output bucket website domain for use by next.config.js
        iyarles2_url = iyarles2_bucket.bucket_website_url
        out = cdk.CfnOutput(
            self,
            'bucketWebsiteUrl',
            value=iyarles2_url,
        )
        # deploy with `cdk deploy --require-approval never --outputs-file cdk-outputs.json`

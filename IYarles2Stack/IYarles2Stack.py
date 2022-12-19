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


class IYarles2Stack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Bucket holding site assets
        iyarles2_bucket = s3.Bucket(
            self,
            'IYarles2Bucket',
            bucket_name='portfolio.iyarles2.com',
            removal_policy=cdk.RemovalPolicy.DESTROY,
            public_read_access=True,
            website_index_document='index.html',
        )

        iyarles2_domain = iyarles2_bucket.bucket_website_domain_name

        # Get existing iyarles.net hosted zone
        iyarles_hosted_zone_id = os.environ['iyarles_hosted_zone_id']
        iyarles_hosted_zone = route53.HostedZone.from_hosted_zone_id(
            self,
            'iyarles.net',
            iyarles_hosted_zone_id,
        )

        # add alias record for static site
        iyarles2_alias_record = route53.ARecord(
            self,
            'IYarles2AliasRecord',
            zone=iyarles_hosted_zone,
            record_name='portfolio.iyarles2.com',
            target=route53.RecordTarget.from_alias(
                route53_targets.BucketWebsiteTarget(iyarles2_bucket)
            ),
        )

from aws_cdk import (
    Stack,
    aws_lambda as _lambda,
)
from constructs import Construct


class IYarles2Stack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # new lambda function from my_lambda/handler.py
        hello_lambda = _lambda.Function(
            self,
            'MyLambda',
            runtime=_lambda.Runtime.PYTHON_3_7,
            code=_lambda.Code.from_asset('my_lambda'),
            handler='handler.lambda_handler',
        )

        hello_lambda_url = hello_lambda.add_function_url(auth_type=_lambda.FunctionUrlAuthType.NONE)

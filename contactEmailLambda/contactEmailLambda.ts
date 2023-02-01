import { Context, APIGatewayProxyCallback, APIGatewayEvent } from 'aws-lambda';
import { SES, AWSError } from 'aws-sdk';
import { SendEmailRequest, SendEmailResponse } from 'aws-sdk/clients/ses';


interface Email {
    subject: string;
    body: string;
}


export const lambdaHandler = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallback): void => {
    const ses = new SES();
    if (!event.body) {
        callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: 'No body',
            }),
        });
        return;
    }

    var email: Email = JSON.parse(event.body);
    const params: SendEmailRequest = {
        Source: 'portfolio.message@contact.iyarles.net',
        Destination: {
            ToAddresses: [
                'yarlescy@gmail.com'
            ]
        },
        Message: {
            Subject: {
                Data: email.subject,
                Charset: 'UTF-8'
            },
            Body: {
                Text: {
                    Data: email.body,
                    Charset: 'UTF-8'
                }
            }
        }
    }

    var success: boolean = true;
    ses.sendEmail(params, (err: AWSError, data: SendEmailResponse) => {
        success = !err;
    });

    callback(null, {
        statusCode: success ? 201 : 500,
        body: JSON.stringify({
            message: success ? 'Email sent' : 'Email failed to send',
        }),
    });
};
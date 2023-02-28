"use strict";
exports.__esModule = true;
exports.lambdaHandler = void 0;
var aws_sdk_1 = require("aws-sdk");
var lambdaHandler = function (event, context, callback) {
    var ses = new aws_sdk_1.SES();
    if (!event.body) {
        callback(null, {
            statusCode: 400,
            body: JSON.stringify({
                message: 'No body'
            })
        });
        return;
    }
    var email = JSON.parse(event.body);
    var params = {
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
    };
    var success = true;
    ses.sendEmail(params, function (err, data) {
        success = !err;
    });
    callback(null, {
        statusCode: success ? 201 : 500,
        body: JSON.stringify({
            message: success ? 'Email sent' : 'Email failed to send'
        })
    });
};
exports.lambdaHandler = lambdaHandler;

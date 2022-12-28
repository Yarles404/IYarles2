def lambda_handler(event, context):
    request = event['Records'][0]['cf']['request']

    if '.' not in request['uri']:
        request['uri'] += '.html'
    
    return request
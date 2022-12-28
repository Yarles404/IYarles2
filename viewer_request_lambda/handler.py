def lambda_handler(event, context):
    request = event['Records'][0]['cf']['request']

    missing_extension = '.' not in request['uri'] and request['uri'][-1] != '/'
    if missing_extension:
        request['uri'] += '.html'
    
    return request
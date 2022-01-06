export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "articles": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "SortKeyName": "string",
            "SortKeyType": "string",
            "Region": "string"
        },
        "news": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "articles": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "news336c2282PostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    },
    "api": {
        "articles": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}
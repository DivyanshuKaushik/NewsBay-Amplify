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
        },
        "category": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
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
        },
        "category": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "articles": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "category": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}
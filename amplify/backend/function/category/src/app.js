/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_CATEGORY_ARN
	STORAGE_CATEGORY_NAME
	STORAGE_CATEGORY_STREAMARN
Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const AWS = require('aws-sdk')
const db = new AWS.DynamoDB.DocumentClient()
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});


app.get('/category', function(req, res) {
  const params = {
    TableName:process.env.STORAGE_CATEGORY_NAME
  }
  db.scan(params, function(err, data) {
    if (err) {
      res.json({err})
    } else {
      res.json({categories:data.Items});
    }
  });
});


app.post('/category', function(req, res) {
  const {category} = req.body

  const params = {
    TableName:process.env.STORAGE_CATEGORY_NAME,
    Item:{
      category
    }
  }
  db.put(params,function(err,data){
     if(err) res.json({err}) 
     else res.json({success: 'category added successfully'})
  })
});

app.delete('/category/:name', function(req, res) {
  const {name} = req.params
  const params = {
    TableName:process.env.STORAGE_CATEGORY_NAME,
    Key:{
      "category":name
    }
  }
  db.delete(params,function(err,data){
     if(err) res.json({err}) 
     else res.json({success:'category deleted successfully',data})
  })
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

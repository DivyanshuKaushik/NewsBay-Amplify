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
	STORAGE_ARTICLES_ARN
	STORAGE_ARSTORAGE_ARTICLES_NAMETICLES_NAME
	STORAGE_ARTICLES_STREAMARN
Amplify Params - DO NOT EDIT */

var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// uuid for generating unique articleId
const uuid = require("uuid");
// moment for getting time
const moment = require("moment");
// aws-sdk for dynamoDB connection 
const AWS = require('aws-sdk')
const db = new AWS.DynamoDB.DocumentClient()

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/articles", function (req, res) {
  const params = {
    TableName:process.env.STORAGE_ARTICLES_NAME
  }
  db.scan(params, function(err, data) {
    if (err) {
      res.json({err})
    } else {
      res.json({articles:data.Items});
    }
  });
});

app.get("/articles/:category/:id", function (req, res) {
  const {category,id}=req.params
  if(id){
    const params = {
      TableName:process.env.STORAGE_ARTICLES_NAME,
      Key:{
        "articleId":id,
        "category":category
      }
    }
    db.get(params,function(err,data){
      if(err) return res.json(err)
      res.json(data)
    })
  }else{
    const params = {
      TableName:process.env.STORAGE_ARTICLES_NAME,
      KeyConditionExpression: 'category = :category',
      ExpressionAttributeValues: {
          ':category': category
      }
    }
    db.query(params,function(err,data){
      if(err) return res.json(err)
      res.json(data)
    })
  }
});

app.post("/articles", function (req, res) {
  const {email,title,summary,source,imageUrl,category,tags,author,published} = req.body;
  const params = {
    TableName: process.env.STORAGE_ARTICLES_NAME,
    Item: {
      articleId: uuid.v4(),
      email,
      title,
      summary,
      source,
      imageUrl,
      category,
      tags,
      author,
      published,
      time: moment().format('LLLL'),
      timestamp:new Date().toISOString(),
    },
  };
  db.put(params, function (err, data) {
    if (err) res.json({ err });
    else res.json({ success: "Article Posted Successfully!!" });
  });
});

app.put("/articles/:id", function (req, res) {
  // Add your code here
  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.patch('/articles/:id',(req,res)=>{
  res.json({ success: "patch call succeed!", url: req.url, body: req.body });
})

app.delete("/articles/:id", function (req, res) {
  const {id} = req.params
  const params = {
    TableName:process.env.STORAGE_CATEGORY_NAME,
    Key:{
      "articleId":id
    }
  }
  db.delete(params,function(err,data){
     if(err) res.json({err}) 
     else res.json({success:'Article deleted successfully!!',data})
  })
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;

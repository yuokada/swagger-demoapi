window.swaggerSpec={
  "swagger" : "2.0",
  "info" : {
    "description" : "This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.",
    "version" : "1.0.0",
    "title" : "Swagger Petstore",
    "termsOfService" : "http://swagger.io/terms/",
    "contact" : {
      "email" : "apiteam@swagger.io"
    },
    "license" : {
      "name" : "Apache 2.0",
      "url" : "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host" : "tweet.swagger.io",
  "basePath" : "/api/",
  "tags" : [ {
    "name" : "tweet",
    "description" : "Everything about your Tweets",
    "externalDocs" : {
      "description" : "Find out more",
      "url" : "http://swagger.io"
    }
  } ],
  "schemes" : [ "http" ],
  "paths" : {
    "/tweet" : {
      "post" : {
        "tags" : [ "tweet" ],
        "summary" : "Add a new tweet to the store",
        "description" : "",
        "operationId" : "addTweet",
        "parameters" : [ {
          "in" : "body",
          "name" : "body",
          "description" : "Tweet object that needs to be added to the store",
          "required" : true,
          "schema" : {
            "$ref" : "#/definitions/Tweet"
          }
        } ],
        "responses" : {
          "200" : {
            "description" : "Success"
          },
          "405" : {
            "description" : "Invalid input"
          }
        }
      }
    },
    "/tweet/{tweetId}" : {
      "get" : {
        "tags" : [ "tweet" ],
        "summary" : "Find tweet by ID",
        "description" : "Returns a single tweet",
        "operationId" : "getPetById",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "tweetId",
          "in" : "path",
          "description" : "ID of tweet to return",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "200" : {
            "description" : "successful operation",
            "schema" : {
              "$ref" : "#/definitions/Tweet"
            }
          },
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Tweet not found"
          }
        }
      },
      "delete" : {
        "tags" : [ "tweet" ],
        "summary" : "Deletes a tweet",
        "description" : "",
        "operationId" : "deleteTweet",
        "produces" : [ "application/json" ],
        "parameters" : [ {
          "name" : "api_key",
          "in" : "header",
          "required" : false,
          "type" : "string"
        }, {
          "name" : "tweetId",
          "in" : "path",
          "description" : "Tweet id to delete",
          "required" : true,
          "type" : "integer",
          "format" : "int64"
        } ],
        "responses" : {
          "400" : {
            "description" : "Invalid ID supplied"
          },
          "404" : {
            "description" : "Tweet not found"
          }
        }
      }
    }
  },
  "definitions" : {
    "User" : {
      "type" : "object",
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64"
        },
        "username" : {
          "type" : "string"
        },
        "userStatus" : {
          "type" : "integer",
          "format" : "int32",
          "description" : "User Status"
        }
      }
    },
    "Tweet" : {
      "type" : "object",
      "required" : [ "name" ],
      "properties" : {
        "id" : {
          "type" : "integer",
          "format" : "int64"
        },
        "name" : {
          "type" : "string",
          "example" : "doggie"
        },
        "status" : {
          "type" : "string",
          "description" : "tweet status in the store",
          "enum" : [ "available", "pending", "sold" ]
        }
      }
    },
    "AppResponse" : {
      "type" : "object",
      "properties" : {
        "code" : {
          "type" : "integer",
          "format" : "int32"
        },
        "type" : {
          "type" : "string"
        },
        "message" : {
          "type" : "string"
        }
      }
    }
  }
}
define({ "api": [
  {
    "group": "Issues",
    "type": "post",
    "url": "/api/v1/issues/create",
    "title": "Create an Issue",
    "version": "0.0.1",
    "name": "Create_an_Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the Issue passed as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignee",
            "description": "<p>assignee of the Issue passed as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "comments",
            "description": "<p>comments of the Issue passed as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Description of the Issue passed as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reporterId",
            "description": "<p>Id of the reporter passed as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reporterName",
            "description": "<p>Name of the reporter passed as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Issue passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n          \"error\":false,\n           \"message\":\"Issue Created Successfully!!\",\n           \"status\":200,\n            \"data\": [\n                 {\n                     \"watchers\": [],\n                     \"issueId\": \"NKIHLfg2T\",\n                     \"reporterId\": \"kgy4rY_F_\",\n                     \"repName\": \"rikswish29\",\n                     \"assignee\": \"abc\",\n                     \"title\": \"phonee\",\n                     \"status\": \"New\",\n                     \"description\": \"<p>changed desc second time fewf</p>\",\n                     \"comments\": \"fhsdjkhsjkd\",\n                     \"createdOn\": \"07/4/2019\"\n                 }\n             ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "type": "post",
    "url": "/api/v1/issues/remove/:id",
    "title": "Delete an Issue",
    "version": "0.0.1",
    "name": "Delete_an_Issue",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Issue passed as a URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"error\": False,\n  \"message\": \"Issue Deleted Successfully!!\",\n   \"status\": 200,    \n   \"data\": {\n              \"n\": 0,\n              \"ok\": 1\n          } \n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "type": "post",
    "url": "/api/v1/issues/watchers/:issueId",
    "title": "Get Watchers",
    "version": "0.0.1",
    "name": "Get_Watchers",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of the Issue passed as a URL parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the User passed as a URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n     \"error\": false,\n     \"message\": \"Watchers Found Succesfully!!\",\n     \"status\": 200,\n     \"data\": [\n         {\n             \"id\": \"r7zr9lBYw\",\n             \"name\": \"pqr\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/api/v1/issues/get/all",
    "title": "Get all Issues",
    "version": "0.0.1",
    "name": "Get_all_Issues",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skip",
            "description": "<p>skip.(Send skip as a query Param or header Param or Body param)(optional parameter for pagination)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   {\n    \"error\": false,\n    \"message\": \"Issues Found Succesfully!!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"watchers\": [],\n            \"issueId\": \"NKIHLfg2T\",\n            \"reporterId\": \"kgy4rY_F_\",\n            \"repName\": \"rikswish29\",\n            \"assignee\": \"rikswish29\",\n            \"title\": \"test\",\n            \"status\": \"New\",\n            \"description\": \"<p>changed desc second time fewf</p>\",\n            \"comments\": \"fhsdjkhsjkd\",\n            \"createdOn\": \"07/4/2019\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/api/v1/issues/detail/:id",
    "title": "Get Issue Details",
    "version": "0.0.1",
    "name": "Get_details_of_Issue",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The id of the Issue passed as a URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Issue Found Succesfully!!\",\n    \"status\": 200,\n    \"data\": {\n        \"watchers\": [],\n        \"_id\": \"5bcd6fd0550ad63984740a9b\",\n        \"issueId\": \"3PmhERM0g\",\n        \"reporterId\": \"r7zr9lBYw\",\n        \"repName\": \"pqr\",\n        \"assignee\": \"abc\",\n        \"title\": \"phone\",\n        \"status\": \"New\",\n        \"description\": \"<p>jsdhjhsj</p>\",\n        \"comments\": \"sjhfjkdshkjfhsd\",\n        \"createdOn\": \"07/4/2019\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "type": "get",
    "url": "/api/v1/issues/search/:searchText",
    "title": "Search an Issue",
    "version": "0.0.1",
    "name": "Search_an_Issue",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Issues Found Succesfully!!\",\n        \"status\": 200,\n        \"data\": [\n            {\n                \"watchers\": [],\n                \"issueId\": \"3PmhERM0g\",\n                \"reporterId\": \"r7zr9lBYw\",\n                \"repName\": \"pqr\",\n                \"assignee\": \"abc\",\n                \"title\": \"phone\",\n                \"status\": \"New\",\n                \"description\": \"<p>jsdhjhsj</p>\",\n                \"comments\": \"sjhfjkdshkjfhsd\",\n                \"createdOn\": \"07/4/2019\"\n            },\n            {\n                \"watchers\": [],\n                \"issueId\": \"NKIHLfg2T\",\n                \"reporterId\": \"kgy4rY_F_\",\n                \"repName\": \"rikswish29\",\n                \"assignee\": \"abc\",\n                \"title\": \"phonee\",\n                \"status\": \"New\",\n                \"description\": \"<p>changed desc second time fewf</p>\",\n                \"comments\": \"fhsdjkhsjkd\",\n                \"createdOn\": \"07/4/2019\"\n            }\n        ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "type": "post",
    "url": "/api/v1/issues/unWatch/:issueId/:userId",
    "title": "UnWatch an Issue",
    "version": "0.0.1",
    "name": "UnWatch_an_Issue",
    "group": "Issues",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>Id of the Issue passed as a URL parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the User passed as a URL parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"Watcher removed Succesfully!!\",\n      \"status\": 200,\n      \"data\": {\n          \"watchers\": [],\n          \"_id\": \"5bcd6fd0550ad63984740a9b\",\n          \"issueId\": \"3PmhERM0g\",\n          \"reporterId\": \"r7zr9lBYw\",\n          \"repName\": \"pqr\",\n          \"assignee\": \"abc\",\n          \"title\": \"phone\",\n          \"status\": \"New\",\n          \"description\": \"<p>jsdhjhsj</p>\",\n          \"comments\": \"sjhfjkdshkjfhsd\",\n          \"createdOn\": \"07/4/2019\",\n          \"__v\": 2\n      }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "group": "Issues",
    "type": "put",
    "url": "/api/v1/issues/update/:id",
    "title": "Update an Issue",
    "version": "0.0.1",
    "name": "Update_Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Issue passed as a URL parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "option",
            "description": "<p>value to be changed passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"error\": False,\n  \"message\": \"Issue Updated Successfully!!\",\n   \"status\": 200,    \n  \"data\": {\n              \"n\": 0,\n              \"ok\": 1\n          }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "group": "Issues",
    "type": "post",
    "url": "/api/v1/issues/watch/:id",
    "title": "Watch an Issue",
    "version": "0.0.1",
    "name": "Watch_an_Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as a query Param or header Param or Body param)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the Issue passed as a URL parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user passed as a body parameter.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Name of the user passed as a body parameter.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Watcher added Succesfully!!\",\n        \"status\": 200,\n        \"data\": {\n            \"watchers\": [\n                {\n                    \"id\": \"r7zr9lBYw\",\n                    \"name\": \"pqr\"\n                }\n            ],\n            \"_id\": \"5bcd6fd0550ad63984740a9b\",\n            \"issueId\": \"3PmhERM0g\",\n            \"reporterId\": \"r7zr9lBYw\",\n            \"repName\": \"pqr\",\n            \"assignee\": \"abc\",\n            \"title\": \"phone\",\n            \"status\": \"New\",\n            \"description\": \"<p>jsdhjhsj</p>\",\n            \"comments\": \"sjhfjkdshkjfhsd\",\n           \"createdOn\": \"07/4/2019\",\n            \"__v\": 1\n        }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/issue.js",
    "groupTitle": "Issues"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/get/all",
    "title": "Get All Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "authToken",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (body params or query param) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Users Found Succesfully!!\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"5RDh-lOgD\",\n            \"userName\": \"lkj\",\n            \"email\": \"lkj@gmail.com\",\n            \"mobile\": 8787898988,\n            \"dob\": \"0878-07-08T00:00:00.000Z\",\n            \"createdOn\": \"2019-04-07T12:48:36.000Z\"\n        }\n        \n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersGetAll"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/send/resetLink/:userName",
    "title": "Password Reset Link",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Password reset Link sent\",\n    \"status\": 200\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersSendResetlinkUsername"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "User Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.A\",\n        \"userDetails\": {\n            \"userId\": \"s4sqke5wM\",\n            \"userName\": \"rikswish29\",\n            \"email\": \"rikswish29@gma.com\",\n            \"mobile\": 909090989,\n            \"dob\": \"1980-11-10T18:30:00.000Z\"\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "User Logout",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user.(params or bodyParams or queryParams)(required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": {\n                \"n\": 0,\n                \"ok\": 1\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/register",
    "title": "User Registration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>emailId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userName",
            "description": "<p>userName of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "dob",
            "description": "<p>dob of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User Created Successfully\",\n    \"status\": 200,\n    \"data\": {\n                \"userId\": \"s4sqke5wM\",\n                \"userName\": \"rikswish29\",\n                \"email\": \"rikswish9@gmai.com\",\n                \"mobile\": 909090989,\n                \"dob\": \"1980-11-10T18:30:00.000Z\",\n                \"createdOn\": \"2019-04-07T05:18:14.000Z\"\n            }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersRegister"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/users/forgotPwd",
    "title": "Reset Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Reset Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"kgy4rY_F_\",\n        \"userName\": \"abcXyz\",\n        \"email\": \"xyz@gmail.com\",\n        \"mobile\": 9090000000,\n        \"dob\": \"8878-07-08T00:00:00.000Z\",\n        \"createdOn\": \"2019-04-07T12:36:39.000Z\"\n        }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PutApiV1UsersForgotpwd"
  }
] });

define({ "api": [
  {
    "type": "get",
    "url": "api/",
    "title": "",
    "name": "Insert_URL",
    "version": "1.0.0",
    "group": "Get",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl http://timestamp-svc.herokuapp.com/",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "timeObj",
            "description": "<p>information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeObj.unixTimeStamp",
            "description": "<p>Unix Time Stamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeObj.naturalLanguageDate",
            "description": "<p>Natural Language Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response",
          "content": "HTTP/1.1 200 OK\n{\n   \"unixTimeStamp\": null,\n   \"naturalLanguageDate\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "Get"
  },
  {
    "type": "get",
    "url": "api/:input",
    "title": "",
    "name": "Insert_URL",
    "version": "1.0.0",
    "group": "GetTime",
    "examples": [
      {
        "title": "Example usage:",
        "content": "\ncurl http://timestamp-svc.herokuapp.com/January 1, 2029\ncurl http://timestamp-svc.herokuapp.com/2222",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "input",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "timeObj",
            "description": "<p>information</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeObj.unixTimeStamp",
            "description": "<p>Unix Time Stamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timeObj.naturalLanguageDate",
            "description": "<p>Natural Language Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-response",
          "content": "HTTP/1.1 200 OK\n{\n   \"unixTimeStamp\": 1861920000000,\n   \"naturalLanguageDate\": \"Mon Jan 01 2029\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/api.js",
    "groupTitle": "GetTime"
  }
] });
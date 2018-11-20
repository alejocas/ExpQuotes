define({ "api": [
  {
    "type": "delete",
    "url": "/api/v1/generate-changing-life-quote/:id",
    "title": "",
    "version": "1.0.0",
    "name": "deleteRandomQuote",
    "group": "Quotes",
    "description": "<p>You can delete a selected quote with the id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifier of the quote that will be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Message that says if the quote was deleted or was not found in the database (in the second case, probably, the quote was previously deleted).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK \n{\n    \"msg\": \"Quote identified by 42 was deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The quote can't be deleted or the server can't resolve that.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n    \"error\": \"Here is the error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/services/quotesGenerator/controller.js",
    "groupTitle": "Quotes"
  },
  {
    "type": "get",
    "url": "/api/v1/generate-changing-life-quote",
    "title": "",
    "version": "1.0.0",
    "name": "getRandomQuote",
    "group": "Quotes",
    "description": "<p>You can request a random quote.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Category can be &quot;famous&quot; or &quot;movies&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificator of the quote in database</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "quote",
            "description": "<p>Random quote with his/her author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>URL to a image related to the quote.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED (or HTTP/1.1 200 OK)\n{\n    \"id\":12,\n    \"quote\": \"I'm king of the world! - Titanic\",\n    \"image\": \"https://i.ytimg.com/vi/FSGeskFzE0s/maxresdefault.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The quote can't be generated due a database problem or an unexisting image related to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"error\": \"Here is the error\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/services/quotesGenerator/controller.js",
    "groupTitle": "Quotes"
  },
  {
    "type": "get",
    "url": "/api/v1/generate-changing-life-quote/:id",
    "title": "",
    "version": "1.0.0",
    "name": "searchRandomQuoteGeneratedBefore",
    "group": "Quotes",
    "description": "<p>You can search a quote with the id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifier of the quote that will be searched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifier of the quote searched.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "quote",
            "description": "<p>Quote and his/her author.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>URL to an image related to the Quote.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK \n{\n    \"id\": 42,\n    \"quote\": \"I'm king of the world! - Titanic\",\n    \"image\":\"https://i.ytimg.com/vi/FSGeskFzE0s/maxresdefault.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "error",
            "description": "<p>The quote can't be finded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n    \"error\": \"Quote identified by: 42 doesn't exists, sorry :c\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/v1/services/quotesGenerator/controller.js",
    "groupTitle": "Quotes"
  }
] });

define({ "api": [
  {
    "type": "get",
    "url": "/admin/:name/:password",
    "title": "Connect user",
    "name": "connect",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success of connection</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Connection message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Generated token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"success\": true,\n  \"message\": \"Enjoy your token!\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTI2MzE5NTMyfQ.S2bxQPO1Ku9HBL24G-mjixRPjfu5Dr0zIQca7If3BCQ\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>No user found for this username</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n\"Authentication failed. User not found.\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/authenticate.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/admin/disconnect",
    "title": "Disconnect user",
    "name": "disconnect",
    "group": "Authentication",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success of disconnection</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\"disconnected\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/authenticate.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/bill/add/menu",
    "title": "Add a Menu to a Bill",
    "name": "addMenu",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "bill_id",
            "description": "<p>Bill id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Menus id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Menu added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "post",
    "url": "/bill/add/product",
    "title": "Add a Product to a Bill",
    "name": "addProduct",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "bill_id",
            "description": "<p>Bill id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Product added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "post",
    "url": "/bill/create",
    "title": "Create a Bill",
    "name": "create",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Bill status</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Bill created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "delete",
    "url": "/bill/:id",
    "title": "Remove Bill by id",
    "name": "deleteById",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Bill deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "get",
    "url": "/bill/all",
    "title": "Request Bills",
    "name": "getAll",
    "group": "Bill",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Bill id</p>"
          },
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "price",
            "description": "<p>Bill price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Bill status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 2,\n         \"price\": \"7.0\",\n         \"status\": \"awaiting\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "BillNotFound",
            "description": "<p>No bill founded</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "get",
    "url": "/bill/:id",
    "title": "Request Bill by id",
    "name": "getById",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Bill id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Bill id</p>"
          },
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "price",
            "description": "<p>Bill price</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Bill status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"id\": 2,\n         \"price\": \"7.0\",\n         \"status\": \"awaiting\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "BillNotFound",
            "description": "<p>No bill founded</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "get",
    "url": "/bill/:id/price",
    "title": "Request Bill price",
    "name": "getPrice",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Bill id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "double",
            "optional": false,
            "field": "price",
            "description": "<p>Bill price</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n     {\n         \"price\": \"7.0\"\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "BillNotFound",
            "description": "<p>No bill founded</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "get",
    "url": "/bill/:id/products",
    "title": "Request Bill products by id",
    "name": "getProducts",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_type",
            "description": "<p>Product type</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Product price</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "calories",
            "description": "<p>Product calories</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "veg",
            "description": "<p>Product is vegetarian</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "disponibility",
            "description": "<p>Product is avalaible</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Menu active promotion id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "bill_id",
            "description": "<p>Bill id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n   {\n     \"id\": 5,\n     \"name\": \"Coca-Cola\",\n     \"product_type\": \"Boisson\",\n     \"price\": \"3.5\",\n     \"calories\": 100,\n     \"veg\": false,\n     \"disponibility\": true,\n     \"promotion_id\": null,\n     \"bill_id\": 2,\n     \"product_id\": 5\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>No products for this bill founded</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "post",
    "url": "/bill/:id",
    "title": "Modify a Bill by id",
    "name": "update",
    "group": "Bill",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Bill id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Menu added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/bill.js",
    "groupTitle": "Bill"
  },
  {
    "type": "post",
    "url": "/menu/add/product",
    "title": "Add a Product to a Menu",
    "name": "addProduct",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Product added</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "post",
    "url": "/menu/:id/promotion/:id_promotion",
    "title": "Add a Promotion to a Menu",
    "name": "addPromotion",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id_promotion",
            "description": "<p>Promotion id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Promotion added to Menu</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "post",
    "url": "/menu/create",
    "title": "Create a Menu",
    "name": "create",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Menu name</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Menu price</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Menu is active</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Menu created</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "delete",
    "url": "/menu/:id",
    "title": "Remove Menu by id",
    "name": "deleteById",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Menu deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "delete",
    "url": "/menu/:menu_id/remove/product/:product_id",
    "title": "Remove a Product of a Menu by id",
    "name": "deleteProduct",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>Menu product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Menu Product deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ntrue",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameters are not all integers\"",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/menu/all",
    "title": "Request Menus",
    "name": "getAll",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Menu name</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Menu price</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Menu is active</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Menu active promotion id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n  [\n    {\n        \"id\": 5,\n        \"name\": \"Classic\",\n        \"price\": \"10\",\n        \"active\": true,\n        \"promotion_id\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>No menu found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/menu/:id",
    "title": "Request Menu by id",
    "name": "getById",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Menu name</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Menu price</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Menu is active</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Menu active promotion id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n  [\n    {\n        \"id\": 5,\n        \"name\": \"Classic\",\n        \"price\": \"10\",\n        \"active\": true,\n        \"promotion_id\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>No menu found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/menu/name/:name",
    "title": "Request Menu by name",
    "name": "getByName",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Menu name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Menu name</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Menu price</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Menu is active</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Menu active promotion id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n  [\n    {\n        \"id\": 5,\n        \"name\": \"Classic\",\n        \"price\": \"10\",\n        \"active\": true,\n        \"promotion_id\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>No menu found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/menu/:id/products",
    "title": "Request Menu products by id",
    "name": "getProducts",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product_type",
            "description": "<p>Product type</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Product price</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "calories",
            "description": "<p>Product calories</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "veg",
            "description": "<p>Product is vegetarian</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "disponibility",
            "description": "<p>Product is avalaible</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Menu active promotion id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "menu_id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>Product id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n [\n   {\n       \"id\": 2,\n       \"name\": \"Hamburger\",\n       \"product_type\": \"burger\",\n       \"price\": \"3\",\n       \"calories\": 450,\n       \"veg\": false,\n       \"disponibility\": true,\n       \"promotion_id\": null,\n       \"menu_id\": 5,\n       \"product_id\": 3\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "MenuNotFound",
            "description": "<p>No products for this menu found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nfalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "put",
    "url": "/menu/:id",
    "title": "Modify a Menu by id",
    "name": "update",
    "group": "Menu",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Menu id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Menu name</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Menu price</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Menu is active</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Menu active promotion id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>Menu modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    true\nc",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "Server",
            "description": "<p>error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nfalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/menu.js",
    "groupTitle": "Menu"
  },
  {
    "type": "post",
    "url": "/product/:id/promotion/:id_promotion",
    "title": "Add a promotion to a product",
    "name": "addPromotion",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of a Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id_promotion",
            "description": "<p>id of a Promotion.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nFalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "post",
    "url": "/product/create",
    "title": "Create a product",
    "name": "create",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "product_type",
            "description": "<p>Type of a Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Price of a Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "calories",
            "description": "<p>Number of Calories of a Product</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "veg",
            "description": "<p>Is the product vegan.</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "disponibility",
            "description": "<p>Disponibility of a Product.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nFalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "delete",
    "url": "/product/:id",
    "title": "Delete a product By Id",
    "name": "deleteById",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of a Product.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "parameter",
            "description": "<p>is not an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "delete",
    "url": "/product/:name",
    "title": "Delete a product by Name",
    "name": "deleteByName",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>name of a Product.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nFalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/product/all",
    "title": "Request All Products",
    "name": "getAll",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product_type",
            "description": "<p>Type of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Price of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "calories",
            "description": "<p>Number of Calories of a Product</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "veg",
            "description": "<p>Is the product vegan.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "disponibility",
            "description": "<p>Disponibility of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Unique id of a promotion if there is one.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"id\": 3,\n    \"name\": \"Hamburger\",\n    \"product_type\": \"burger\",\n    \"price\": \"3\",\n    \"calories\": 450,\n    \"veg\": false,\n    \"disponibility\": true,\n    \"promotion_id\": null\n},\n{\n    \"id\": 4,\n    \"name\": \"Ice-Tea\",\n    \"product_type\": \"Boisson\",\n    \"price\": \"3.5\",\n    \"calories\": 100,\n    \"veg\": false,\n    \"disponibility\": true,\n    \"promotion_id\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nFalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/product/:id",
    "title": "Request a Product by id",
    "name": "getById",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Product id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product_type",
            "description": "<p>Type of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Price of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "calories",
            "description": "<p>Number of Calories of a Product</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "veg",
            "description": "<p>Is the product vegan.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "disponibility",
            "description": "<p>Disponibility of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Unique id of a promotion if there is one.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"id\": 3,\n    \"name\": \"Hamburger\",\n    \"product_type\": \"burger\",\n    \"price\": \"3\",\n    \"calories\": 450,\n    \"veg\": false,\n    \"disponibility\": true,\n    \"promotion_id\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "parameter",
            "description": "<p>is not an integer</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/product/:name",
    "title": "Request a Product by Name",
    "name": "getByName",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Product's name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product_type",
            "description": "<p>Type of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Price of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "calories",
            "description": "<p>Number of Calories of a Product</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "veg",
            "description": "<p>Is the product vegan.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "disponibility",
            "description": "<p>Disponibility of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Unique id of a promotion if there is one.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"id\": 3,\n    \"name\": \"Hamburger\",\n    \"product_type\": \"burger\",\n    \"price\": \"3\",\n    \"calories\": 450,\n    \"veg\": false,\n    \"disponibility\": true,\n    \"promotion_id\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nFalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/product/vegan",
    "title": "Request Products of vegan type",
    "name": "getVegan",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Unique id of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product_type",
            "description": "<p>Type of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "price",
            "description": "<p>Price of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "calories",
            "description": "<p>Number of Calories of a Product</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "veg",
            "description": "<p>Is the product vegan.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "disponibility",
            "description": "<p>Disponibility of a Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "promotion_id",
            "description": "<p>Unique id of a promotion if there is one.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"id\": 3,\n    \"name\": \"Hamburger\",\n    \"product_type\": \"burger\",\n    \"price\": \"3\",\n    \"calories\": 450,\n    \"veg\": true,\n    \"disponibility\": true,\n    \"promotion_id\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "parameter",
            "description": "<p>is not an integer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "put",
    "url": "/product/:id",
    "title": "Update a product",
    "name": "update",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>id of a Product.</p>"
          },
          {
            "group": "Parameter",
            "type": "none",
            "optional": false,
            "field": "variable",
            "description": "<p>depend of the user: He can set the column and the value that he want to update in Product</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "parameter",
            "description": "<p>is not an integer</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/product.js",
    "groupTitle": "Products"
  },
  {
    "type": "post",
    "url": "/promotion/create",
    "title": "Create a Promotion",
    "name": "create",
    "group": "Promotions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "reduction",
            "description": "<p>Value of the Promotions.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Status of the Promotions.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\nFalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/promotion.js",
    "groupTitle": "Promotions"
  },
  {
    "type": "delete",
    "url": "/promotion/:id",
    "title": "Delete a Promotion",
    "name": "delete",
    "group": "Promotions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of the Promotion</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "parameter",
            "description": "<p>is not an integer</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/promotion.js",
    "groupTitle": "Promotions"
  },
  {
    "type": "get",
    "url": "/promotion/all",
    "title": "Request All Promotions",
    "name": "getAll",
    "group": "Promotions",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the Product.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "reduction",
            "description": "<p>Value of the promotion.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Status of the promotion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"reduction\": 5,\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nFalse",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/promotion.js",
    "groupTitle": "Promotions"
  },
  {
    "type": "get",
    "url": "/promotion/:id",
    "title": "Request a Promotion",
    "name": "getById",
    "group": "Promotions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>Promotions unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>of the Promotions.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "reduction",
            "description": "<p>Value of the Promotions.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Status of the Promotions.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"reduction\": 5,\n    \"active\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "parameter",
            "description": "<p>is not an integer</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/promotion.js",
    "groupTitle": "Promotions"
  },
  {
    "type": "put",
    "url": "/promotion/create",
    "title": "Update a Promotion",
    "name": "update",
    "group": "Promotions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>unique id of the Promotion</p>"
          },
          {
            "group": "Parameter",
            "type": "none",
            "optional": false,
            "field": "variable",
            "description": "<p>depend of the user: He can set the column and the value that he want to update in promotions</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "False",
            "description": ""
          },
          {
            "group": "Error 500",
            "optional": false,
            "field": "parameter",
            "description": "<p>is not an integer</p>"
          }
        ],
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "False",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\nFalse",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal server error\n\"parameter is not an integer\"",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "Routes/promotion.js",
    "groupTitle": "Promotions"
  }
] });

define({ "api": [
  {
    "type": "post",
    "url": "/external/v1.0/parcel",
    "title": "Create parcels",
    "version": "1.0.1",
    "name": "CreateParcels",
    "group": "Parcels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type=application/json Default value: <code>application/json</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>JWT + Token</code> .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "parcels",
            "description": "<p>List of parcel.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "parcel",
            "description": "<p>Parcel which create.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.consignment",
            "description": "<p>Parcel consignment. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.parcelGroupId",
            "description": "<p>Parcel group name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.type",
            "description": "<p>Type of direction e.g. job to pick up a parcel from the sender to a warehouse, job to deliver a parcel to the end recipient, or both directions from pickup to deliver type: <code>PD or PDD</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.brand",
            "description": "<p>Product branding.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.shopId",
            "description": "<p>Pickup address. <code>* Can add address pickup address by use Create Shop API</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.parcelSizeId",
            "description": "<p>Standard package size, refer to <code>EMS</code> box from Thai Post <code>(“SIZEA”, “SIZEB”, “SIZEC”, “SIZED”)</code>. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.codAmount",
            "description": "<p>The amount required to collect. If customers have a need to collect.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.codAmount2",
            "description": "<p>The amount charged to collect the customer to pay for transportation to Sendit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.weight",
            "description": "<p>Parcel's weight.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.width",
            "description": "<p>Parcel's width.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.length",
            "description": "<p>Parcel's length.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.height",
            "description": "<p>Parcel's height.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.shopCode",
            "description": "<p>Sender shop code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipientShopCode",
            "description": "<p>Recipient shop code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "parcel.sender",
            "description": "<p>Information of sender. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.company",
            "description": "<p>Sender company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.name",
            "description": "<p>Sender name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.phone",
            "description": "<p>Sender phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.address",
            "description": "<p>Sender address. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.city",
            "description": "<p>City for pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.postcode",
            "description": "<p>Postcoe for pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.sender.lat",
            "description": "<p>Latitude for pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.sender.lng",
            "description": "<p>Longitude for pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "parcel.recipient",
            "description": "<p>Information of recipient. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.name",
            "description": "<p>Recipient name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.phone",
            "description": "<p>Recipient phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.address",
            "description": "<p>Recipient address. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.city",
            "description": "<p>City for delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.postcode",
            "description": "<p>Postcoe for delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.recipient.lat",
            "description": "<p>Latitude for delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.recipient.lng",
            "description": "<p>Longitude for delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.ref1",
            "description": "<p>Product references.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.ref2",
            "description": "<p>Product references.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.ref3",
            "description": "<p>Product references.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.note",
            "description": "<p>Note.</p>"
          },         
          
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"parcels\": [\n       {\n       \"consignment\": \"1ABCDE48\",\n          \"type\": \"PD\",\n          \"shopId\": 1,\n          \"sender\": {\n          \t\t \"company\": \"Sendit Thailand.\",\n          \t\t \"phone\": \"0812345678\",\n          \t\t \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n              \"city\": \"กทม\",\n          \t\t \"postcode\": \"10500\"\n           },\n           \"recipient\": {\n               \"name\": \"อรม ดี\",\n               \"phone\": \"0812345678\",\n               \"address\": \"11/2 หมู่ 3 ตำบลนาแก อำเภอนาแก นครพนม 48130 ประเทศไทย\",\n\t              \"city\": \"นครพนม\",\n\t              \"postcode\": \"48130\"\n          }\n        }\n\t\t   ]\n    }",
          "type": "json"
        },
        {
          "title": "Request-Example-with-Parcel-Group:",
          "content": "    {\n      \"parcels\": [\n       {\n       \"consignment\": \"1ABCDE48\",\n          \"parcelGroupId\": \"A2000001\",\n          \"type\": \"PD\",\n          \"shopId\": 1,\n          \"sender\": {\n          \t\t \"company\": \"Sendit Thailand.\",\n          \t\t \"phone\": \"0812345678\",\n          \t\t \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n              \"city\": \"กทม\",\n          \t\t \"postcode\": \"10500\"\n           },\n           \"recipient\": {\n               \"name\": \"อรม ดี\",\n               \"phone\": \"0812345678\",\n               \"address\": \"11/2 หมู่ 3 ตำบลนาแก อำเภอนาแก นครพนม 48130 ประเทศไทย\",\n\t              \"city\": \"นครพนม\",\n\t              \"postcode\": \"48130\"\n          }\n        },\n       {\n       \"consignment\": \"1ABCDE49\",\n          \"parcelGroupId\": \"A2000001\",\n          \"type\": \"PD\",\n          \"shopId\": 1,\n          \"sender\": {\n          \t\t \"company\": \"Sendit Thailand.\",\n          \t\t \"phone\": \"0812345678\",\n          \t\t \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n              \"city\": \"กทม\",\n          \t\t \"postcode\": \"10500\"\n           },\n           \"recipient\": {\n               \"name\": \"อรม ดี\",\n               \"phone\": \"0812345678\",\n               \"address\": \"11/2 หมู่ 3 ตำบลนาแก อำเภอนาแก นครพนม 48130 ประเทศไทย\",\n\t              \"city\": \"นครพนม\",\n\t              \"postcode\": \"48130\"\n          }\n        }\n\t\t   ]\n    }",
          "type": "json"
        },
        {
          "title": "Request-Example-with-shopCode:",
          "content": `{
  "parcels": [
    {
      "consignment": "1ABCDE48",
      "parcelGroup": "A2000001",
      "ref1": "",    
      "ref2": "",
      "ref3": "",
      "weight": 2,
      "width": 2,
      "length": 2,
      "height": 4,
      "note": "",
      "shopCode": "237189",
      "recipientShopCode": "302819",
      "sender": {
        "company": "Sendit Thailand.",
        "phone": "0812345678",
        "address": "11/2 แขวงสีลมเขต บางรัก กทม 10500",
        "city": "กทม",
        "postcode": "10500"
    },
    "recipient": {
      "name": "อรม ดี",
      "phone": "0812345678",
      "address": "11/2 หมู่ 3 ตำบลนาแก อำเภอนาแก นครพนม 48130 ประเทศไทย",
      "city": "นครพนม",
      "postcode": "48130"
  }
    }
  ]
}`,
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.trackingCode",
            "description": "<p>Item info was sent to the system status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.trackingStatus",
            "description": "<p>Item info was sent to the system status name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t statusCode: 200,\n  data: {\n     \"trackingCode\": 101,\n     \"trackingStatus\": \"NEW\"\n  }\n}",
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
            "field": "UnprocessableEntity",
            "description": "<p>Missing required parameters</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/external/external-parcel.controller.js",
    "groupTitle": "Parcels"
  },
  {
    "type": "post",
    "url": "/external/v1.0/parcel",
    "title": "Create parcels",
    "version": "1.0.0",
    "name": "CreateParcels",
    "group": "Parcels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type=application/json Default value: <code>application/json</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>JWT + Token</code> .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "parcels",
            "description": "<p>List of parcel.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "parcel",
            "description": "<p>Parcel which create.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.consignment",
            "description": "<p>Parcel consignment. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.type",
            "description": "<p>Type of direction e.g. job to pick up a parcel from the sender to a warehouse, job to deliver a parcel to the end recipient, or both directions from pickup to deliver type: <code>PD or PDD</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.brand",
            "description": "<p>Product branding.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.shopId",
            "description": "<p>Pickup address. <code>* Can add address pickup address by use Create Shop API</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.parcelSizeId",
            "description": "<p>Standard package size, refer to <code>EMS</code> box from Thai Post <code>(“SIZEA”, “SIZEB”, “SIZEC”, “SIZED”)</code>. <code>Required</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.codAmount",
            "description": "<p>The amount required to collect. If customers have a need to collect.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.codAmount2",
            "description": "<p>The amount charged to collect the customer to pay for transportation to Sendit.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "parcel.sender",
            "description": "<p>Information of sender.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.company",
            "description": "<p>Sender company.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.name",
            "description": "<p>Sender name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.phone",
            "description": "<p>Sender phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.address",
            "description": "<p>Sender address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.city",
            "description": "<p>City for pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.sender.postcode",
            "description": "<p>Postcoe for pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.sender.lat",
            "description": "<p>Latitude for pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.sender.lng",
            "description": "<p>Longitude for pickup.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "parcel.recipient",
            "description": "<p>Information of recipient.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.name",
            "description": "<p>Recipient name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.phone",
            "description": "<p>Recipient phone.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.address",
            "description": "<p>Recipient address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.city",
            "description": "<p>City for delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.recipient.postcode",
            "description": "<p>Postcoe for delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.recipient.lat",
            "description": "<p>Latitude for delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "parcel.recipient.lng",
            "description": "<p>Longitude for delivery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.ref1",
            "description": "<p>Product references.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.ref2",
            "description": "<p>Product references.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.ref3",
            "description": "<p>Product references.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parcel.note",
            "description": "<p>Note.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"parcels\": [\n       {\n       \"consignment\": \"1ABCDE48\",\n          \"type\": \"PD\",\n          \"shopId\": 1,\n          \"sender\": {\n          \t\t \"company\": \"Sendit Thailand.\",\n          \t\t \"phone\": \"0812345678\",\n          \t\t \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n              \"city\": \"กทม\",\n          \t\t \"postcode\": \"10500\"\n           },\n           \"recipient\": {\n               \"name\": \"อรม ดี\",\n               \"phone\": \"0812345678\",\n               \"address\": \"11/2 หมู่ 3 ตำบลนาแก อำเภอนาแก นครพนม 48130 ประเทศไทย\",\n\t              \"city\": \"นครพนม\",\n\t              \"postcode\": \"48130\"\n          }\n        }\n\t\t   ]\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.trackingCode",
            "description": "<p>Item info was sent to the system status code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.trackingStatus",
            "description": "<p>Item info was sent to the system status name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t statusCode: 200,\n  data: {\n     \"trackingCode\": 101,\n     \"trackingStatus\": \"NEW\"\n  }\n}",
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
            "field": "UnprocessableEntity",
            "description": "<p>Missing required parameters</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/external/external-parcel.controller.js",
    "groupTitle": "Parcels"
  },
  {
    "type": "get",
    "url": "/external/v1.0/parcel/:consignment/tracking",
    "title": "Get Parcel Tracking (Full Details)",
    "permission": [
      {
        "name": "Parcel"
      }
    ],
    "version": "1.0.1",
    "name": "getParcelTracking",
    "group": "Parcels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type=application/json Default value: <code>application/json</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>JWT + Token</code> .</p>"
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
            "field": "Parcel",
            "description": "<p>Parcel information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "parcelGroup",
            "description": "<p>Parcel group information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pickUpAddress",
            "description": "<p>Picked-up address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "deliveryAddress",
            "description": "<p>Delivered address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "history",
            "description": "<p>Parcel status history.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"statusCode\": 200,\n \"data\": {\n   \"parcelId\": 32827,\n   \"parcelSetId\": 43,\n   \"bagId\": \"305\",\n   \"consignment\": \"1J5L2O\",\n   \"brand\": null,\n   \"customerId\": 16,\n   \"type\": \"PD\",\n   \"parcelSizeId\": \"SIZEB\",\n   \"shopId\": null,\n   \"senderId\": null,\n   \"recipientId\": null,\n   \"name\": \"นฤมล  ขำกา\",\n   \"phone\": \"0812345678\",\n   \"email\": null,\n   \"prefertime\": null,\n   \"note\": null,\n   \"createdAt\": \"2016-09-05T07:27:19.000Z\",\n   \"pickUpAddress\": {\n     \"addressId\": 123,\n     \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n     \"postcode\": \"11110\",\n     \"lat\": 13.9379874,\n     \"lng\": 100.6126417,\n     \"geoStatus\": \"DRIVER\",\n     \"coordinateId\": null,\n     \"createdAt\": \"2016-08-24T10:57:36.000Z\"\n   },\n   \"parcelGroup\": {\n     \"parcelGroupId\": \"A2000001\",\n     \"orderSequence\": \"1/2\",\n     \"createdAt\": \"2016-09-05T07:27:19.000Z\"\n   },\n   \"deliveryAddress\": {\n     \"addressId\": 29753,\n     \"address\": \"ม.7 แขวงโคกแฝด เขตหนองจอก Bangkok 10530 Thailand\",\n     \"postcode\": \"10530\",\n     \"lat\": 13.818187007321821,\n     \"lng\": 100.83799498829178,\n     \"geoStatus\": \"DRIVER\",\n     \"coordinateId\": null,\n     \"createdAt\": \"2016-09-05T07:27:19.000Z\"\n   },\n   \"history\": [\n     {\n       \"status\": 201,\n       \"note\": \"\",\n       \"createdAt\": \"2016-09-05T07:27:19.000Z\",\n       \"message\": \"Item was on picking up process\"\n     },\n     {\n       \"status\": 101,\n       \"note\": \"\",\n       \"createdAt\": \"2016-09-05T07:27:19.000Z\",\n       \"message\": \"Item info was sent to the system\"\n     }\n   ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/external/external-parcel.controller.js",
    "groupTitle": "Parcels"
  },
  {
    "type": "get",
    "url": "/external/v1.0/parcel/:consignment/tracking",
    "title": "Get Parcel Tracking (Full Details)",
    "permission": [
      {
        "name": "Parcel"
      }
    ],
    "version": "1.0.0",
    "name": "getParcelTracking",
    "group": "Parcels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type=application/json Default value: <code>application/json</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>JWT + Token</code> .</p>"
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
            "field": "Parcel",
            "description": "<p>Parcel information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pickUpAddress",
            "description": "<p>Picked-up address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "deliveryAddress",
            "description": "<p>Delivered address.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "history",
            "description": "<p>Parcel status history.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"statusCode\": 200,\n \"data\": {\n   \"parcelId\": 32827,\n   \"parcelSetId\": 43,\n   \"bagId\": \"305\",\n   \"consignment\": \"1J5L2O\",\n   \"brand\": null,\n   \"customerId\": 16,\n   \"type\": \"PD\",\n   \"parcelSizeId\": \"SIZEB\",\n   \"shopId\": null,\n   \"senderId\": null,\n   \"recipientId\": null,\n   \"name\": \"นฤมล  ขำกา\",\n   \"phone\": \"0812345678\",\n   \"email\": null,\n   \"prefertime\": null,\n   \"note\": null,\n   \"createdAt\": \"2016-09-05T07:27:19.000Z\",\n   \"pickUpAddress\": {\n     \"addressId\": 123,\n     \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n     \"postcode\": \"11110\",\n     \"lat\": 13.9379874,\n     \"lng\": 100.6126417,\n     \"geoStatus\": \"DRIVER\",\n     \"coordinateId\": null,\n     \"createdAt\": \"2016-08-24T10:57:36.000Z\"\n   },\n   \"deliveryAddress\": {\n     \"addressId\": 29753,\n     \"address\": \"ม.7 แขวงโคกแฝด เขตหนองจอก Bangkok 10530 Thailand\",\n     \"postcode\": \"10530\",\n     \"lat\": 13.818187007321821,\n     \"lng\": 100.83799498829178,\n     \"geoStatus\": \"DRIVER\",\n     \"coordinateId\": null,\n     \"createdAt\": \"2016-09-05T07:27:19.000Z\"\n   },\n   \"history\": [\n     {\n       \"status\": 201,\n       \"note\": \"\",\n       \"createdAt\": \"2016-09-05T07:27:19.000Z\",\n       \"message\": \"Item was on picking up process\"\n     },\n     {\n       \"status\": 101,\n       \"note\": \"\",\n       \"createdAt\": \"2016-09-05T07:27:19.000Z\",\n       \"message\": \"Item info was sent to the system\"\n     }\n   ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/external/external-parcel.controller.js",
    "groupTitle": "Parcels"
  },
  {
    "type": "get",
    "url": "/external/v1.0/parcel/:consignment",
    "title": "Get Parcel Tracking (Current Status)",
    "permission": [
      {
        "name": "Parcel"
      }
    ],
    "version": "1.0.0",
    "name": "getParcelTrackingCurrentStatus",
    "group": "Parcels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type=application/json Default value: <code>application/json</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>JWT + Token</code> .</p>"
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
            "field": "consignment",
            "description": "<p>Parcel consignment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>Parcel status code. <code>Can check from Sendit status code document</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Note message.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"statusCode\": 200,\n \"data\": {\n   \"consignment\": \"1ABC2O\",\n   \"status\": 302,\n   \"note\": \"Complete delivery\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/external/external-parcel.controller.js",
    "groupTitle": "Parcels"
  },
  {
    "type": "put",
    "url": "/external/v1.0/parcel/cancel",
    "title": "Cancel Parcels",
    "permission": [
      {
        "name": "Parcel"
      }
    ],
    "version": "1.0.0",
    "name": "putCancelParcels",
    "group": "Parcels",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type=application/json Default value: <code>application/json</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>JWT + Token</code> .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "consignments",
            "description": "<p>List of parcel consignments which want to cancel.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n      \"consignments\": [\n      \t\t\"1ABCDE48\",\n      \t\t\"2ABCDE48\",\n      \t\t\"3ABCDE48\"\n\t\t   ]\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Process status code.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"statusCode\": 200\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/external/external-parcel.controller.js",
    "groupTitle": "Parcels"
  },
  {
    "type": "post",
    "url": "/external/v1.0/parcel/courier/:consignment/update",
    "title": "Courier Update Parcel Status",
    "version": "1.0.0",
    "name": "UpdateParcel",
    "group": "Courier",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>JWT + Token</code> .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body (Formdata)": [
          {
            "group": "Body (Formdata)",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Signature Image</p>"
          },
          {
            "group": "Body (Formdata)",
            "type": "String",
            "optional": false,
            "field": "courierTracking",
            "description": "<p>Courier Tracking</p>"
          },
          {
            "group": "Body (Formdata)",
            "type": "Float",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Courier status code <code>Required</code></p>"
          },
          {
            "group": "Body (Formdata)",
            "type": "ISODatetime",
            "optional": false,
            "field": "dateTime",
            "description": "<p>Delivered Datetime <code>Required</code></p>"
          },
          {
            "group": "Body (Formdata)",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Delivered Note</p>"
          },
          {
            "group": "Body (Formdata)",
            "type": "Double",
            "optional": false,
            "field": "deliveredLat",
            "description": "<p>Delivered location's lattitude</p>"
          },
          {
            "group": "Body (Formdata)",
            "type": "Double",
            "optional": false,
            "field": "deliveredLng",
            "description": "<p>Delivered location's longtitude</p>"
          },
        ]
      },
    },
    "examples": [
      {
        "title": "Request-Example:",
        "content": `
          {
            "file": <File>
          }
        `,
        "type": "json"
      },
      {
        "title": "Example-Courier-Tracking:",
        "content": `
          {
            "courierTracking": "ABN123455459"
          }
        `,
        "type": "json"
      },
      {
        "title": "Example-Status-Update:",
        "content": `
          {
            "statusCode": 123,
            "dateTime": "2018-09-20T03:44:28.352Z",
            "note": "No one at home",
            "deliveredLat": 11.002132,
            "deliveredLng": 12.10332
          }
        `,
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.message",
            "description": "<p>ok = update success</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": `
            HTTP/1.1 200 OK
            {
              "statusCode": 200,
              "data": {
                  "message": "ok"
              }
            }
          `,
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
            "field": "statusCode",
            "description": "<p>Status Code</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "errorCode",
            "description": "<p>Error Code</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>Error Message</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "messageCode",
            "description": "<p>Error Message Code</p>"
          },
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": `
            HTTP/1.1 422
            {
              "statusCode": 400,
              "errorCode": "SB-023",
              "message": "Datetime is not today",
              "messageCode": "error.SB-023"
            }
          `,
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/external/external-parcel.controller.js",
    "groupTitle": "Courier"
  },
  {
    "type": "post",
    "url": "/customer/v1.0/shops",
    "title": "Create a new shop",
    "version": "1.0.0",
    "name": "CreateShop",
    "group": "Shops",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Shop name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Shop address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>Shop postcode.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Shop phone.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"name\": \"Sendit BKK Shop\",\n     \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n     \"postcode\": \"10500\",\n     \"phone\": \"023456789\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n     \"shopId\": \"1\",\n     \"name\": \"Sendit BKK Shop\",\n     \"phone\": \"023456789\",\n     \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n     \"customer\": \"Sendit Thailand\",\n     \"createdAt\": \"2016-09-26T15:39:20.161Z\",\n     \"updatedAt\": \"2016-09-26T15:39:20.000Z\"\n  }\n}",
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
            "field": "UnprocessableEntity",
            "description": "<p>Missing required parameters</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/customer/customer.controller.js",
    "groupTitle": "Shops"
  },
  {
    "type": "get",
    "url": "/customer/v1.0/shops",
    "title": "Get Shops",
    "permission": [
      {
        "name": "Shop"
      }
    ],
    "version": "1.0.0",
    "name": "getShops",
    "group": "Shops",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Content-Type=application/json Default value: <code>application/json</code>.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>JWT + Token</code> .</p>"
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
            "field": "Customer",
            "description": "<p>Customer information.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "shops",
            "description": "<p>Shops list.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n \"statusCode\": 200,\n \"data\": {\n   \"customer\": {\n   \t\"code\": \"SD\",\n   \t\"name\": \"Sendit Thailand\",\n   \t\"token\": \"sdt\"\n   },\n   \"shops\": [\n   \t{\n   \t\t\"shopId\": 1,\n   \t\t\"name\": \"Sendit BKK shop\",\n       \"address\": \"11/2 แขวงสีลมเขต บางรัก กทม 10500\",\n       \"phone\": \"023456789\"\n   \t}\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "app/apis/customer/customer.controller.js",
    "groupTitle": "Shops"
  }
] });

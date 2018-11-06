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
  },
  { // COURIER
    "type": "post",
    "url": "/external/v1.0/parcel/courier/:consignment/update",
    "title": "Update Parcel Status",
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
            "field": "Content-Type",
            "description": "<p>Content-Type=application/json Default value: <code>application/json</code>.</p>" 
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization Token <code>API KEY</code> .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          // {
          //   "group": "Body (Formdata)",
          //   "type": "File",
          //   "optional": false,
          //   "field": "file",
          //   "description": "<p>Signature Image</p>"
          // },
          // {
          //   "group": "Body (Formdata)",
          //   "type": "String",
          //   "optional": false,
          //   "field": "courierTracking",
          //   "description": "<p>Courier Tracking</p>"
          // },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "statusCode",
            "description": "<p>Courier status code <code>Required</code> For LFLogistic please see statusCode in Tab 'LFLogictic StatusCode List above' </p>"
          },
          {
            "group": "Body",
            "type": "ISODatetime",
            "optional": false,
            "field": "dateTime",
            "description": "<p>Delivered Datetime <code>Required</code></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>Delivered Note</p>"
          },
          {
            "group": "Body",
            "type": "Double",
            "optional": false,
            "field": "deliveredLat",
            "description": "<p>Delivered location's lattitude</p>"
          },
          {
            "group": "Body",
            "type": "Double",
            "optional": false,
            "field": "deliveredLng",
            "description": "<p>Delivered location's longtitude</p>"
          }
        ]
      },
    },
    "examples": [
      // {
      //   "title": "Request-Example:",
      //   "content": `
      //     {
      //       "file": <File>
      //     }
      //   `,
      //   "type": "json"
      // },
      // {
      //   "title": "Example-Courier-Tracking:",
      //   "content": `
      //     {
      //       "courierTracking": "ABN123455459"
      //     }
      //   `,
      //   "type": "json"
      // },
      {
        "title": "Example:",
        "content": `
          {
            "statusCode": "AHNS",
            "dateTime": "2018-09-20T03:44:28.352Z",
            "note": "No one at home",
            "deliveredLat": 11.002132,
            "deliveredLng": 12.10332
          }
        `,
        "type": "json"
      },
      {
        "title": "Example StatusCode:",
        "content": `
          [
            {
              "statusCode" : "A7",
              "statusName" : "A7",
              "description" : "ลูกค้าปฏิเสธ(Reject)",
              "language" : "TH",
              "referenceCode" : 703
            },
            {
              "statusCode" : "A7A01",
              "statusName" : "A7A01",
              "description" : "จำนวนสินค้าไม่ครบ(Shortage)",
              "language" : "TH",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A01",
              "statusName" : "A7A01",
              "description" : "Found shortage from parcels",
              "language" : "EN",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A02",
              "statusName" : "A7A02",
              "description" : "จำนวนสินค้าไม่ครบ",
              "language" : "TH",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A02",
              "statusName" : "A7A02",
              "description" : "Wrong quantity",
              "language" : "EN",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A03",
              "statusName" : "A7A03",
              "description" : "สินค้าไม่ถูกต้อง",
              "language" : "TH",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A03",
              "statusName" : "A7A03",
              "description" : "Wrong Product",
              "language" : "EN",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A04",
              "statusName" : "A7A04",
              "description" : "สินค้าไม่สมบูรณ์",
              "language" : "TH",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A04",
              "statusName" : "A7A04",
              "description" : "Bad quality of product",
              "language" : "EN",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A05",
              "statusName" : "A7A05",
              "description" : "เอกสารไม่สมบูรณ์",
              "language" : "TH",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A05",
              "statusName" : "A7A05",
              "description" : "Bad quality of document",
              "language" : "EN",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A06",
              "statusName" : "A7A06",
              "description" : "เหตุผลอื่นๆ",
              "language" : "TH",
              "referenceCode" : 653
            },
            {
              "statusCode" : "A7A06",
              "statusName" : "A7A06",
              "description" : "Other reasons",
              "language" : "EN",
              "referenceCode" : 653
            },
            {
              "statusCode" : "AF",
              "statusName" : "NS",
              "description" : "รับสินค้าออกจากคลังสินค้าแล้ว",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "AF",
              "statusName" : "NS",
              "description" : "Pickup from DC",
              "language" : "EN",
              "referenceCode" : 202
            },
            {
              "statusCode" : "AFNS",
              "statusName" : "AFNS",
              "description" : "รับสินค้าออกจากคลังสินค้าแล้ว",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "AFNS",
              "statusName" : "AFNS",
              "description" : "Pickup from DC",
              "language" : "EN",
              "referenceCode" : 202
            },
            {
              "statusCode" : "AH",
              "statusName" : "AH",
              "description" : "ขนส่งล่าช้า(Attempted Delivery)",
              "language" : "TH",
              "referenceCode" : 502
            },
            {
              "statusCode" : "AHNS",
              "statusName" : "AHNS",
              "description" : "พยายามจัดส่งอีกครั้ง",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "AHNS",
              "statusName" : "AHNS",
              "description" : "Parcel is delivered",
              "language" : "EN",
              "referenceCode" : 202
            },
            {
              "statusCode" : "AHONS",
              "statusName" : "AHONS",
              "description" : "เตรียมส่งคืนสินค้า เนื่องจากครบจำนวนครั้งในการพยายามส่งสินค้า",
              "language" : "TH",
              "referenceCode" : 652
            },
            {
              "statusCode" : "AHONS",
              "statusName" : "AHONS",
              "description" : "Out of attempts",
              "language" : "EN",
              "referenceCode" : 652
            },
            {
              "statusCode" : "AHS17A01",
              "statusName" : "AHS17A01",
              "description" : "ที่อยู่จัดส่งไม่ถูกต้อง",
              "language" : "TH",
              "referenceCode" : 554
            },
            {
              "statusCode" : "AHS17A01",
              "statusName" : "AHS17A01",
              "description" : "Wrong delivery address",
              "language" : "EN",
              "referenceCode" : 554
            },
            {
              "statusCode" : "AHS19A02",
              "statusName" : "AHS19A02",
              "description" : "ไม่มีผู้รับอยู่ ณ ที่จัดส่ง",
              "language" : "TH",
              "referenceCode" : 552
            },
            {
              "statusCode" : "AHS19A02",
              "statusName" : "AHS19A02",
              "description" : "No one is at home",
              "language" : "EN",
              "referenceCode" : 552
            },
            {
              "statusCode" : "AHS19A07",
              "statusName" : "AHS19A07",
              "description" : "ไม่มีผู้รับอยู่ ณ ที่จัดส่งและผู้รับแทนปฏิเสธสินค้า",
              "language" : "TH",
              "referenceCode" : 552
            },
            {
              "statusCode" : "AHS19A07",
              "statusName" : "AHS19A07",
              "description" : "No one is at home and consignee reject to receive the parcel",
              "language" : "EN",
              "referenceCode" : 552
            },
            {
              "statusCode" : "AI",
              "statusName" : "AI",
              "description" : "ลูกค้าเปลี่ยนสถานที่ส่ง(Re-Direct)",
              "language" : "TH",
              "referenceCode" : 553
            },
            {
              "statusCode" : "ALH",
              "statusName" : "NS",
              "description" : "สินค้าถึงจุดกระจายสินค้า",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "ALH",
              "statusName" : "NS",
              "description" : "Parcel arrived to hub",
              "language" : "EN",
              "referenceCode" : 202
            },
            {
              "statusCode" : "ALHNS",
              "statusName" : "ALHNS",
              "description" : "สินค้าถึงจุดกระจายสินค้า",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "ALHNS",
              "statusName" : "ALHNS",
              "description" : "Parcel arrived to hub",
              "language" : "EN",
              "referenceCode" : 202
            },
            {
              "statusCode" : "D1",
              "statusName" : "D1",
              "description" : "ส่งแล้ว(Delivered)",
              "language" : "TH",
              "referenceCode" : 302
            },
            {
              "statusCode" : "D1A09",
              "statusName" : "D1A09",
              "description" : "สินค้าได้ถูกจัดส่งแล้ว ในขณะที่สินค้ามีความเสียหาย",
              "language" : "TH",
              "referenceCode" : 302
            },
            {
              "statusCode" : "D1A09",
              "statusName" : "D1A09",
              "description" : "Parcel is delivered while damaged",
              "language" : "EN",
              "referenceCode" : 302
            },
            {
              "statusCode" : "D1AS",
              "statusName" : "D1AS",
              "description" : "สินค้าได้ถูกจัดส่งโดยไม่มี POD",
              "language" : "TH",
              "referenceCode" : 302
            },
            {
              "statusCode" : "D1AS",
              "statusName" : "D1AS",
              "description" : "Parcel is delivered without POD",
              "language" : "EN",
              "referenceCode" : 302
            },
            {
              "statusCode" : "D1NS",
              "statusName" : "D1NS",
              "description" : "สินค้าได้ถูกจัดส่งเรียบร้อย",
              "language" : "TH",
              "referenceCode" : 302
            },
            {
              "statusCode" : "D1NS",
              "statusName" : "D1NS",
              "description" : "Parcel is delivered",
              "language" : "EN",
              "referenceCode" : 302
            },
            {
              "statusCode" : "PD",
              "statusName" : "PD",
              "description" : "ส่งบางส่วน(Partial Delivery)",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "RAFRA01",
              "statusName" : "RAFRA01",
              "description" : "กำลังส่งคืนสินค้า เนื่องจากจำนวนสินค้าไม่ครบ",
              "language" : "TH",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA01",
              "statusName" : "RAFRA01",
              "description" : "Returning the parcel because found shortage from parcels",
              "language" : "EN",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA02",
              "statusName" : "RAFRA02",
              "description" : "กำลังส่งคืนสินค้า เนื่องจากจำนวนสินค้าไม่ถูกต้อง",
              "language" : "TH",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA02",
              "statusName" : "RAFRA02",
              "description" : "Returning the parcel because wrong quantity",
              "language" : "EN",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA03",
              "statusName" : "RAFRA03",
              "description" : "กำลังส่งคืนสินค้า เนื่องจากตัวสินค้าไม่ถูกต้อง",
              "language" : "TH",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA03",
              "statusName" : "RAFRA03",
              "description" : "Returning the parcel because wrong product",
              "language" : "EN",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA04",
              "statusName" : "RAFRA04",
              "description" : "กำลังส่งคืนสินค้า เนื่องจากสินค้าไม่สมบูรณ์",
              "language" : "TH",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA04",
              "statusName" : "RAFRA04",
              "description" : "Returning the parcel because bad quality of product",
              "language" : "EN",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA05",
              "statusName" : "RAFRA05",
              "description" : "กำลังส่งคืนสินค้า เนื่องจากเอกสารไม่สมบูรณ์",
              "language" : "TH",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA05",
              "statusName" : "RAFRA05",
              "description" : "Returning the parcel because bad quality of document",
              "language" : "EN",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA06",
              "statusName" : "RAFRA06",
              "description" : "กำลังส่งคืนสินค้า เนื่องจากเหตุผลอื่นๆ",
              "language" : "TH",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA06",
              "statusName" : "RAFRA06",
              "description" : "Returning the parcel because other reasons",
              "language" : "EN",
              "referenceCode" : 703
            },
            {
              "statusCode" : "RAFRA07",
              "statusName" : "RAFRA07",
              "description" : "กำลังส่งคืนสินค้า เนื่องจากครบจำนวนครั้งที่ต้องทำการส่ง",
              "language" : "TH",
              "referenceCode" : 708
            },
            {
              "statusCode" : "RAFRA07",
              "statusName" : "RAFRA07",
              "description" : "Returning the parcel because out of attempts",
              "language" : "EN",
              "referenceCode" : 708
            },
            {
              "statusCode" : "RD1A01",
              "statusName" : "RD1A01",
              "description" : "ส่งสินค้าคืนสำเร็จ เนื่องจากจำนวนสินค้าไม่ครบ",
              "language" : "TH",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A01",
              "statusName" : "RD1A01",
              "description" : "Returned the parcel because found shortage from parcels",
              "language" : "EN",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A02",
              "statusName" : "RD1A02",
              "description" : "ส่งสินค้าคืนสำเร็จ เนื่องจากจำนวนสินค้าไม่ถูกต้อง",
              "language" : "TH",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A02",
              "statusName" : "RD1A02",
              "description" : "Returned the parcel because wrong quantity",
              "language" : "EN",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A03",
              "statusName" : "RD1A03",
              "description" : "ส่งสินค้าคืนสำเร็จ เนื่องจากตัวสินค้าไม่ถูกต้อง",
              "language" : "TH",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A03",
              "statusName" : "RD1A03",
              "description" : "Returned the parcel because wrong product",
              "language" : "EN",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A04",
              "statusName" : "RD1A04",
              "description" : "ส่งสินค้าคืนสำเร็จ เนื่องจากสินค้าไม่สมบูรณ์",
              "language" : "TH",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A04",
              "statusName" : "RD1A04",
              "description" : "Returned the parcel because bad quality of product",
              "language" : "EN",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A05",
              "statusName" : "RD1A05",
              "description" : "ส่งสินค้าคืนสำเร็จ เนื่องจากเอกสารไม่สมบูรณ์",
              "language" : "TH",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A05",
              "statusName" : "RD1A05",
              "description" : "Returned the parcel because bad quality of document",
              "language" : "EN",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A06",
              "statusName" : "RD1A06",
              "description" : "ส่งสินค้าคืนสำเร็จ เนื่องจากเหตุผลอื่นๆ",
              "language" : "TH",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A06",
              "statusName" : "RD1A06",
              "description" : "Returned the parcel because other reasons",
              "language" : "EN",
              "referenceCode" : 803
            },
            {
              "statusCode" : "RD1A07",
              "statusName" : "RD1A07",
              "description" : "ส่งสินค้าคืนสำเร็จ เนื่องจากครบจำนวนครั้งที่ต้องทำการส่ง",
              "language" : "TH",
              "referenceCode" : 808
            },
            {
              "statusCode" : "RD1A07",
              "statusName" : "RD1A07",
              "description" : "Returned the parcel because out of attempts",
              "language" : "EN",
              "referenceCode" : 808
            },
            {
              "statusCode" : "SHDNS",
              "statusName" : "SHDNS",
              "description" : "จัดส่งอีกครั้งในวันถัดไป",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "SHDNS",
              "statusName" : "SHDNS",
              "description" : "Reschedule delivery",
              "language" : "EN",
              "referenceCode" : 202
            },
            {
              "statusCode" : "X1",
              "statusName" : "X1",
              "description" : "ถึงลูกค้า(Arrived at Delivery Loc)",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "X1NS",
              "statusName" : "X1NS",
              "description" : "ถึงสถานที่ส่งปลายทาง เตรียมนำส่งผู้รับ",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "X1NS",
              "statusName" : "X1NS",
              "description" : "Arrive to the destination",
              "language" : "EN",
              "referenceCode" : 202
            },
            {
              "statusCode" : "X4",
              "statusName" : "X4",
              "description" : "ถึงศูนย์ซัพ(Arrived at non-LF Hub)",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "Z1",
              "statusName" : "Z1",
              "description" : "ถึงคลังLF(Arrived at LF DC)",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "Z1NS",
              "statusName" : "Z1NS",
              "description" : "สินค้าถูกส่งไปยัง คลังสินค้าและพร้อมทำการส่ง",
              "language" : "TH",
              "referenceCode" : 202
            },
            {
              "statusCode" : "Z1NS",
              "statusName" : "Z1NS",
              "description" : "Parcel is sent to hub and ready to send",
              "language" : "EN",
              "referenceCode" : 202
            }
          ]
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
  { // COURIER
    "type": "post",
    "url": "/external/v1.0/parcel/courier/:consignment/logging",
    "title": "Logging",
    "version": "1.0.0",
    "name": "LogingParcel",
    "group": "Courier",
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
            "description": "<p>Authorization Token <code>API KEY</code> .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "<code>Any</code>",
            "optional": false,
            "field": "<code>Any</code>",
            "description": "<p>Can be any fields</p>"
          }
        ]
      },
    },
    "examples": [
      {
        "title": "Example:",
        "content": `
          {
            "TransId": 213,
            "AccountId": "SENDITTH",
            "ExternDocId": "ORD",
            "Status": "WMS_ACCEPT",
            "ExternDocId": "ORD",
            "PlantId": 3101,
            "CompletedDate": "20150303100300",
            "reason": "String",
            "reasonCode": "String"
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
    "filename": "app/apis/external/external-parcel.controller.js",
    "groupTitle": "Courier"
  }
] });

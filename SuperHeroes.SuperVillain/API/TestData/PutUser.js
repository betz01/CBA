var faker = require('faker');

module.exports = {

    putUserData : [
        {
            testName : "TC-1 PUT User: Valid Request",
            tag : "regression",
            requestBodyPostUser : {
                "username": faker.internet.userName(),
                "score": 199
            },
            requestBody : {
                "username": "To be added dynamically",
                "score": 299
            },
            responseStatusCode : 204
        },

        {
            testName : "TC-2 PUT User: Invalid Request",
            tag : "regression",
            requestBodyPostUser : {
                "username": faker.internet.userName(),
                "score": 199
            },
            requestBody : {
                "username": "To be added dynamically"
            },
            responseStatusCode : 400
        }
       
    ]
  
}
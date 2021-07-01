var faker = require('faker');

module.exports = {

    postUserData : [
        {
            testName : "TC-1 POST Order: Valid Request - ResourceOwner",
            tag : "regression",
            requestBody : {
                "username": faker.internet.userName(),
                "score": 199
            },
            responseStatusCode : 201,
            responseStatus : "success",
            responseMessage : "User added."

        },

        {
            testName : "TC-2 POST User: Invalid Request",
            tag : "regression",
            requestBody : {
                "username": "TestUser1"
            },
            responseStatusCode : 400
        }
    ]
  
}
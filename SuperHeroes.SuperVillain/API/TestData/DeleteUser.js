var faker = require('faker');

module.exports = {

    deleteUserData : [
        {
            testName : "TC-1 DELETE User: Valid Request",
            tag : "regression",
            requestBodyPostUser : {
                "username": faker.internet.userName(),
                "score": 199
            },
            "delete-key" : "I donno",
            responseStatusCode : 204
        },

        {
            testName : "TC-2 DELETE User: Invalid Request",
            tag : "regression",
            requestBodyPostUser : {
                "username": faker.internet.userName(),
                "score": 199
            },
            "delete-key" : " ",
            responseStatusCode : 400
        }
    ]
  
}
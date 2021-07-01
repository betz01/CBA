module.exports = {

    getUserData : [
        {
            testName : "TC-1 GET User: Valid Request",
            tag : "regression",
            getUserPath : "/user",
            responseStatusCode : 200
        },

        {
            testName : "TC-2 GET User: Invalid Request",
            tag : "regression",
            getUserPath : "/user1",
            responseStatusCode : 404
        }

    ]
  
}
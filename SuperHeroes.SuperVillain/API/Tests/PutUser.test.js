const {callPostApi, callPutApi} = require('../Helpers/CallAPI');
const {verifyPropertyValue} = require('../Helpers/CommonFunctions');
const {putUserData} = require('../TestData/PutUser')

let postUserResponse, postUserResponseBody, putUserResponse, putUserResponseBody;

describe("PUT User Tests" , () => {
   
    putUserData.forEach((item) => {
       describe(`${item.tag} :\n ${item.testName}` , () => {

            beforeAll(async () => {

                const path = "/user"
                
                //Call the Post User endpoint
                postUserResponse = await callPostApi(server, path, item.requestBodyPostUser);
                postUserResponseBody = postUserResponse.body;

                //Call the Put User endpoint
                item.requestBody.username = item.requestBodyPostUser.username;
                putUserResponse = await callPutApi(server, path, item.requestBody);
                putUserResponseBody = putUserResponse.body;
                

            });
            
            //Tests
            switch(item.responseStatusCode){

                case 204:   verifyPropertyValue('statusCode', () => putUserResponse.status, () => item.responseStatusCode);
                            break;
                default:    verifyPropertyValue('statusCode', () => putUserResponse.status, () => item.responseStatusCode);;
                            break;
            }

        });
    });
});
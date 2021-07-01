const {callPostApi} = require('../Helpers/CallAPI');
const {verifyPropertyValue} = require('../Helpers/CommonFunctions');
const {postUserData} = require('../TestData/PostUser');

let postUserResponse, postUserResponseBody;

describe("POST User Tests" , () => {
   
    postUserData.forEach((item) => {
       describe(`${item.tag} :\n ${item.testName}` , () => {

            beforeAll(async () => {
                
                //Call the Post User endpoint
                const postUserPath = "/user"
                postUserResponse = await callPostApi(server, postUserPath, item.requestBody);
                postUserResponseBody = postUserResponse.body;

            });
            
            //Tests
            switch(item.responseStatusCode){

                case 201:   verifyPropertyValue('statusCode', () => postUserResponse.status, () => item.responseStatusCode);
                            verifyPropertyValue('status', () => postUserResponseBody.status, () => item.responseStatus);            
                            verifyPropertyValue('message', () => postUserResponseBody.message, () => item.responseMessage);
                            break;
                default:    verifyPropertyValue('statusCode', () => postUserResponse.status, () => item.responseStatusCode);;
                            break;
            }

        });
    });
});
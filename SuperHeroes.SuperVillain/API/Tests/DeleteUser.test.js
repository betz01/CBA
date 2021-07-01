const {callPostApi, callDeleteApi} = require('../Helpers/CallAPI');
const {verifyPropertyValue} = require('../Helpers/CommonFunctions');
const {deleteUserData} = require('../TestData/DeleteUser');

let postUserResponse, postUserResponseBody, deleteUserResponse, deleteUserResponseBody;

describe("DELETE User Tests" , () => {
   
    deleteUserData.forEach((item) => {
       describe(`${item.tag} :\n ${item.testName}` , () => {

            beforeAll(async () => {

                //Call the Post User endpoint
                const path = "/user"
                postUserResponse = await callPostApi(server, path, item.requestBodyPostUser);
                postUserResponseBody = postUserResponse.body;

                //Call the Delete User endpoint
                const deletePath = `/user/${item['delete-key']}`
                deleteUserResponse = await callDeleteApi(server, deletePath);
                deleteUserResponseBody = deleteUserResponse.body;                

            });
            
            //Tests
            switch(item.responseStatusCode){

                case 204:   verifyPropertyValue('statusCode', () => deleteUserResponse.status, () => item.responseStatusCode);
                            break;
                default:    verifyPropertyValue('statusCode', () => deleteUserResponse.status, () => item.responseStatusCode);;
                            break;
            }

        });
    });
});
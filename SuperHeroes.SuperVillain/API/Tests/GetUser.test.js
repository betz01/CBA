const {callGetApi} = require('../Helpers/CallAPI');
const {verifyPropertyValue} = require('../Helpers/CommonFunctions');
const {getUserData} = require('../TestData/GetUser');

let getUserResponse, getUserResponseBody;

describe("GET User Tests" , () => {
   
    getUserData.forEach((item) => {
       describe(`${item.tag} :\n ${item.testName}` , () => {

            beforeAll(async () => {
                
                //Call Get User endpoint                
                getUserResponse = await callGetApi(server, item.getUserPath, item.requestBody);
                getUserResponseBody = getUserResponse.body;
                
            });
            
            //Tests
            switch(item.responseStatusCode){

                case 200:   verifyPropertyValue('statusCode', () => getUserResponse.status, () => item.responseStatusCode);
                            break;
                default:    verifyPropertyValue('statusCode', () => getUserResponse.status, () => item.responseStatusCode);;
                            break;
            }

        });
    });
});
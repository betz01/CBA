var customFunctions = {

    verifyPropertyValue : (propertyName, actualResponse, expectedResponse) => {
        return test(`Verify ${propertyName}`, function () {
            //console.log(propertyName,actualResponse(),expectedResponse())
            try{
                expect(actualResponse()).toEqual(expectedResponse());
            }catch (err) {
                throw err.message;
            }
        });
    }

}

module.exports = customFunctions;

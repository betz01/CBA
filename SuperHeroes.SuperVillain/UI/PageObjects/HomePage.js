var faker = require('faker');

module.exports = {

    createUser : async (elements) => {

        //Enter Warrior Name  
        await page.fill(elements.warriorNameTextBoxLocator, elements.warriorName);
        //Click on Create Warrior button
        await page.click(elements.createWarriorButtonLocator);
        //Click on Start Journey button
        await page.click(elements.startJourneyButtonLocator);
        const url = await page.url();
        expect(url).toStartWith(elements.covidPageUrl);

    },

    elementsHomePage : {

            warriorNameTextBoxLocator : "#worrior_username",
            createWarriorButtonLocator : "#warrior",
            startJourneyButtonLocator : "#start",
            warriorName : faker.internet.userName(),
            covidPageUrl : "https://responsivefight.herokuapp.com/covid"
        }
  
}
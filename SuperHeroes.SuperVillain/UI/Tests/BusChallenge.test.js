const {elementsHomePage, createUser} = require('../PageObjects/HomePage');
const {elementsCovidPage, selectChallenge} = require('../PageObjects/CovidPage');
const {elementsBusPage, selectAnswer} = require('../PageObjects/BusPage');

describe("Bus challenge Tests" , () => {

    describe("Verifies the flow for Correct Answer" , () => {

        beforeAll(async () => {

          await page.goto(baseUrlLogin); 
          await page.waitForSelector(elementsHomePage.createWarriorButtonLocator);

        })
        
        test('Verify user is created and navigated to CovidPage successfully ', async () => {

            await createUser(elementsHomePage);        

        });

        test('Verify user answer is correct for Bus challenge', async () => {

            await selectChallenge(elementsCovidPage.BusButton,elementsBusPage.startButton);
            await selectAnswer(elementsBusPage.correctAnswer, elementsBusPage.successMessage, elementsBusPage.successMessageLoc);
    
        });

        test('Verify user is navigated to the leaderboard page to check score', async () => {

            await page.click(elementsBusPage.leaderboard);
            const url = await page.url();
            expect(url).toStartWith("https://responsivefight.herokuapp.com/leaderboard");
        
        });

    });

    describe("Verifies the flow for InCorrect Answer" , () => {

        beforeAll(async () => {

          await page.goto(baseUrlLogin); 
          await page.waitForSelector(elementsHomePage.createWarriorButtonLocator);

        })
        
        test('Verify user is created successfully ', async () => {

            await createUser(elementsHomePage);        

        });

        test('Verify user answer is incorrect for Bus challenge', async () => {

            await selectChallenge(elementsCovidPage.BusButton,elementsBusPage.startButton);
            await selectAnswer(elementsBusPage.incorrectAnswer, elementsBusPage.failureMessage, elementsBusPage.failureMessageLoc);
    
        });

    });

});
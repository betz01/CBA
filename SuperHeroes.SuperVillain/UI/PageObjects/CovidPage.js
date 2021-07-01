module.exports = {

    selectChallenge : async (challenge, start ) => {

        await page.click(challenge);
        await page.click(start);
    },

    elementsCovidPage : {

            BusButton : "#bus"
        }
  
}
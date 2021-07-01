module.exports = {

    selectAnswer : async (answer, message, messageLocator ) => {

        await page.click(answer);
        const text = await page.textContent(messageLocator);
        expect(text).toMatch(message);

    },

    elementsBusPage : {

            startButton : "#bus_timer_start",
            correctAnswer : "#bus_answer_1",
            incorrectAnswer : "#bus_answer_2",
            successMessageLoc :"div[id='bus_correct_modal'] h5[id='staticBackdropLabel']",
            successMessage : "That is correct!",
            failureMessage : "That doesn't sound right!",
            failureMessageLoc : "div[id='bus_incorrect_modal'] h5[id='staticBackdropLabel']",
            leaderboard : "#leaderboard_link"

        }
  
}
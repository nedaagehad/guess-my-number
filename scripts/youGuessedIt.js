const hintMessage = document.querySelector(".message");
const highscore = document.querySelector(".highscore");
const hiddenNumber = document.querySelector(".number");
const checkButton = document.querySelector(".check");
const score = document.querySelector(".score");

const youGuessedIt = (number) =>  {
    hintMessage.textContent = "🎉 You guessed it right!";
    hiddenNumber.textContent = number;
    hiddenNumber.style.width = "30rem";
    checkButton.setAttribute("disabled", true);
    document.body.style.backgroundColor = "#60b347";
    highscore.textContent = Math.max(score.textContent, highscore.textContent);
}

export default youGuessedIt
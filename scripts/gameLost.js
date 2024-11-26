const hintMessage = document.querySelector(".message");
const score = document.querySelector(".score");
const hiddenNumber = document.querySelector(".number");
const checkButton = document.querySelector(".check");

const gameLost = (number) => {
    hintMessage.textContent = "💥 You lost the game!";
    hiddenNumber.textContent = number;
    score.textContent = 0
    hiddenNumber.style.width = "30rem"
    checkButton.setAttribute("disabled", true);
    document.body.style.backgroundColor = "#c84141"
}

export default gameLost
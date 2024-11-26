const hintMessage = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const score = document.querySelector(".score");
const hiddenNumber = document.querySelector(".number");
const checkButton = document.querySelector(".check");

const resetGame = () => {
  hiddenNumber.style.width = "15rem";
  hiddenNumber.textContent = "?";
  score.textContent = 20;
  guessInput.value = "";
  hintMessage.textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222";
  checkButton.setAttribute("disabled", true);
};

export default resetGame;

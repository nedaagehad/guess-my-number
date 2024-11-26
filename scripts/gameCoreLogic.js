import notInRange from "./notInRange.js"
import giveHint from "./giveHint.js"
import youGuessedIt from "./youGuessedIt.js"

const guessInput = document.querySelector(".guess");

const gameCoreLogic = (number) => {
  if (guessInput.value < 1 || guessInput.value > 20) notInRange();
  else if (guessInput.value > number) giveHint("📈 Too high!");
  else if (guessInput.value < number) giveHint("📉 Too low!");
  else youGuessedIt(number);
};

export default gameCoreLogic;

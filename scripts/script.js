"use strict";

import gameLost from "./gameLost.js";
import resetGame from "./reset-game.js";
import gameCoreLogic from "./gameCoreLogic.js"

let number = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessInput = document.querySelector(".guess");
const score = document.querySelector(".score");

againButton.addEventListener("click", () => {
  number = Math.trunc(Math.random() * 20) + 1;
  resetGame();
});

guessInput.addEventListener("input", () => {
  if (guessInput.value) checkButton.removeAttribute("disabled");
});

checkButton.addEventListener("click", () => {
  if (score.textContent <= 1) gameLost(number);
  else gameCoreLogic(number);
});

const hintMessage = document.querySelector(".message");
const score = document.querySelector(".score");

const giveHint = (message) => {
    hintMessage.textContent = message;
    score.textContent = score.textContent - 1;
}

export default giveHint
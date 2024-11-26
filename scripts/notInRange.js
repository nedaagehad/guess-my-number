const checkButton = document.querySelector(".check");
const hintMessage = document.querySelector(".message");
const guessInput = document.querySelector(".guess");

const notInRange = () => {
    hintMessage.textContent = "⛔ Between 1 and 20!";
    checkButton.setAttribute("disabled", true);
    guessInput.value = "";
}

export default notInRange
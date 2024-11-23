// Select input element and buttons
const inputElement = document.getElementById("ResultBox");
const btn1 = document.getElementById("Btn1"); // Rock
const btn2 = document.getElementById("Btn2"); // Paper
const btn3 = document.getElementById("Btn3"); // Scissors

// Array for computer choices
const choices = ["Rock", "Paper", "Scissors"];

// Function to get a random choice for the computer
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a Tie!";
    }
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You Win!";
    }
    return "You Lose!";
}

// Event listeners for each button
btn1.addEventListener("click", () => {
    const playerChoice = "Rock";
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    inputElement.value = `You: ${playerChoice}, Computer: ${computerChoice} - ${result}`;
});

btn2.addEventListener("click", () => {
    const playerChoice = "Paper";
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    inputElement.value = `You: ${playerChoice}, Computer: ${computerChoice} - ${result}`;
});

btn3.addEventListener("click", () => {
    const playerChoice = "Scissors";
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    inputElement.value = `You: ${playerChoice}, Computer: ${computerChoice} - ${result}`;
});



function getComputerChoice() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)] 
}

function scoreGame(choice1, choice2) {
    // returns 1 if choice1 wins, -1 if choice1 loses, 0 if draw
    if (choice1 === choice2) return 0;
    const beats = { "Rock" : "Scissors", 
                    "Paper" : "Rock",
                    "Scissors" : "Paper" };
    if (beats[choice1] == choice2) return 1;
    return -1;
}

function playRound(humanChoice, computerChoice) {
    const result = scoreGame(humanChoice, computerChoice);
    if (result === 1) {
        incrementScore(humanScoreField);
        roundTextField.textContent += " Human wins!";
    }
    else if (result === -1) {
        incrementScore(computerScoreField);
        roundTextField.textContent += " Computer wins!";
    } else {
        roundTextField.textContent += " Draw!";
    }
    checkIfGameOver();
}

function startRound(humanChoice) {
    if (gameOver) return null;
    const computerChoice = getComputerChoice();
    describeRoundStart(humanChoice, computerChoice);
    playRound(humanChoice, computerChoice);
}

function incrementScore(scoreField) {
    oldScore = Number(scoreField.textContent);
    scoreField.textContent = oldScore + 1; 
}

function describeRoundStart(humanChoice, computerChoice) {
    roundTextField.textContent = `${humanChoice} vs ${computerChoice}...`
    console.log(`${humanChoice} vs ${computerChoice}...`)
}

function checkIfGameOver() {
    const humanScore = Number(humanScoreField.textContent);
    const computerScore = Number(computerScoreField.textContent);
    if (humanScore >=5 || computerScore >= 5) {
        gameOver = true;
    }
    if (gameOver) {
        const winner = (humanScore > computerScore) ? "Human" : "Computer";
        const gameOverMessage = document.createElement("h3");
        gameOverMessage.textContent = `Game over! Winner: ${winner}!`
        rockButton.parentElement.remove(); // get rid of all buttons
        computerScoreField.parentElement.appendChild(gameOverMessage);
    }
}

let gameOver = false;

const rockButton = document.querySelector("#rock")
const paperButton = document.querySelector("#paper")
const scissorsButton = document.querySelector("#scissors")

const roundTextField = document.querySelector("#round-text")

const humanScoreField = document.querySelector("#human-score")
const computerScoreField = document.querySelector("#computer-score")

rockButton.addEventListener("click", () => startRound('Rock'))
paperButton.addEventListener("click", () => startRound('Paper'))
scissorsButton.addEventListener("click", () => startRound('Scissors'))

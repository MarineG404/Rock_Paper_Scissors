const choice = ["rock", "paper", "scissors"];
const winningScore = 10;

// Object to store the score
let score = {
	player: 0,
	computer: 0
};

let gameOver = false;

// Play one round when a button is clicked
function playRound(userChoice) {
	if (gameOver) return;

	// Computer makes a random choice
	const cpChoice = choice[Math.floor(Math.random() * choice.length)];

	let result = "";

	// Compare choices and update score
	if (userChoice === cpChoice) {
		result = "Draw!";
	} else if (
		(userChoice === "rock" && cpChoice === "scissors") ||
		(userChoice === "paper" && cpChoice === "rock") ||
		(userChoice === "scissors" && cpChoice === "paper")
	) {
		result = "You win!";
		score.player++;
	} else {
		result = "You lose!";
		score.computer++;
	}

	displayResult(userChoice, cpChoice, result);
	checkGameOver();
}

// Show result and current score
function displayResult(userChoice, cpChoice, result) {
	document.getElementById("result").innerHTML = `
		<div class="round-result">
			<p><strong>Your choice:</strong> ${userChoice}</p>
			<p><strong>Computer's choice:</strong> ${cpChoice}</p>
			<p class="result-text">${result}</p>
			<p class="score-text">Score: You ${score.player} - Computer ${score.computer}</p>
		</div>
	`;
}

// Check if someone reached winningScore points and end the game
function checkGameOver() {
	if (score.player === winningScore || score.computer === winningScore) {
		gameOver = true;
		let winner = score.player === 10 ? "You win the game!" : "Computer wins the game!";
		document.getElementById("result").innerHTML =
			`<div class="game-over">
				<span class="game-over-title">Game Over!</span><br>
				<span class="game-over-winner">${winner}</span><br>
				<span class="game-over-score">Final score: You ${score.player} - Computer ${score.computer}</span>
			</div>`;
	}
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));


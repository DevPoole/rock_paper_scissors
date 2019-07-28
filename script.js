function computerPlay() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * 3)];
}

function play(player) {
	playerSelection = player.toLowerCase();
	computerSelection = computerPlay();
	playGame(playerSelection, computerSelection);
}

function playGame(playerSelection, computerSelection) {

	if (computerSelection === playerSelection) {
		console.log("No one wins");
	} else if (computerSelection === 'rock' && playerSelection == 'scissors') {
		console.log("You Lose. Rock beats Scissors.");
	} else if (computerSelection === 'rock' && playerSelection == 'paper') {
		console.log("You Win. Paper beats Rock.");
	} else if (computerSelection === 'scissors' && playerSelection == 'rock') {
		console.log("You Win. Rock destroys Scissors.");
	} else if (computerSelection === 'scissors' && playerSelection === 'paper') {
		console.log("You Lose. Scissors cuts Paper.");
	} else if (computerSelection === 'paper' && playerSelection === 'scissors') {
		console.log("You Win. Scissors cuts Paper.");
	} else {
		console.log("You Lose. Rock beats Paper.");
	}
}

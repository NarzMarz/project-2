let playerScore = 0;
let computerScore = 0;
let turns = 0;
const maxTurns = 5; //adjustable

function startGame() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');
}

function showRules() {
    alert("Game Rules: Rock beats Scissors and Lizard, Paper beats Rock and Spock, Scissors beats Paper and Lizard, Lizard beats Spock and Paper, Spock beats Scissors and Rock."); 
}

function showSettings() {
    alert("Game Settings: You can customize the game settings here."); 
}

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Implement your game logic here and update scores
    if (playerChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
        (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
        (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
        (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
        (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
    ) {
        alert("You win! ${playerChoice} beats ${computerChoice}");
        playerScore++;
        document.getElementById("player-score").textContent = playerScore;
    } else {
        alert("You lose! ${computerChoice} beats ${playerChoice}");
        computerScore++;
        document.getElementById("computer-score").textContent = computerScore;
    }

    turns++;

    if (turns >= maxTurns) {
        showResultPopup();
    }
}

function showResultPopup() {
    const resultPopup = document.getElementById('result-popup');
    const resultMessage = document.getElementById('result-message');

    if (playerScore > computerScore) {
        resultMessage.textContent = 'You won!';
    } else if (computerScore > playerScore) {
        resultMessage.textContent = 'You lost!';
    } else {
        resultMessage.textContent = 'It\'s a tie!';
    }

    resultPopup.classList.remove('hidden');
}

function showMenu() {
    location.reload();
}

function playAgain() {
    turns = 0;
    playerScore = 0;
    computerScore = 0;

    document.getElementById('result-popup').classList.add('hidden');
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
}
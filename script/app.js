// Define constants
// Add events

// Getting a winner
const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

// Current round, remember the total round is 9
let currentRound = 1;

// Storing and managing submitted data
let editedPlayer = 0;

// Saving player name with JS
let activePlayer = 0;

const players=[
    {
        name: "",
        symbol: "X",
    },
    {
        name: "",
        symbol: "0",
    }
];

const inputPlayerName = document.getElementById("player-name");

// show editor
// Close editor by clicking on cancel or backdrop

const btnElementEditPlayer1Name = document.getElementById("btn-1-edit");
const btnElementEditPlayer2Name =document.getElementById("btn-2-edit");

const overlayElementplayerEditor = document.getElementById("config-overlay");
const backdropElement = document.getElementById("back-drop");

const cancelBtn = document.getElementById("cancel")


btnElementEditPlayer1Name.addEventListener("click",showEditor);
btnElementEditPlayer2Name.addEventListener("click",showEditor);

cancelBtn.addEventListener("click", closeEditor);
backdropElement.addEventListener("click", closeEditor);

// Handling form submission with JS

const formElement = document.querySelector("form");

formElement.addEventListener("submit", savePlayerName);


// Game
const startNewGameBtnElement = document.getElementById("start-game");
const gameBoardElement = document.getElementById("game");

startNewGameBtnElement.addEventListener("click",displayGameBoard);


// Making list clickable
const gameFieldElements = document.querySelectorAll("#game-board li");

for (const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener("click", selectGameField);
}

// Output player name on the screen
const activePlayerNameElement = document.getElementById("active-player-name");

// Handling game over

const gameOverElement = document.getElementById("game-over");
const winnerNameElement = document.getElementById("winner-name");

// Ordered list element

const orderedListElement = document.getElementById("game-board")

// Check whether game is over

let gameIsOver = false;

const gameDescriptionBtnElement = document.getElementById("game-desc-btn");
const gameDescriptionElement = document.getElementById("game-desc");

gameDescriptionBtnElement.addEventListener("click", showGameDescription);

// footer
const footerElement = document.getElementById("footer");



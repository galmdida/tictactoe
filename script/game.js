// Game

// Resetting starting a new game
function resetGameStatus(){
    activePlayer = 0;
    currentRound = 1;
    gameIsOver= false;
    gameOverElement.style.display = "none";

    //  Reset gamedata
    let gameBoardIndex = 0;
    for (let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = orderedListElement.children[gameBoardIndex];
            gameBoardItemElement.textContent="";
            gameBoardItemElement.classList.remove("disabled");
            gameBoardIndex++;
        }
    }
}

function displayGameBoard() {
    if (players[0].name === "" || players[1].name === "") {
        alert("The name should not be empty for any player. Enter player names to continue");
        return;
    }

    resetGameStatus();

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameBoardElement.style.display = "block";

    footerElement.style.display = "block";
};


// Switching players
function switchPlayers() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

// Selecting active player and add class diabled
function selectGameField(event) {
    if(gameIsOver===true){
        alert("game ended, start a new game!")
        return;
    }
    const selecredField = event.target;

    // Calculate points
    const selectedColumn = selecredField.dataset.col - 1;
    const selectedRow = selecredField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert("Please select an empty field");
        return;

    }

    selecredField.textContent = players[activePlayer].symbol;
    selecredField.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;

    // check if there is a winner after every click
    const winnerId = checkForGameOver();
    console.log(winnerId);

    if(winnerId !==0){
        gameOver(winnerId);
    }

    currentRound++;
    switchPlayers();
};

function checkForGameOver() {
    // Checking rows for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]) {
            return gameData[i][0];
        }
    }

    // Checking columns for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]) {
            return gameData[0][i];
        }
    }

    // Checking top left to bottom right diagnol equality
    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]) {
        return gameData[0][0];
    }

    // Checking bottom left to bottom right diagnol equality
    if (gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]) {
        return gameData[2][0];
    }

    if (currentRound === 9) {
        return -1;
    }

    return 0;

}

// Handling game over
function gameOver(winnerId) {
    gameIsOver=true;
    gameOverElement.style.display = "block";

    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        winnerNameElement.textContent = winnerName;
    }else{
        gameOverElement.firstElementChild.textContent = "It\'s a draw!";
    }

}
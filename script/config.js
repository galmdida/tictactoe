function showGameDescription(){
    gameDescriptionElement.style.display ="block";
    backdropElement.style.display ="block";

}

function showEditor(event){
    //To manage the submitted data
    editedPlayer = event.target.dataset.playerid;

    overlayElementplayerEditor.style.display="block";
    backdropElement.style.display ="block";

}

function closeEditor(){
    overlayElementplayerEditor.style.display="none";
    backdropElement.style.display="none";
    gameDescriptionElement.style.display="none";

    // Reset form upon the closing
    inputPlayerName.value="";
}


// Handling form submission with JS

function savePlayerName(event) {
    event.preventDefault(); // To prevent default form submission to backend

    const formData = new FormData(event.target); // Special method to extract data
    const enteredPlayerName = formData.get("player-name").trim(); // get by input name

    // Storing and managing the submitted data
    const updatedPlayerElement = document.getElementById("player-" +  editedPlayer + "-data");
    updatedPlayerElement.children[1].textContent= enteredPlayerName;

    // storing players
    players[editedPlayer-1].name=enteredPlayerName;

    // close the editor once we have confirmed
    closeEditor();
};


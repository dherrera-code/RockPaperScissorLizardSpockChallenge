
const apiLink = "https://herrerahostingdh-ayf7fhbzg6fdgvdr.westus3-01.azurewebsites.net/api/CPUResponse";
const SelectRock = document.getElementById("SelectRock");
const SelectPaper = document.getElementById("SelectPaper");
const SelectScissors = document.getElementById("SelectScissors");
const SelectLizard = document.getElementById("SelectLizard");
const SelectSpock = document.getElementById("SelectSpock");

const displayPlayerOne = document.getElementById("displayPlayerOne")
const displayPlayerTwo = document.getElementById("displayPlayerTwo");

const displayResults = document.getElementById("displayResults");
const playerTurn = document.getElementById("playerTurn");
const modeType = document.getElementById("modeType");

const userWins = document.getElementById("userWins");
const cpuWins = document.getElementById("cpuWins");

// New variables
const isPlayerOrCPU = document.getElementById("isPlayerOrCPU");
const restartBtn = document.getElementById("restartBtn");

//test of an active game!
let isGameActive;
let cpuAnswer;
let player1Wins = 0;
let player2Wins = 0;
let max_wins;
//variables to be saved from session storage!
let challenger;
let mode;
//variables Used for PVP mode!
let firstPlayerChoice = null;
let secondPlayerChoice = null;

async function getCPUAnswer() {
    const response = await fetch(apiLink);
    return await response.text();
}

// Only call this function when both choices have been made!
const DisplayChoices = (playerOne, playerTwo) => {
    if (playerOne === "Rock") {
        displayPlayerOne.src = "../Assets/Rock.png";
        displayPlayerOne.className = "cardBtns"
    }
    else if (playerOne === "Paper") {
        displayPlayerOne.src = "../Assets/Paper.png";
        displayPlayerOne.className = "cardBtns";
    }
    else if (playerOne === "Scissors") {
        displayPlayerOne.src = "../Assets/Scissors.png";
        displayPlayerOne.className = "cardBtns";
    }
    else if (playerOne === "Lizard") {
        displayPlayerOne.src = "../Assets/Lizard.png";
        displayPlayerOne.className = "cardBtns";
    }
    else {
        displayPlayerOne.src = "../Assets/Spock.png"
        displayPlayerOne.className = "cardBtns";
    }

    if (playerTwo === "Rock") {
        displayPlayerTwo.src = "../Assets/Rock.png";
        displayPlayerTwo.className = "cardBtns";
    }
    else if (playerTwo === "Paper") {
        displayPlayerTwo.src = "../Assets/Paper.png";
        displayPlayerTwo.className = "cardBtns";
    }
    else if (playerTwo === "Scissors") {
        displayPlayerTwo.src = "../Assets/Scissors.png";
        displayPlayerTwo.className = "cardBtns";
    }
    else if (playerTwo === "Lizard") {
        displayPlayerTwo.src = "../Assets/Lizard.png";
        displayPlayerTwo.className = "cardBtns";
    }
    else {
        displayPlayerTwo.src = "../Assets/Spock.png";
        displayPlayerTwo.className = "cardBtns";
    }
}
//add event listeners for all select elements and create a function that test for the winner!
//a function that will return the results of the game!
const getWinner = (playerOne, playerTwo) => {
    console.log("GetWinner is Evoked!" + playerTwo)
    if (playerOne === playerTwo) {
        return "It's a tie!\nTry Again!";
    }
    else {
        switch (playerOne) {
            case "Rock":
                if (playerTwo === "Paper" || playerTwo === "Spock") {
                    player2Wins++;
                    return `${playerTwo} beats Rock!\nPlayer Two Wins!!`;
                }
                else {
                    player1Wins++;
                    return `Rock beats ${playerTwo}! \nPlayer One Wins!!`;
                }
            case "Paper":
                if (playerTwo === "Lizard" || playerTwo === "Scissors") {
                    player2Wins++;
                    return `${playerTwo} beats Paper!\nPlayer Two Wins!!`;
                }
                else {
                    player1Wins++;
                    return `Paper beats ${playerTwo}! \nPlayer One Wins!!`;
                }
            case "Scissors":
                if (playerTwo === "Rock" || playerTwo === "Spock") {
                    player2Wins++;
                    return `${playerTwo} beats Scissors!\nPlayer Two Wins!!`;
                }
                else {
                    player1Wins++;
                    return `Scissors beats ${playerTwo}! \nPlayer One Wins!!`;
                }
            case "Lizard":
                if (playerTwo === "Rock" || playerTwo === "Scissors") {
                    player2Wins++;
                    return `${playerTwo} beats Lizard!\nPlayer Two Wins!!`;
                }
                else {
                    player1Wins++;
                    return `Lizard beats ${playerTwo}! \nPlayer One Wins!!`;
                }
            default:
                if (playerTwo === "Lizard" || playerTwo === "Paper") {
                    player2Wins++;
                    return `${playerTwo} beats Spock!\nPlayer Two Wins!!`;
                }
                else {
                    player1Wins++;
                    return `Spock beats ${playerTwo}!\nPlayer One Wins!!`;
                }
        }
    }
}

function checkGameActive() {
    if (!(player1Wins < max_wins) || !(player2Wins < max_wins)) {
        console.log("Display the Winner!");
        if (player1Wins >= max_wins) {
            playerTurn.textContent = "Player 1 is the Winner!!"
        }
        else {
            if (challenger === "CPU") {
                playerTurn.textContent = "CPU is the Winner!!"
            }
            else playerTurn.textContent = "Player 2 is the Winner!!"
        }
        isGameActive = false;
        // console.log(isGameActive);
        const newButton = document.createElement('button');
        newButton.textContent = "Play Again";
        newButton.className = "btn btn-primary ms-auto game-btn";
        newButton.addEventListener(("click"), () => {

            mode = sessionStorage.getItem("currentMode");
            challenger = sessionStorage.getItem("cpuOrPlayer")
            if (mode != null) {
                console.log(mode);
                console.log(challenger);
                //Pass these variables into a new function to start the game!
                isGameActive = true;
                console.log(isGameActive)
                StartGame(mode)

                userWins.textContent = `Your wins: ${player1Wins}`;
                cpuWins.textContent = `CPU wins: ${player2Wins}`;
                playerTurn.textContent = "Go Player 1!";
                displayPlayerOne.src = "";
                displayPlayerTwo.src = "";
                newButton.remove();
            }
            else {
                console.log("No mode is selected!")
            }

        })
        restartBtn.appendChild(newButton);
    }
}

function CheckPvp(choice) {
    if (firstPlayerChoice === null) {
        firstPlayerChoice = choice;
        playerTurn.textContent = "Go Player 2!";
    }
    else if (secondPlayerChoice === null) {
        secondPlayerChoice = choice;
        playerTurn.textContent = "Go Player 1!";
        //then test for the winner!
        let winner = getWinner(firstPlayerChoice, secondPlayerChoice);
        DisplayChoices(firstPlayerChoice, secondPlayerChoice);
        userWins.textContent = `Player One wins: ${player1Wins}`;
        cpuWins.textContent = `Player Two wins: ${player2Wins}`;
        displayResults.textContent = winner;
        checkGameActive();
        firstPlayerChoice = null;
        secondPlayerChoice = null;
    }
}

SelectRock.addEventListener("click", async () => {
    console.log("Rock has been pressed!")
    if (isGameActive && challenger === "CPU") {
        cpuAnswer = await getCPUAnswer();
        console.log(cpuAnswer);
        console.log(challenger);

        // console.log(getWinner("Rock",cpuAnswer));
        let winner = getWinner("Rock", cpuAnswer);
        DisplayChoices("Rock", cpuAnswer);
        userWins.textContent = `Your wins: ${player1Wins}`;
        cpuWins.textContent = `CPU wins: ${player2Wins}`;
        displayResults.textContent = winner;
        checkGameActive()
    }
    else if (isGameActive && challenger === "Player") CheckPvp("Rock");
});
SelectPaper.addEventListener("click", async () => {
    console.log("Paper has been pressed!")
    if (isGameActive && challenger === "CPU") {
        cpuAnswer = await getCPUAnswer();
        // console.log(cpuAnswer);
        // console.log(getWinner("Rock",cpuAnswer));
        let winner = getWinner("Paper", cpuAnswer);
        DisplayChoices("Paper", cpuAnswer);
        userWins.textContent = `Your wins: ${player1Wins}`;
        cpuWins.textContent = `CPU wins: ${player2Wins}`;
        displayResults.textContent = winner;
        checkGameActive()
    }
    else if (isGameActive && challenger === "Player") CheckPvp("Paper")

});
SelectScissors.addEventListener("click", async () => {
    console.log("Scissors has been pressed!")
    if (isGameActive && challenger === "CPU") {
        cpuAnswer = await getCPUAnswer();
        // console.log(cpuAnswer);
        // console.log(getWinner("Rock",cpuAnswer));
        let winner = getWinner("Scissors", cpuAnswer);
        DisplayChoices("Scissors", cpuAnswer);
        userWins.textContent = `Your wins: ${player1Wins}`;
        cpuWins.textContent = `CPU wins: ${player2Wins}`;
        displayResults.textContent = winner;
        checkGameActive()
    }
    else if (isGameActive && challenger === "Player") CheckPvp("Scissors");

});
SelectLizard.addEventListener("click", async () => {
    console.log("Lizard has been pressed!")
    if (isGameActive && challenger === "CPU") {
        cpuAnswer = await getCPUAnswer();
        console.log(cpuAnswer);
        // console.log(getWinner("Rock",cpuAnswer));
        let winner = getWinner("Lizard", cpuAnswer);
        DisplayChoices("Lizard", cpuAnswer);
        userWins.textContent = `Your wins: ${player1Wins}`;
        cpuWins.textContent = `CPU wins: ${player2Wins}`;
        displayResults.textContent = winner;
        checkGameActive()
    }
    else if (isGameActive && challenger === "Player") CheckPvp("Lizard");
});
SelectSpock.addEventListener("click", async () => {
    console.log("Spock has been pressed!")
    if (isGameActive && challenger === "CPU") {
        cpuAnswer = await getCPUAnswer();
        // console.log(cpuAnswer);
        // console.log(getWinner("Rock",cpuAnswer));
        let winner = getWinner("Spock", cpuAnswer);
        DisplayChoices("Spock", cpuAnswer);
        userWins.textContent = `Your wins: ${player1Wins}`;
        cpuWins.textContent = `CPU wins: ${player2Wins}`;
        displayResults.textContent = winner;
        checkGameActive()
    }
    else if (isGameActive && challenger === "Player") CheckPvp("Spock")
});


window.addEventListener("load", () => {
    mode = sessionStorage.getItem("currentMode");
    challenger = sessionStorage.getItem("cpuOrPlayer")
    if (mode != null) {
        console.log(mode);
        console.log(challenger);
        //Pass these variables into a new function to start the game!
        if (challenger === "CPU") {
            isGameActive = true;
            isPlayerOrCPU.textContent = "CPU";
            console.log(isGameActive)
            StartGame(mode)
        }
        else if (challenger === "Player") {
            isGameActive = true;
            isPlayerOrCPU.textContent = "Player2";
            console.log(isGameActive)
            //Function to start PVP Game
            StartGame(mode)
        }
    }
    else {
        console.log("No mode is selected!")
    }
})
const StartGame = (mode) => {
    //test for mode then create a loop to enact the mode then call the CPU function!
    if (mode === "One Round Showdown") {
        max_wins = 1;
        modeType.textContent = "One Round Showdown!";
    }
    else if (mode === "Out of Five") {
        max_wins = 3;
        modeType.textContent = "Best out of Five!";
    }
    else {
        max_wins = 4;
        modeType.textContent = "Best out of Seven!";
    }
    console.log(max_wins);
    player1Wins = 0;
    player2Wins = 0;
}
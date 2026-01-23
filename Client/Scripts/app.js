
const apiLink = "https://herrerahostingdh-ayf7fhbzg6fdgvdr.westus3-01.azurewebsites.net/api/CPUResponse";
const SelectRock = document.getElementById("SelectRock");
const SelectPaper = document.getElementById("SelectPaper");
const SelectScissors = document.getElementById("SelectScissors");
const SelectLizard = document.getElementById("SelectLizard");
const SelectSpock = document.getElementById("SelectSpock")

const displayPlayerOne = document.getElementById("displayPlayerOne")
const displayPlayerTwo = document.getElementById("displayPlayerTwo");

const displayResults = document.getElementById("displayResults");

const userWins = document.getElementById("userWins");
const cpuWins = document.getElementById("cpuWins");

// New variables
const isPlayerOrCPU = document.getElementById("isPlayerOrCPU")

let winsCount = 0;
let losesCount = 0;

async function getCPUAnswer(user) {
    const response = await fetch(apiLink);
    const data = await response.text();
    console.log(data);
    //Here I call the function to find the winner!
    let winner = getWinner(user, data);
    userWins.textContent = `Your wins: ${winsCount}`;
    cpuWins.textContent = `CPU wins: ${losesCount}`;
    console.log(winner);
    console.log(data)
    //Add function to display user's choice AND CPU's Choice!
    DisplayChoices(user, data);
    displayResults.textContent = winner
    return winner;
}
// Only call this function when both choices 
const DisplayChoices = (playerOne, playerTwo) => {
    if (playerOne === "Rock") {
        displayPlayerOne.src = "../Assets/Rock.png";
        displayPlayerOne.style = "height: 180px;"
    }
    else if (playerOne === "Paper") {
        displayPlayerOne.src = "../Assets/Paper.png";
        displayPlayerOne.style = "height: 173px";
    }
    else if (playerOne === "Scissors") {
        displayPlayerOne.src = "../Assets/Scissors.png";
        displayPlayerOne.style = "height: 160px";
    }
    else if (playerOne === "Lizard") {
        displayPlayerOne.src = "../Assets/Lizard.png";
        displayPlayerOne.style = "height: 173px";
    }
    else {
        displayPlayerOne.src = "../Assets/Spock.png"
        displayPlayerOne.style = "height: 230px";
    }

    if (playerTwo === "Rock") {
        displayPlayerTwo.src = "../Assets/Rock.png";
        displayPlayerTwo.style = "height: 180px;"
    }
    else if (playerTwo === "Paper") {
        displayPlayerTwo.src = "../Assets/Paper.png";
        displayPlayerTwo.style = "height: 173px";
    }
    else if (playerTwo === "Scissors") {
        displayPlayerTwo.src = "../Assets/Scissors.png";
        displayPlayerTwo.style = "height: 160px";
    }
    else if (playerTwo === "Lizard") {
        displayPlayerTwo.src = "../Assets/Lizard.png";
        displayPlayerTwo.style = "height: 173px";
    }
    else {
        displayPlayerTwo.src = "../Assets/Spock.png";
        displayPlayerTwo.style = "height: 230px";
    }
}

//add event listeners for all select elements and create a function that test for the winner!
//a function that will return the results of the game!
const getWinner = (user, cpu) => {
    console.log("GetWinner is Evoked!" + cpu)
    if (user === cpu) {
        return "It's a tie!\nTry Again!";
    }
    else {
        switch (user) {
            case "Rock":
                if (cpu === "Paper" || cpu === "Spock") {
                    losesCount++;
                    return `${cpu} beats Rock!\nYou Lose!!`;
                }
                else {
                    winsCount++;
                    return `Rock beats ${cpu}! \nYou Win!!`;
                }
            case "Paper":
                if (cpu === "Lizard" || cpu === "Scissors") {
                    losesCount++;
                    return `${cpu} beats Paper!\nYou Lose!!`;
                }
                else {
                    winsCount++;
                    return `Paper beats ${cpu}! \nYou Win!!`;
                }
            case "Scissors":
                if (cpu === "Rock" || cpu === "Spock") {
                    losesCount++;
                    return `${cpu} beats Scissors!\nYou Lose!!`;
                }
                else {
                    winsCount++;
                    return `Scissors beats ${cpu}! \nYou Win!!`;
                }
            case "Lizard":
                if (cpu === "Rock" || cpu === "Scissors") {
                    losesCount++;
                    return `${cpu} beats Lizard!\nYou Lose!!`;
                }
                else {
                    winsCount++;
                    return `Lizard beats ${cpu}! \nYou Win!!`;
                }
            default:
                if (cpu === "Lizard" || cpu === "Paper") {
                    losesCount++;
                    return `${cpu} beats Spock!\nYou Lose!!`;
                }
                else {
                    winsCount++;
                    return `${cpu} beats Spock!\nYou Lose!!`;
                }
        }
    }
}

SelectRock.addEventListener("click", () => {
    console.log("Rock has been pressed!")
    getCPUAnswer("Rock");
});

SelectPaper.addEventListener("click", () => {
    console.log("Rock has been pressed!")
    getCPUAnswer("Paper");
});
SelectScissors.addEventListener("click", () => {
    console.log("Rock has been pressed!")
    getCPUAnswer("Scissors");
});
SelectLizard.addEventListener("click", () => {
    console.log("Rock has been pressed!")
    getCPUAnswer("Lizard");
});
SelectSpock.addEventListener("click", () => {
    console.log("Rock has been pressed!")
    getCPUAnswer("Spock");
});

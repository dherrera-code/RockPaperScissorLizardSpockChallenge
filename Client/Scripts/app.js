
const apiLink = "https://herrerahostingdh-ayf7fhbzg6fdgvdr.westus3-01.azurewebsites.net/api/CPUResponse";
const SelectRock = document.getElementById("SelectRock");
const SelectPaper = document.getElementById("SelectPaper");
const SelectScissors = document.getElementById("SelectScissors");
const SelectLizard = document.getElementById("SelectLizard");
const SelectSpock = document.getElementById("SelectSpock")

const displayUserInput = document.getElementById("displayUserInput")
const displayCPUInput = document.getElementById("displayCPUInput");

const displayResults = document.getElementById("displayResults");

const userWins = document.getElementById("userWins");
const cpuWins = document.getElementById("cpuWins");

const optionsModal = document.getElementById("optionsModal");
const modeOptions = new bootstrap.Modal(optionsModal);

const playPvpBtn = document.getElementById("playPvpBtn");
const playCpuBtn = document.getElementById("playCpuBtn");

playCpuBtn.addEventListener(('click'), () => {

    modeOptions.show();
})

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
const DisplayChoices = (userChoice, cpuChoice) => {
    if (userChoice === "Rock") {
        displayUserInput.src = "../Assets/Rock.png";
        displayUserInput.style = "height: 180px;"
    }
    else if (userChoice === "Paper") {
        displayUserInput.src = "../Assets/Paper.png";
        displayUserInput.style = "height: 173px";
    }
    else if (userChoice === "Scissors") {
        displayUserInput.src = "../Assets/Scissors.png";
        displayUserInput.style = "height: 160px";
    }
    else if (userChoice === "Lizard") {
        displayUserInput.src = "../Assets/Lizard.png";
        displayUserInput.style = "height: 173px";
    }
    else {
        displayUserInput.src = "../Assets/Spock.png"
        displayUserInput.style = "height: 230px";
    }

    if (cpuChoice === "Rock") {
        displayCPUInput.src = "../Assets/Rock.png";
        displayCPUInput.style = "height: 180px;"
    }
    else if (cpuChoice === "Paper") {
        displayCPUInput.src = "../Assets/Paper.png";
        displayCPUInput.style = "height: 173px";
    }
    else if (cpuChoice === "Scissors") {
        displayCPUInput.src = "../Assets/Scissors.png";
        displayCPUInput.style = "height: 160px";
    }
    else if (cpuChoice === "Lizard") {
        displayCPUInput.src = "../Assets/Lizard.png";
        displayCPUInput.style = "height: 173px";
    }
    else {
        displayCPUInput.src = "../Assets/Spock.png";
        displayCPUInput.style = "height: 230px";
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
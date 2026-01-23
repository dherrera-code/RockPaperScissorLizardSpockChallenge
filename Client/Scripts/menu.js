
const optionsModal = document.getElementById("optionsModal");
const modeOptions = new bootstrap.Modal(optionsModal);

const oneRoundBtn = document.getElementById("oneRound");
const outOfFiveBtn = document.getElementById("outOfFive");
const outOfSevenBtn = document.getElementById("outOfSeven");

const playPvpBtn = document.getElementById("playPvpBtn");
const playCpuBtn = document.getElementById("playCpuBtn");

playCpuBtn.addEventListener(('click'), () => {
    sessionStorage.setItem("cpuOrPlayer", "CPU");
    console.log(sessionStorage.getItem('cpuOrPlayer'));
    modeOptions.show();
})

playPvpBtn.addEventListener("click", () => {
    sessionStorage.setItem("cpuOrPlayer", "Player")
    console.log(sessionStorage.getItem('cpuOrPlayer'));
    modeOptions.show();
})

oneRoundBtn.addEventListener("click", () => {
    sessionStorage.setItem("currentMode", "One Round Showdown");
    window.location.href = "./Pages/game.html"
})
outOfFiveBtn.addEventListener('click', () =>{
    sessionStorage.setItem("currentMode", "Out of Five");
    window.location.href = "./Pages/game.html"
})

outOfSevenBtn.addEventListener('click', () =>{
    sessionStorage.setItem("currentMode", "Out of Seven");
    window.location.href = "./Pages/game.html"
})
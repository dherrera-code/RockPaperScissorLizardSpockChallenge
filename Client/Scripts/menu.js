
const optionsModal = document.getElementById("optionsModal");
const modeOptions = new bootstrap.Modal(optionsModal);

const oneRoundBtn = document.getElementById("oneRound");
const outOfFiveBtn = document.getElementById("outOfFive");
const outOfSevenBtn = document.getElementById("outOfSeven");

const playPvpBtn = document.getElementById("playPvpBtn");
const playCpuBtn = document.getElementById("playCpuBtn");

playCpuBtn.addEventListener(('click'), () => {
    modeOptions.show();
})
// playCpuBtn.addEventListener(("click", () => modeOptions.show()))

playPvpBtn.addEventListener("click", () => {
    modeOptions.show();
})

oneRoundBtn.addEventListener("click", () => {

    window.location.href = "./Pages/game.html"
})
outOfFiveBtn.addEventListener('click', () =>{

    window.location.href = "./Pages/game.html"
})

outOfSevenBtn.addEventListener('click', () =>{

    window.location.href = "./Pages/game.html"
})
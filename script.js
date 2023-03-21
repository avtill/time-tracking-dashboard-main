fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

const navDaily = document.getElementById("navDaily");
const navWeekly = document.getElementById("navWeekly");
const navMonthly = document.getElementById("navMonthly")

let workResult = document.getElementById("workResult");
let workPrev = document.getElementById("workPrev");
let playResult = document.getElementById("playResult");
let playPrev = document.getElementById("playPrev");
let studyResult = document.getElementById("studyResult");
let studyPrev = document.getElementById("studyPrev");
let exerciseResult = document.getElementById("exerciseResult");
let exercisePrev = document.getElementById("exercisePrev");
let socialResult = document.getElementById("socialResult");
let socialPrev = document.getElementById("socialPrev");
let selfcareResult = document.getElementById("selfcareResult");
let selfcarePrev = document.getElementById("selfcarePrev");

// navDaily.addEventListener("click", ()=>{
//     console.log("daily")
// workResult.textContent = `${json[0].timeframes.daily.current}`;
// workPrev.textContent = `Previous - ${json[0].timeframes.daily.previous}`;
// });

// navWeekly.addEventListener("click", ()=>{
//     workResult.textContent = `${json[0].timeframes.weekly.current}`;
//     workPrev.textContent = "Previous -" + `${json[0].timeframes.weekly.previous}`;
// });

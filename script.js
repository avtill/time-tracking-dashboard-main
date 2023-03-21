let array =[];
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => array.push(json));

console.log(array);

const navDaily = document.getElementById("navDaily");
const navWeekly = document.getElementById("navWeekly");
const navMonthly = document.getElementById("navMonthly");

const workResult = document.getElementById("workResult");
const workPrev = document.getElementById("workPrev");
const playResult = document.getElementById("playResult");
const playPrev = document.getElementById("playPrev");
const studyResult = document.getElementById("studyResult");
const studyPrev = document.getElementById("studyPrev");
const exerciseResult = document.getElementById("exerciseResult");
const exercisePrev = document.getElementById("exercisePrev");
const socialResult = document.getElementById("socialResult");
const socialPrev = document.getElementById("socialPrev");
const selfcareResult = document.getElementById("selfcareResult");
const selfcarePrev = document.getElementById("selfcarePrev");


navDaily.addEventListener("click", ()=>{
    workResult.innerHTML = `${json[0].timeframes.daily.current}`;
    workPrev.innerHTML = `Previous - ${json[0].timeframes.daily.previous}`;
});

navWeekly.addEventListener("click", ()=>{
    workResult.innerHTML = `${json[0].timeframes.weekly.current}`;
    workPrev.innerHTML = "Previous -" + `${json[0].timeframes.weekly.previous}`;
});

navMonthly.addEventListener("click", ()=>{
    console.log("śmiga")
})
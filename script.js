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

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));

navDaily.addEventListener("click", ()=>{
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        workResult.innerHTML = `${json[0].timeframes.daily.current}hrs`;
        workPrev.innerHTML = `Last day - ${json[0].timeframes.daily.previous}hrs`;
        playResult.innerHTML = `${json[1].timeframes.daily.current}hrs`;
        playPrev.innerHTML = `Last day - ${json[1].timeframes.daily.previous}hrs`;
        studyResult.innerHTML = `${json[2].timeframes.daily.current}hrs`;
        studyPrev.innerHTML = `Last day - ${json[2].timeframes.daily.previous}hrs`;
        exerciseResult.innerHTML = `${json[3].timeframes.daily.current}hrs`;
        exercisePrev.innerHTML = `Last day - ${json[3].timeframes.daily.previous}hrs`;
        socialResult.innerHTML = `${json[4].timeframes.daily.current}hrs`;
        socialPrev.innerHTML = `Last day - ${json[4].timeframes.daily.previous}hrs`;
        selfcareResult.innerHTML = `${json[5].timeframes.daily.current}hrs`;
        selfcarePrev.innerHTML = `Last day - ${json[5].timeframes.daily.previous}hrs`;
    })
});

navWeekly.addEventListener("click", ()=>{
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        workResult.innerHTML = `${json[0].timeframes.weekly.current}hrs`;
        workPrev.innerHTML = "Last week -" + `${json[0].timeframes.weekly.previous}hrs`
        playResult.innerHTML = `${json[1].timeframes.weekly.current}hrs`;
        playPrev.innerHTML = `Last week - ${json[1].timeframes.weekly.previous}hrs`;
        studyResult.innerHTML = `${json[2].timeframes.weekly.current}hrs`;
        studyPrev.innerHTML = `Last week - ${json[2].timeframes.weekly.previous}hrs`;
        exerciseResult.innerHTML = `${json[3].timeframes.weekly.current}hrs`;
        exercisePrev.innerHTML = `Last week - ${json[3].timeframes.weekly.previous}hrs`;
        socialResult.innerHTML = `${json[4].timeframes.weekly.current}hrs`;
        socialPrev.innerHTML = `Last week - ${json[4].timeframes.weekly.previous}hrs`;
        selfcareResult.innerHTML = `${json[5].timeframes.weekly.current}hrs`;
        selfcarePrev.innerHTML = `Last week - ${json[5].timeframes.weekly.previous}hrs`;
    });
});

navMonthly.addEventListener("click", ()=>{
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        workResult.innerHTML = `${json[0].timeframes.monthly.current} hrs`;
        workPrev.innerHTML = `Last month - ${json[0].timeframes.monthly.previous} hrs`; 
        playResult.innerHTML = `${json[1].timeframes.monthly.current}hrs`;
        playPrev.innerHTML = `Last month - ${json[1].timeframes.monthly.previous}hrs`;
        studyResult.innerHTML = `${json[2].timeframes.monthly.current}hrs`;
        studyPrev.innerHTML = `Last month - ${json[2].timeframes.monthly.previous}hrs`;
        exerciseResult.innerHTML = `${json[3].timeframes.monthly.current}hrs`;
        exercisePrev.innerHTML = `Last month - ${json[3].timeframes.monthly.previous}hrs`;
        socialResult.innerHTML = `${json[4].timeframes.monthly.current}hrs`;
        socialPrev.innerHTML = `Last month - ${json[4].timeframes.monthly.previous}hrs`;
        selfcareResult.innerHTML = `${json[5].timeframes.monthly.current}hrs`;
        selfcarePrev.innerHTML = `Last month - ${json[5].timeframes.monthly.previous}hrs`;
    } )
})
const counter = document.querySelector("#timesWeathered")
let weatherNum = loadReviews() || 0;

function saveWeathereds(){
    localStorage.setItem("weathered", JSON.stringify(weatherNum));
}
function loadWeathereds(){
    return JSON.parse(localStorage.getItem("weathered"));
}

if (weatherNum == 0){
    counter.classList.add("hide")
} else if(weatherNum == 1){
    counter.textContent = `Welcome back! you have visited this page once before!`
} else{
    counter.textContent = `Welcome back! you have visited this page ${weatherNum} times before!`
}
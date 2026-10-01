const theDateToday = Date.now();
const lastVisit = document.querySelector("#lastVisit")
const todayVisit = document.querySelector("#todayVisit")
let theDateLastTime = getLastTime() || theDateToday;
const msToDays = 86400000;

function setLastTime(){
    localStorage.setItem("dateLastTime", JSON.stringify(theDateToday));
}
function getLastTime(){
    return (JSON.parse(localStorage.getItem("dateLastTime")));
}
let text = "something went wrong!"
if(theDateToday == theDateLastTime){
    text = "Welcome! Let us know if you have any questions."
}
else if(theDateToday/msToDays - theDateLastTime/msToDays < 1){
    text = "Back so soon! Awesome!"
}
else if(Math.floor(theDateToday/msToDays - theDateLastTime/msToDays) == 1){
    text = "you visited 1 day ago."
}
else if(Math.floor(theDateToday/msToDays - theDateLastTime/msToDays) > 1){
    text = `you visited ${Math.floor(theDateToday/msToDays - theDateLastTime/msToDays)} days ago.`
}
else{
    text = "Welcome! Let us know if you have any questions."
}

lastVisit.textContent = text

setLastTime()
const parameters = new URLSearchParams(window.location.search)
const latitude = parameters.get("lat")
const longitude = parameters.get("long")
let named = parameters.get("name")
const cityName = document.querySelector("#cityNamePlace")
const display = document.querySelector("#display")

if(named == ""){
    named = "Your City!"
}

cityName.innerHTML = named

async function apiFetch() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=08f64ac045b9ba98f1f04def3563580a`);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      createWeather(data,5)
    } else {
        display.innerHTML = `an error occurred, check if you typed your coordinates correctly, make sure ponctuation is in the right place and you did not forget negative signs, Latitude: ${latitude}, Longitude: ${longitude}`
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}
function createWeather(id,Value){
    let index = 0
    let setting = 0
    let div1 = document.createElement("div")
    div1.classList.add("frame")
    while(index < Value){
        const iconsrc = `https://openweathermap.org/img/w/${id.list[setting].weather[0].icon}.png`;
        let icon = document.createElement("img")
        icon.setAttribute('src', iconsrc);
        icon.setAttribute('alt', id.list[setting].weather[0].main);
        icon.setAttribute('loading', 'lazy')
        let weather = document.createElement("p")
        let temperature = document.createElement("p")
        let weatherDesc = document.createElement("p")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        div2.classList.add("weatherReport")
        div3.classList.add("iconTemps")
        temperature.classList.add("left")
        weather.textContent = textVariable(index)
        temperature.textContent = `${id.list[setting].main.temp}℃`
        weatherDesc.textContent = id.list[setting].weather[0].description
        div2.classList.add(`id${index}`)
        div2.classList.add("center")
        setting += 8
        index += 1  
        div3.appendChild(icon)
        div3.appendChild(temperature)
        div2.appendChild(weather)
        div2.appendChild(div3)
        div2.appendChild(weatherDesc)
        div1.appendChild(div2)
    }
    display.appendChild(div1)
}
function textVariable(index){
    if (index == 0){
        return "Today"
    }
    else if (index == 1){
        return "Tomorrow"
    }
    else{
        return `In ${index} days`
    }
}
apiFetch()
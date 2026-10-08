import { cities } from "../data/cities.mjs";

const rainySetting = document.querySelector("#rainFilter")
const cloudySetting = document.querySelector("#cloudFilter")
const sunnySetting = document.querySelector("#sunFilter")
const cityPop = document.querySelector("#city")
const countryPop = document.querySelector("#country")
const continentPop = document.querySelector("#continent")
const displayPop = document.querySelector("#displayFull")
const closeMod = document.querySelector("#closeMod")
const modal = document.querySelector("#modal")

const weatherData = await Promise.all(
    cities.map(async (city) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${city.latitude}&lon=${city.longitude}&appid=08f64ac045b9ba98f1f04def3563580a`
            )
        if (response.ok) {
            return response.json()
        } else {
            throw Error(await response.text());
        }
        } catch (error) {
            console.log(error);
        }
    })
)
let index1 = 0
weatherData.forEach(element => {
    element.city = cities[index1]
    index1 += 1;
});
let filterCities = weatherData;

console.log(weatherData)

rainySetting.addEventListener("click", function(){
    displayWeathers(filterCities.filter(cities => cities.list[0].weather[0].main == "Rain" || cities.list[8].weather[0].main == "Rain" || cities.list[16].weather[0].main == "Rain"));
    rainySetting.classList.add("current")
    cloudySetting.classList.remove("current")
    sunnySetting.classList.remove("current")
});
cloudySetting.addEventListener("click", function(){
    displayWeathers(filterCities.filter(cities => cities.list[0].weather[0].main == "Clouds" || cities.list[8].weather[0].main == "Clouds" || cities.list[16].weather[0].main == "Clouds"));
    cloudySetting.classList.add("current")
    sunnySetting.classList.remove("current")
    rainySetting.classList.remove("current")
});
sunnySetting.addEventListener("click", function(){
    displayWeathers(filterCities.filter(cities => cities.list[0].weather[0].main == "Clear" || cities.list[8].weather[0].main == "Clear" || cities.list[16].weather[0].main == "Clear"));
    sunnySetting.classList.add("current")
    cloudySetting.classList.remove("current")
    rainySetting.classList.remove("current")
});

function displayWeathers(filter){
    document.querySelector("#filterWeather").innerHTML = "";
    let integer = Object.values(filter);
    integer.forEach(place => {    
        let card = document.createElement("section")
        let city = document.createElement("h3")

        let country = document.createElement("p")
        let continent = document.createElement("p")
        let button = document.createElement("button")
        function createWeather(Value){
            let index = 0
            let setting = 0
            let div1 = document.createElement("div")
            div1.classList.add("frame")
            while(index < Value){
                const iconsrc = `https://openweathermap.org/img/w/${place.list[setting].weather[0].icon}.png`;
                let icon = document.createElement("img")

                icon.setAttribute('src', iconsrc);
                icon.setAttribute('alt', place.list[setting].weather[0].main);
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
                temperature.textContent = `${place.list[setting].main.temp}℃`
                weatherDesc.textContent = place.list[setting].weather[0].description

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
            return div1;
        }
        let div = createWeather(3)
        button.addEventListener("click", () =>{
            modal.showModal();
            cityPop.textContent = place.city.city
            countryPop.textContent = place.city.country
            continentPop.textContent = place.city.continent
            displayPop.innerHTML = "";
            let report = createWeather(5)
            displayPop.appendChild(report)

            closeMod.addEventListener("click", () =>{
                modal.close();
            })
        })
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
        city.textContent = `City: ${place.city.city}`
        country.textContent = `Country: ${place.city.country}`
        continent.textContent = `Continent: ${place.city.continent}`
        card.classList.add("block")
        continent.classList.add("continent")
        button.textContent = "See more"

        card.appendChild(city)
        card.appendChild(country)
        card.appendChild(continent)
        card.appendChild(div)
        card.appendChild(button)

        document.querySelector("#filterWeather").appendChild(card)
        
    });
}

displayWeathers(filterCities);
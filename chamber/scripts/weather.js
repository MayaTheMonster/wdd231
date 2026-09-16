const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-25.51&lon=-54.58&appid=08f64ac045b9ba98f1f04def3563580a';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=-25.51&lon=-54.58&appid=08f64ac045b9ba98f1f04def3563580a';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weather');
const selectors = [
document.querySelector('#current-temp2'),
document.querySelector('#weather-icon2'),
document.querySelector('.weather2'),
document.querySelector('#current-temp3'),
document.querySelector('#weather-icon3'),
document.querySelector('.weather3'),
document.querySelector('#current-temp4'),
document.querySelector('#weather-icon4'),
document.querySelector('.weather4')];

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}
async function apiFetch2() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecast(data);
    } else {
        throw Error(await response.text());
    }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather.main);
  captionDesc.textContent = `${desc}`;
}
function displayForecast(data) {
  let day = 7;
  let index = 0
  for (let step = 0; step < 3; step++){
    selectors[index].innerHTML = `${data.list[day].main.temp}&deg;C`;
    let iconsrc = `https://openweathermap.org/img/w/${data.list[day].weather[0].icon}.png`;
    let desc = data.list[day].weather[0].description;
    selectors[index+1].setAttribute('src', iconsrc);
    selectors[index+1].setAttribute('alt', data.list[day].weather.main);
    selectors[index+1].setAttribute('loading', 'lazy');
    selectors[index+2].textContent = `${desc}`;
    day += 8;
    index += 3;
  }
}
apiFetch();
apiFetch2();
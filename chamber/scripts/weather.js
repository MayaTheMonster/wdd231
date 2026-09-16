const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=-25.51&lon=-54.58&appid=08f64ac045b9ba98f1f04def3563580a';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

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
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', data.weather.main);
  captionDesc.textContent = `${desc}`;
}
apiFetch();
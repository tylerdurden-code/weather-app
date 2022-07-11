import formatTime from './time';
// fetch('https://api.openweathermap.org/data/2.5/weather?q=athens&appid=7e00ad08f8fb0eb71d45cd175d852c74&units=metric ')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.main.temp);
//     console.log(data.dt);
//     console.log(data.timezone);
//     const myDate = new Date(data.dt * 1000);
//     console.log(myDate.toDateString(), myDate.toLocaleTimeString());
//   });
const apiKey = '7e00ad08f8fb0eb71d45cd175d852c74';
const cityHTML = document.querySelector('[data-city]');
const degreesHTML = document.querySelector('[data-degrees]');
const descriptionHTML = document.querySelector('[data-description]');
const dateHTML = document.querySelector('[data-date]');
const inputBtn = document.querySelector('[data-input-btn]');
const iconHTML = document.querySelector('[data-icon]');
const loader = document.querySelector('.loader');
const inputDiv = document.querySelector('[data-input-div]');
const errorMessage = document.querySelector('[data-error-message]');
const humidityDiv = document.querySelector('[data-humidity]');
const pressureDiv = document.querySelector('[data-pressure]');
const windSpeedDiv = document.querySelector('[data-windspeed]');
const feelsLikeDiv = document.querySelector('[data-feelslike]');
function capitalizeFirstLetter(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
}
async function getIcon(iconCode) {
  const respone = await fetch(`http://openweathermap.org/img/wn/${iconCode}@2x.png`);
  return respone.url;
}
async function displayWeather(
  city,
  temperature,
  date,
  time,
  description,
  icon,
  humidity,
  pressure,
  windSpeed,
  feelsLike,
) {
  const iconUrl = await getIcon(icon);
  cityHTML.textContent = city;
  degreesHTML.textContent = `${temperature} °C`;
  descriptionHTML.textContent = capitalizeFirstLetter(description);
  dateHTML.textContent = `${date}`;
  iconHTML.src = iconUrl;
  errorMessage.textContent = '';
  humidityDiv.textContent = `${humidity}%`;
  pressureDiv.textContent = pressure;
  windSpeedDiv.textContent = `${windSpeed}km/h`;
  feelsLikeDiv.textContent = `${feelsLike}°C`;
}

async function fetchWeather(city) {
  try {
    loader.style.display = 'block';
    const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `);
    const data = await respone.json();
    const weatherDescription = data.weather[0].description;
    const cityName = data.name;
    const myDate = new Date(data.dt * 1000);
    const dateString = myDate.toDateString();
    const timeString = myDate;
    const { temp } = data.main;
    const { icon } = data.weather[0];
    const { humidity } = data.main;
    const { pressure } = data.main;
    const windSpeed = data.wind.speed;
    const feelsLike = data.main.feels_like;
    // console.log(data, feelsLike);
    setTimeout(() => {
      loader.style.display = 'none';
    }, 1200);
    displayWeather(
      cityName,
      temp,
      dateString,
      timeString,
      weatherDescription,
      icon,
      humidity,
      pressure,
      windSpeed,
      feelsLike,
    );
  } catch (err) {
    errorMessage.textContent = 'Cannot find the city/country';
    console.log('Cannot find the city/country');
    loader.style.display = 'none';
  }
}
inputBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    fetchWeather(inputBtn.value);
    inputBtn.value = '';
  }
});

fetchWeather('New York');

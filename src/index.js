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
function capitalizeFirstLetter(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
}
function displayWeather(city, temperature, date, time, description) {
  cityHTML.textContent = city;
  degreesHTML.textContent = `${temperature} °C`;
  descriptionHTML.textContent = capitalizeFirstLetter(description);
  dateHTML.textContent = `${date} ${time}`;
}
async function fetchWeather(city) {
  try {
    const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `);
    const data = await respone.json();
    const weatherDescription = data.weather[0].description;
    const cityName = data.name;
    const myDate = new Date(data.dt * 1000);
    const dateString = myDate.toDateString();
    const timeString = myDate.toLocaleTimeString();
    const { temp } = data.main;
    console.log(data, temp);
    displayWeather(cityName, temp, dateString, timeString, weatherDescription);
  } catch (err) {
    console.log('Cannot find the city/country');
  }
}

fetchWeather('London');

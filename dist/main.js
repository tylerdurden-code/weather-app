/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// fetch('https://api.openweathermap.org/data/2.5/weather?q=athens&appid=7e00ad08f8fb0eb71d45cd175d852c74&units=metric ')\n//   .then((response) => response.json())\n//   .then((data) => {\n//     console.log(data.main.temp);\n//     console.log(data.dt);\n//     console.log(data.timezone);\n//     const myDate = new Date(data.dt * 1000);\n//     console.log(myDate.toDateString(), myDate.toLocaleTimeString());\n//   });\nconst apiKey = '7e00ad08f8fb0eb71d45cd175d852c74';\nconst cityHTML = document.querySelector('[data-city]');\nconst degreesHTML = document.querySelector('[data-degrees]');\nconst descriptionHTML = document.querySelector('[data-description]');\nconst dateHTML = document.querySelector('[data-date]');\nfunction capitalizeFirstLetter(str) {\n  const words = str.split(' ');\n\n  for (let i = 0; i < words.length; i += 1) {\n    words[i] = words[i][0].toUpperCase() + words[i].substr(1);\n  }\n\n  return words.join(' ');\n}\nfunction displayWeather(city, temperature, date, time, description) {\n  cityHTML.textContent = city;\n  degreesHTML.textContent = `${temperature} °C`;\n  descriptionHTML.textContent = capitalizeFirstLetter(description);\n  dateHTML.textContent = `${date} ${time}`;\n}\nasync function fetchWeather(city) {\n  try {\n    const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `);\n    const data = await respone.json();\n    const weatherDescription = data.weather[0].description;\n    const cityName = data.name;\n    const myDate = new Date(data.dt * 1000);\n    const dateString = myDate.toDateString();\n    const timeString = myDate.toLocaleTimeString();\n    const { temp } = data.main;\n    console.log(data, temp);\n    displayWeather(cityName, temp, dateString, timeString, weatherDescription);\n  } catch (err) {\n    console.log('Cannot find the city/country');\n  }\n}\n\nfetchWeather('London');\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
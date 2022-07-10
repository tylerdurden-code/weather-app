/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ \"./src/time.js\");\n\n// fetch('https://api.openweathermap.org/data/2.5/weather?q=athens&appid=7e00ad08f8fb0eb71d45cd175d852c74&units=metric ')\n//   .then((response) => response.json())\n//   .then((data) => {\n//     console.log(data.main.temp);\n//     console.log(data.dt);\n//     console.log(data.timezone);\n//     const myDate = new Date(data.dt * 1000);\n//     console.log(myDate.toDateString(), myDate.toLocaleTimeString());\n//   });\nconst apiKey = '7e00ad08f8fb0eb71d45cd175d852c74';\nconst cityHTML = document.querySelector('[data-city]');\nconst degreesHTML = document.querySelector('[data-degrees]');\nconst descriptionHTML = document.querySelector('[data-description]');\nconst dateHTML = document.querySelector('[data-date]');\nconst inputBtn = document.querySelector('[data-input-btn]');\nconst iconHTML = document.querySelector('[data-icon]');\nfunction capitalizeFirstLetter(str) {\n  const words = str.split(' ');\n\n  for (let i = 0; i < words.length; i += 1) {\n    words[i] = words[i][0].toUpperCase() + words[i].substr(1);\n  }\n\n  return words.join(' ');\n}\nasync function getIcon(iconCode) {\n  const respone = await fetch(`http://openweathermap.org/img/wn/${iconCode}@2x.png`);\n  return respone.url;\n}\nasync function displayWeather(city, temperature, date, time, description, icon) {\n  const iconUrl = await getIcon(icon);\n  cityHTML.textContent = city;\n  degreesHTML.textContent = `${temperature} °C`;\n  descriptionHTML.textContent = capitalizeFirstLetter(description);\n  dateHTML.textContent = `${date}`;\n  iconHTML.src = iconUrl;\n}\n\nasync function fetchWeather(city) {\n  try {\n    const respone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `);\n    const data = await respone.json();\n    const weatherDescription = data.weather[0].description;\n    const cityName = data.name;\n    const myDate = new Date(data.dt * 1000);\n    const dateString = myDate.toDateString();\n    const timeString = myDate;\n    const { temp } = data.main;\n    const { icon } = data.weather[0];\n    console.log(data);\n    displayWeather(cityName, temp, dateString, timeString, weatherDescription, icon);\n  } catch (err) {\n    console.log('Cannot find the city/country');\n  }\n}\ninputBtn.addEventListener('keydown', (e) => {\n  if (e.key === 'Enter') {\n    fetchWeather(inputBtn.value);\n    inputBtn.value = '';\n  }\n});\n\nfetchWeather('New York');\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatTime)\n/* harmony export */ });\nfunction formatTime(unix, offset, timeFormat = 'full') {\n  const date = fromUnixTime(unix + offset).toUTCString();\n  let hour = date.slice(17, 19);\n  const minute = date.slice(20, 22);\n  let amOrPm;\n\n  if (hour > 11) {\n    amOrPm = 'pm';\n  } else {\n    amOrPm = 'am';\n  }\n\n  // change 24hr to 12hr time\n  if (hour > 12) {\n    hour -= 12;\n  }\n\n  // change am times to 12hr time\n  if (hour < 10 && amOrPm === 'am') {\n    hour = hour.slice(1, 2);\n  }\n\n  // midnight formating\n  if (hour === '0') {\n    hour = 12;\n  }\n\n  // return just the hour\n  if (timeFormat === 'hour') {\n    return `${hour} ${amOrPm}`;\n  }\n  return `${hour}:${minute} ${amOrPm}`;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/time.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
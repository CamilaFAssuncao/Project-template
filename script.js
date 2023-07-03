import apiKey from "./config.js";

const searchBar = document.querySelector('#searchBar');
const container = document.querySelector(".container");
const cityNameContainer = document.querySelector('.city-name');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const proceedWithSearch = async (event) => {
    if(event.key === "Enter") {
        // Store target in variable
        const thisCity = event.target.value.toLowerCase();
        event.currentTarget.value = '';
       
    try {
        const {lat , lon} = await fetchLatLonData (thisCity);
        const weatherData = await fetchWeatherData (lat, lon);
        createCards (weatherData);
    }
    catch (error) {
        console.error('Error:', error);
    }}
}

// Event will start on a keyup action
searchBar.addEventListener('keyup', proceedWithSearch);
    
const fetchLatLonData = async (thisCity) => {
        const apiUrl = ("https://api.openweathermap.org/data/2.5/forecast/?q=" + thisCity + "&appid=" + apiKey);
        try {
            const response = await fetch (apiUrl);
            const data = await response.json(); 
            const lon = data.city.coord.lon;
            const lat = data.city.coord.lat;
            cityNameContainer.innerHTML = data.city.name;
            return {lat, lon };
        }
        catch (error) {
            console.error('Error:', "not a place!");
            container.innerHTML = '';
            return alert("Are you sure you aren't holding your map upside down?");   
        }};
  
// Fetching final data according to the coordinates
const fetchWeatherData = async (lat, lon) => {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey);
        const data = await response.json();
        console.log('Welcome to this basic weather app. this is not a product but the product of an academic exercise.');
        return data;
    } catch (error) {
        console.error('Error');
    }};
       

//  const [currentData, forecastData] = await Promise.all([
//     getCurrentWeatherData(city)
//      ]);

//   // Display current weather
//   cityElement.innerText = currentData.name;
//   tempElement.innerText = Math.round(currentData.main.temp);
//   descElement.innerText = currentData.weather[0].description;
//   weatherIconElement.setAttribute(
//     "src",
//     `http://openweathermap.org/img/wn/${currentData.weather[0].icon}.png`
//   );
//   maxTempElement.innerText = Math.round(currentData.main.temp_max);
//   minTempElement.innerText = Math.round(currentData.main.temp_min);

const createCards = (data) => {
    
  console.log(data.list[0].weather);
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);
  
    const imageBox = document.createElement('div');
    imageBox.classList.add('imgBx');
    card.appendChild(imageBox);
  
    
    const cardImg = document.createElement('img');
    cardImg.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';
    imageBox.appendChild(cardImg);
  
    const contentBox = document.createElement('div');
    contentBox.classList.add('contentBx');
    card.appendChild(contentBox);
  
    const cardHeader = document.createElement('h2');
    const dayOfTheWeek = getDayOfTheWeek(data.dt);
    cardHeader.innerHTML = dayOfTheWeek;
    contentBox.appendChild(cardHeader);
  
    const tempDescription = document.createElement('h4');
    tempDescription.innerHTML = data.weather[0].description;
    contentBox.appendChild(tempDescription);
  
    const currentTempBox = document.createElement('div');
    currentTempBox.classList.add('color');
    contentBox.appendChild(currentTempBox);
  
    const currentTempHeader = document.createElement('h3');
    currentTempHeader.innerHTML = 'Temp:';
    currentTempBox.appendChild(currentTempHeader);
  
    const currentTemp = document.createElement('span');
    currentTemp.classList.add('current-temp');
    currentTemp.innerHTML = data.main.temp + '°C';
    currentTempBox.appendChild(currentTemp);
  
    const minMaxTemperatures = document.createElement('div');
    minMaxTemperatures.classList.add('details');
    contentBox.appendChild(minMaxTemperatures);
  
    const minMaxTempHeader = document.createElement('h3');
    minMaxTempHeader.innerHTML = 'More:';
    minMaxTemperatures.appendChild(minMaxTempHeader);
  
    const minTemp = document.createElement('span');
    minTemp.classList.add('min-temp');
    minTemp.innerHTML = data.main.temp_min + '°C';
    minMaxTemperatures.appendChild(minTemp);
  
    const maxTemp = document.createElement('span');
    maxTemp.classList.add('max-temp');
    maxTemp.innerHTML = data.main.temp_max + '°C';
    minMaxTemperatures.appendChild(maxTemp);
  };
  
  const getDayOfTheWeek = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const dayIndex = date.getDay();
    return weekdays[dayIndex];
  };
  
// // Looping through 5 days of weather data
//     for(let i = 0; i < 5; i++) {
// // Use the remainder operator (%) to switch from saturday (last in array) back to sunday (first in array)
//     const date = new Date();
//     let dayOfTheWeek = weekdays[(date.getDay() + i) % 7];
//     const data = result.daily[i];}

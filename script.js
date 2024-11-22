// Your OpenWeatherMap API key
const apiKey = '43d91391903f3aeb16232293fd00dfc0';

// Elements for displaying weather information
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');

// Function to fetch weather data from OpenWeatherMap API
function fetchWeather(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(error => {
            alert(error.message);
            weatherInfo.style.display = 'none';
        });
}

// Function to display weather data on the page
function displayWeather(data) {
    weatherInfo.style.display = 'block';
    document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// Event listener for the search form submission
searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (city === '') {
        alert('Please enter a city name');
    } else {
        fetchWeather(city);
    }
});

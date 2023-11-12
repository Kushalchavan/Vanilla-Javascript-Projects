const inputBox = document.querySelector('#input-box');
const searchButton = document.querySelector('#search-button');
const weatherImage = document.querySelector('#weather-image');
const weatherInfo = document.querySelector('#weather-info');
const weatherDescription = document.querySelector('#weather-description');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');


// weather api key
const apiKey = "b503c134f70504625670f3ee4968a298";

// function for convert kelvin to celsius
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

async function getWeattherDetails() {
    try {
        const city = inputBox.value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data);

        // for fixing temperature
        const teperatureCelsius = kelvinToCelsius(data.main.temp).toFixed(1);

        // Updating weather information
        weatherInfo.textContent = `${teperatureCelsius}°C`;
        weatherDescription.textContent = data.weather[0].description;
        humidity.textContent = `${data.main.humidity}%`;
        wind.textContent = `${data.wind.speed} Km/H`;

        console.log('Calling updateWeatherImage with icon code:', data.weather[0].icon)
        updateWeatherImage(data.weather[0].icon);
    } catch (error) {
        alert('Error fetching weather data. Please enter a correct city name.');
        console.error('Error fetching weather data:', error);
    }
}

searchButton.addEventListener('click', getWeattherDetails);

// Function of updating images
function updateWeatherImage(iconCode) {
    const iconMap = {
        '01d': 'images/day.svg',
        '01n': 'images/night.svg',
        '02d': 'images/cloudy-day-1.svg',
        '02n': 'images/cloudy-night-1.svg',
        '03d': 'images/cloudy.svg',
        '03n': 'images/cloudy.svg',
        '04d': 'images/cloudy.svg',
        '04n': 'images/cloudy.svg',
        '09d': 'images/rainy-1.svg',
        '09n': 'images/rainy-6.svg',
        '10d': 'images/rainy-4.svg',
        '10n': 'images/rainy-3.svg',
        '11d': 'images/thunder.svg',
        '11n': 'images/thunder.svg',
        '13d': 'images/snowy-3.svg',
        '13n': 'images/snowy-2.svg',
        '50d': 'images/mist.svg',
        '50n': 'images/mist.svg'
    };

    // Get the corresponding image URL based on the icon code
    const imageUrl = iconMap[iconCode] || 'images/weather.svg';

    // Update the src
    console.log('Updating weather image with icon code:', iconCode);
    weatherImage.src = imageUrl;
    weatherImage.alt = `Weather icon for ${iconCode}`;
}

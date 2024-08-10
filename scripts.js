const apiKey = '601fd4b9da7f23fa2d72f96957414a0a'; // Replace with your valid API key

async function getWeatherByLocation() {
  const location = document.getElementById('location-input').value;
  if (location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayWeather(data);
  } else {
    alert('Please enter a location.');
  }
}

function displayWeather(data) {
  const weatherInfoDiv = document.getElementById('weather-info');
  if (data.cod === 200) {
    const { name, main, weather } = data;
    weatherInfoDiv.innerHTML = `
      <h2>Weather in ${name}</h2>
      <p>${weather[0].description}</p>
      <p>Temperature: ${main.temp}°C</p>
      <p>Humidity: ${main.humidity}%</p>
    `;
  } else {
    weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  }
}
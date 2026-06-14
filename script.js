// Skyla Weather App — script
const API_KEY = "641e191df494bd31ffd3ed848d74ada3";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// DOM Elements
const cityInput    = document.getElementById("cityInput");
const searchBtn    = document.getElementById("searchBtn");
const loader       = document.getElementById("loader");
const weatherCard  = document.getElementById("weatherCard");
const emptyState   = document.getElementById("emptyState");
const errorMsg     = document.getElementById("errorMsg");
const cityNameEl   = document.getElementById("cityName");
const countryEl    = document.getElementById("countryName");
const dateEl       = document.getElementById("currentDate");
const tempEl       = document.getElementById("temperature");
const iconEl       = document.getElementById("weatherIcon");
const descEl       = document.getElementById("weatherDesc");
const humidityEl   = document.getElementById("humidity");
const windEl       = document.getElementById("windSpeed");
const feelsEl      = document.getElementById("feelsLike");
const visibilityEl = document.getElementById("visibility");

// Events
searchBtn.addEventListener("click", handleSearch);
cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});

function handleSearch() {
  const city = cityInput.value.trim();
  if (!city) { showError("Please enter a city name."); return; }
  fetchWeather(city);
}

async function fetchWeather(city) {
  showLoader();
  try {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) throw new Error("City not found. Check spelling and try again.");
      if (response.status === 401) throw new Error("Invalid API key. Check script.js line 4.");
      throw new Error("Something went wrong. Try again later.");
    }

    const data = await response.json();
    displayWeather(data);

  } catch (error) {
    showError(error.message);
  }
}

function displayWeather(data) {
  cityNameEl.textContent   = data.name;
  countryEl.textContent    = data.sys.country;
  tempEl.textContent       = Math.round(data.main.temp);
  descEl.textContent       = data.weather[0].description;
  humidityEl.textContent   = `${data.main.humidity}%`;
  windEl.textContent       = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
  feelsEl.textContent      = `${Math.round(data.main.feels_like)}°C`;
  visibilityEl.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
  iconEl.src               = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  iconEl.alt               = data.weather[0].description;
  dateEl.textContent       = getFormattedDate();

  hideLoader();
  hideError();
  weatherCard.classList.remove("hidden");
  emptyState.classList.add("hidden");
}

function getFormattedDate() {
  const now    = new Date();
  const days   = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${days[now.getDay()]}\n${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

function showLoader() {
  loader.classList.remove("hidden");
  weatherCard.classList.add("hidden");
  emptyState.classList.add("hidden");
  hideError();
}

function hideLoader() { loader.classList.add("hidden"); }
function showError(msg) {
  errorMsg.textContent = msg;
  hideLoader();
  weatherCard.classList.add("hidden");
  emptyState.classList.remove("hidden");
}
function hideError() { errorMsg.textContent = ""; }

function showTemperature(response) {
  console.log(response.data);
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}⁰C`;
  let description = document.querySelector("#temperature-description");
}

function search(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  searchCity(cityInput.value);
}

let form = document.querySelector("#cityForm");
form.addEventListener("submit", search);

function searchCity(city) {
  let apiKey = "de879077b25c4821b4116348dcf1cdcc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function showMyLocation(position) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your Latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showMyLocation);
}

let button = document.querySelector("#my-location");
button.addEventListener("click", getCurrentLocation);

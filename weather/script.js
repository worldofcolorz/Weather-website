const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b08aafa162msh6e9ec073da566a0p10de7fjsne8f5de6fa4a5",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temp2.innerHTML = response.temp;
      temp.innerHTML = response.temp;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      humidity2.innerHTML = response.humidity;
      humidity.innerHTML = response.humidity;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      sunrise.innerHTML = response.sunrise;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");

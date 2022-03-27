let weather = {
  apiKey: "ac1fe6259a80a43a841f7ca9d2e30521",
  fetchWeather: function () {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=korea&units=metric&appid=${this.apiKey}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = name;

    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";

    document.querySelector(".description").innerText = description;

    document.querySelector(".temp").innerText = temp + "°C";

    document.querySelector(".humidity").innerText = "습도: " + humidity + "%";
    document.querySelector(".weather").classList.remove("loading");
  },
};

weather.fetchWeather("Denver");

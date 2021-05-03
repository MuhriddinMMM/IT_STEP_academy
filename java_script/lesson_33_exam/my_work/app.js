let input = document.querySelector(".input_text");
let main = document.querySelector("#name");
let temp = document.querySelector(".temp");
let desc = document.querySelector(".desc");
let clouds = document.querySelector(".clouds");
let button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=81e4c013d025c8ecaaafcae614d545e0"
  )
    .then((response) => response.json())
    .then((data) => {
      let currentWeather = document.createElement("div");
      currentWeather.classList.add("current__weather");

      let sunrise = new Date(data["sys"]["sunrise"] * 1000);

      let sunrises = sunrise.getHours() + ":" + sunrise.getMinutes();
      let sunset = new Date(data["sys"]["sunset"] * 1000);

      let sunsets = sunset.getHours() + ":" + sunset.getMinutes();
      let duration =
        sunset.getHours() -
        sunrise.getHours() +
        " hr " +
        (sunset.getMinutes() - sunrise.getMinutes()) +
        " min";
      let date = new Date();
      let dates =
        date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
      currentWeather.innerHTML = `
      <div class="current__info">
              <div class="current__logo"><h1>Current Weather</h1></div>
              <div class="current__date"><h2>${dates}</h2></div>
            </div>
            <div class="current__blocks">
              <div class="current__img">
                 <img src="http://openweathermap.org/img/wn/${
                   data["weather"][0]["icon"]
                 }@2x.png" alt="" /> 
                <p>${data["weather"][0]["description"].toUpperCase()}</p>
              </div>
              <div class="current__temp">
                <h1> ${Math.floor(data["main"]["temp"] - 273)}&degC</h1>
                <p class="current__temp__text">Real Feel ${Math.floor(
                  data["main"]["feels_like"] - 273
                )}&deg</p>
              </div>
              <div class="current__times">
                <p>Sunrise: ${sunrises} AM</p>
                <p>Sunset: ${sunsets} PM</p>
                <p>Duration: ${duration}</p>
              </div>
            </div>
      
      `;
      document.getElementById("current").append(currentWeather);

      let tempValue = data["main"]["temp"];
      let nameValue = data["name"];
      let descValue = data["weather"][0]["description"];

      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue;
      input.value = "";
    })

    .catch((err) => alert("Wrong city name!"));

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      input.value +
      "&appid=81e4c013d025c8ecaaafcae614d545e0"
  )
    .then((response) => response.json())
    .then((data) => {
      let time1 = new Date(data["list"][0]["dt"] * 1000);
      let time2 = new Date(data["list"][1]["dt"] * 1000);
      let time3 = new Date(data["list"][2]["dt"] * 1000);
      let time4 = new Date(data["list"][3]["dt"] * 1000);
      let time5 = new Date(data["list"][4]["dt"] * 1000);
      let time6 = new Date(data["list"][5]["dt"] * 1000);
     

      let hourly = document.createElement("div");
      hourly.classList.add("hr__content");

      hourly.innerHTML = ` <div class="hr__header">
              <h1>hourly</h1>
            </div>
            <div class="hr__today">
              <table>
                <tr>
                  <th>TODAY</th>
                  <td>${time1.getHours()}:00 </td>
                  <td>${time2.getHours()}:00 </td>
                  <td>${time3.getHours()}:00</td>
                  <td>${time4.getHours()}:00</td>
                  <td>${time5.getHours()}:00</td>
                  <td>${time6.getHours()}:00</td>
                </tr>
                <tr>
                  <td></td>
                  <td><img src="${}" alt=""></td>
                  <td><i class="bx bxs-sun hr__sun"></i></td>
                  <td><i class="bx bxs-sun hr__sun"></i></td>
                  <td><i class="bx bxs-sun hr__sun"></i></td>
                  <td><i class="bx bxs-sun hr__sun"></i></td>
                  <td><i class="bx bxs-sun hr__sun"></i></td>
                </tr>
                <tr>
                  <td>Forecast</td>
                  <td>Sunny</td>
                  <td>Sunny</td>
                  <td>Sunny</td>
                  <td>Sunny</td>
                  <td>Sunny</td>
                  <td>Sunny</td>
                </tr>
                <tr>
                  <td>Temp (&degC)</td>
                  <td>28&deg</td>
                  <td>28&deg</td>
                  <td>28&deg</td>
                  <td>28&deg</td>
                  <td>28&deg</td>
                  <td>28&deg</td>
                </tr>
                <tr>
                  <td>RealFeel</td>
                  <td>29&deg</td>
                  <td>29&deg</td>
                  <td>29&deg</td>
                  <td>29&deg</td>
                  <td>29&deg</td>
                  <td>29&deg</td>
                </tr>
                <tr>
                  <td>Wind (km/h)</td>
                  <td>11ESE</td>
                  <td>11ESE</td>
                  <td>11ESE</td>
                  <td>11ESE</td>
                  <td>11ESE</td>
                  <td>11ESE</td>
                </tr>
              </table>
            </div>`;

      document.getElementById("hourly").append(hourly);
    });
});

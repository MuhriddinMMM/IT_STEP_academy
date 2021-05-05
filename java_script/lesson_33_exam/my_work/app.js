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
      document.getElementById("error").style.display = "none";
      document.getElementById("t-main").style.display = "block";
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

      // let tempValue = data["main"]["temp"];
      // let nameValue = data["name"];
      // let descValue = data["weather"][0]["description"];

      // main.innerHTML = nameValue;
      // desc.innerHTML = "Desc - " + descValue;
      // temp.innerHTML = "Temp - " + tempValue;
      // input.value = "";




      
    })

    .catch((err) => {
      (document.getElementById("error").style.display = "block"),
        (document.getElementById("t-main").style.display = "none");
    });

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
      console.log(data["list"][0]["weather"][0]["icon"]);
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
                  <td><img src="http://openweathermap.org/img/wn/${
                    data["list"][0]["weather"][0]["icon"]
                  }@2x.png" alt=""></td>
                  <td><img src="http://openweathermap.org/img/wn/${
                    data["list"][1]["weather"][0]["icon"]
                  }@2x.png" alt=""></td>
                  <td><img src="http://openweathermap.org/img/wn/${
                    data["list"][2]["weather"][0]["icon"]
                  }@2x.png" alt=""></td>
                  <td><img src="http://openweathermap.org/img/wn/${
                    data["list"][3]["weather"][0]["icon"]
                  }@2x.png" alt=""></td>
                  <td><img src="http://openweathermap.org/img/wn/${
                    data["list"][4]["weather"][0]["icon"]
                  }@2x.png" alt=""></td>
                  <td><img src="http://openweathermap.org/img/wn/${
                    data["list"][5]["weather"][0]["icon"]
                  }@2x.png" alt=""></td>
                </tr>
                <tr>
                  <td>Forecast</td>
                  <td>${data["list"][0]["weather"][0]["description"]}</td>
                  <td>${data["list"][1]["weather"][0]["description"]}</td>
                  <td>${data["list"][2]["weather"][0]["description"]}</td>
                  <td>${data["list"][3]["weather"][0]["description"]}</td>
                  <td>${data["list"][4]["weather"][0]["description"]}</td>
                  <td>${data["list"][5]["weather"][0]["description"]}</td>
                </tr>
                <tr>
                  <td>Temp (&degC)</td>
                  <td>${Math.floor(
                    data["list"][0]["main"]["temp"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][1]["main"]["temp"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][2]["main"]["temp"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][3]["main"]["temp"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][4]["main"]["temp"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][5]["main"]["temp"] - 273
                  )}&deg</td>
                </tr>
                <tr>
                  <td>RealFeel</td>
                  <td>${Math.floor(
                    data["list"][0]["main"]["feels_like"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][1]["main"]["feels_like"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][2]["main"]["feels_like"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][3]["main"]["feels_like"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][4]["main"]["feels_like"] - 273
                  )}&deg</td>
                  <td>${Math.floor(
                    data["list"][5]["main"]["feels_like"] - 273
                  )}&deg</td>
                </tr>
                <tr>
                  <td>Wind (km/h)</td>
                  <td>${Math.floor(data["list"][0]["wind"]["speed"])}</td>
                  <td>${Math.floor(data["list"][1]["wind"]["speed"])}</td>
                  <td>${Math.floor(data["list"][2]["wind"]["speed"])}</td>
                  <td>${Math.floor(data["list"][3]["wind"]["speed"])}</td>
                  <td>${Math.floor(data["list"][4]["wind"]["speed"])}</td>
                  <td>${Math.floor(data["list"][5]["wind"]["speed"])}</td>
                </tr>
              </table>
            </div>`;

      document.getElementById("hourly").append(hourly);
    });

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      input.value +
      "&appid=81e4c013d025c8ecaaafcae614d545e0"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data["list"][0]["weather"][0]["description"]);
      let time11 = new Date(data["list"][0]["dt"] * 1000);
      let time22 = new Date(data["list"][8]["dt"] * 1000);
      let time33 = new Date(data["list"][16]["dt"] * 1000);
      let time44 = new Date(data["list"][24]["dt"] * 1000);
      let time55 = new Date(data["list"][32]["dt"] * 1000);

      let days5 = document.createElement("div");
      days5.classList.add("days__today");
      days5.classList.add("none");
      let d1 = time11;
      let d2 = time22;
      let d3 = time33;
      let d4 = time44;
      let d5 = time55;

      let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";

      let n1 = weekday[d1.getDay()];
      let n2 = weekday[d2.getDay()];
      let n3 = weekday[d3.getDay()];
      let n4 = weekday[d4.getDay()];
      let n5 = weekday[d5.getDay()];

      let month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";

      let d11 = time11;
      let n11 = month[d11.getMonth()] + " " + time11.getDate();
      let d22 = time22;
      let n22 = month[d22.getMonth()] + " " + time22.getDate();
      let d33 = time33;
      let n33 = month[d33.getMonth()] + " " + time33.getDate();
      let d44 = time44;
      let n44 = month[d44.getMonth()] + " " + time44.getDate();
      let d55 = time55;
      let n55 = month[d55.getMonth()] + " " + time55.getDate();

      days5.innerHTML = `
        <div class="days">
              <h1>${n1}</h1>
              <p>${n11} </p>
             <img src="http://openweathermap.org/img/wn/${
               data["list"][0]["weather"][0]["icon"]
             }@2x.png" alt="">
              <h2 class="day__temps">${Math.floor(
                data["list"][0]["main"]["temp"] - 273
              )}&degC</h2>
              <p class="day__temp__feel">${
                data["list"][0]["weather"][0]["description"]
              }</p>
            </div>
            <div class="days">
              <h1>${n2}</h1>
              <p>${n22}</p>
              <img src="http://openweathermap.org/img/wn/${
                data["list"][8]["weather"][0]["icon"]
              }@2x.png" alt="">
              <h2 class="day__temps">${Math.floor(
                data["list"][8]["main"]["temp"] - 273
              )}&degC</h2>
              <p class="day__temp__feel">${
                data["list"][8]["weather"][0]["description"]
              }</p>
            </div>
            <div class="days">
              <h1>${n3}</h1>
              <p>${n33}</p>
              <img src="http://openweathermap.org/img/wn/${
                data["list"][16]["weather"][0]["icon"]
              }@2x.png" alt="">
              <h2 class="day__temps">${Math.floor(
                data["list"][16]["main"]["temp"] - 273
              )}&degC</h2>
              <p class="day__temp__feel">${
                data["list"][16]["weather"][0]["description"]
              }</p>
            </div>
            <div class="days">
              <h1>${n4}</h1>
              <p>${n44}</p>
             <img src="http://openweathermap.org/img/wn/${
               data["list"][24]["weather"][0]["icon"]
             }@2x.png" alt="">
              <h2 class="day__temps">${Math.floor(
                data["list"][24]["main"]["temp"] - 273
              )}&degC</h2>
              <p class="day__temp__feel">${
                data["list"][24]["weather"][0]["description"]
              }</p>
            </div>
            <div class="days">
              <h1>${n5}</h1>
              <p>${n55}</p>
              <img src="http://openweathermap.org/img/wn/${
                data["list"][32]["weather"][0]["icon"]
              }@2x.png" alt="">
              <h2 class="day__temps">${Math.floor(
                data["list"][32]["main"]["temp"] - 273
              )}&degC</h2>
              <p class="day__temp__feel">${
                data["list"][32]["weather"][0]["description"]
              }</p>
            </div>
        `;

      document.getElementById("tomorrow").append(days5);
    });
  let today = document.getElementsByClassName("today")[0];
  let forecast = document.getElementsByClassName("forecast")[0];
  let current = document.getElementById("current");
  let tomorrow = document.getElementById("tomorrow");

  today.onclick = () => {
    current.style.display = "block";
    tomorrow.style.display = "none";
  };
  forecast.onclick = () => {
    current.style.display = "none";
    tomorrow.style.display = "block";
  };

  // let today = document.getElementsByClassName("today")[0];
  // console.log(today);
  // let forecast = document.getElementsByClassName("forecast")[0];
  // console.log(forecast);
  // let current = document.querySelector(".current__weather");
  // console.log(current);
  // let days = document.getElementsByClassName("days__today ");

  // today.onclick = () => {
  //   current.classList.remove("none");
  //   days.classList.add("none");
  // };
  // forecast.onclick = () => {
  //   current.classList.remove("none");
  //   days.classList.add("none");
  // };
});

document.getElementById("page404").onclick = function () {
  document.getElementById("error").style.display = "none";
};

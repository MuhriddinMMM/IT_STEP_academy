const tMain = document.querySelector(".t-main");
const dMain = document.querySelector(".d-main");
const today = document.querySelector(".today");
const days = document.querySelector(".week");
const city = document.getElementsByClassName("search");
console.log(city);
const search = document.querySelector(".ico");
const url = "https://jsonplaceholder.typicode.com/users";
const submit = document.getElementById("submit");

let input = document.querySelector(".input_text");

document.querySelector("form").onsubmit = (e) => e.preventDefault();
submit.addEventListener("click", function (event) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city.value +
      "&appid=81e4c013d025c8ecaaafcae614d545e0"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //  let tempValue = data["main"]["temp"];
      //  let nameValue = data["name"];
      //  let descValue = data["weather"][0]["description"];

      //  main.innerHTML = nameValue;
      //  desc.innerHTML = "Desc - " + descValue;
      //  temp.innerHTML = "Temp - " + tempValue;
      //  input.value = "";
    })

    .catch((err) => alert("Wrong city name!"));
});
days.onclick = () => {
  tMain.style.display = "none";
  dMain.style.display = "block";
};
today.onclick = () => {
  tMain.style.display = "block";
  dMain.style.display = "none";
};

// search.onclick = (e) => {
//   e.preventDefault();

//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", url);

//   xhr.onload = () => {
//     if (xhr.status >= 400) {
//       console.error(xhr.response);
//     } else {
//       console.log(xhr.response);
//     }

//     let obj = JSON.parse(xhr.response);

//     console.log(obj);
//   };

//   xhr.onerror = () => {
//     console.log(xhr.response);
//   };

//   xhr.send();
// };

// //Promise

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Prepaoring...");
//     const data = {
//       server: "sss",
//       port: 2000,
//     };
//     resolve();
//   }, 2000);
// });

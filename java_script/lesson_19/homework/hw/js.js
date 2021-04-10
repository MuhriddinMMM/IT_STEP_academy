let name = document.getElementById("title");
let section = document.getElementById("section");
let btn = document.getElementById("btn");

let xhr = new XMLHttpRequest();

xhr.open("GET", `http://www.omdbapi.com/?apikey=c26dfa8d&i=tt3896198`);

xhr.onload = function () {
  let obj = JSON.parse(xhr.response);
  console.log(obj);
  // btn.onclick = function (e) {
  //   e.preventDefault();

  //   console.log(title.value);
  // };
};

xhr.send();

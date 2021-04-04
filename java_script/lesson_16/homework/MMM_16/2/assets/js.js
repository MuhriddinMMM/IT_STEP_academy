document.getElementById("square").onclick = function () {
  let main = document.getElementById("main");

  main.onmousedown = function (e) {
    var pageX11start = e.pageX;
    var pageY11start = e.pageY;
    console.log(pageX11start + "startx");
    console.log(pageY11start + "startY");
    main.onmouseup = function (ev) {
      var pageX1end = ev.pageX;
      var pageY1end = ev.pageY;
      console.log(pageX1end);
      console.log(pageY1end);
      let square = document.createElement("div");
      square.classList.add("squareone");
      square.style.top = pageY11start - 230 + "px";
      square.style.left = pageX11start + "px";
      square.style.width = pageX1end - pageX11start + "px";
      square.style.height = pageY1end - pageY11start + "px";
      document.getElementById("main").append(square);

      let colorss = document.querySelectorAll(".colors");

      for (let i = 0; i < colorss.length; i++) {
        if (colorss[i].checked == true) {
          square.style.backgroundColor = colorss[i].value;
        }
      }
    };
  };
};

document.getElementById("circle").onclick = function () {
  let main = document.getElementById("main");
  main.onmousedown = function (e) {
    var pageX11start = e.pageX;
    var pageY11start = e.pageY;
    console.log(pageX11start + "startx");
    console.log(pageY11start + "startY");
    main.onmouseup = function (ev) {
      var pageX1end = ev.pageX;
      var pageY1end = ev.pageY;
      console.log(pageX1end);
      console.log(pageY1end);
      let circle = document.createElement("div");
      circle.classList.add("circleone");
      circle.style.top = pageY11start - 230 + "px";
      circle.style.left = pageX11start + "px";
      circle.style.width = pageX1end - pageX11start + "px";
      circle.style.height = pageY1end - pageY11start + "px";
      document.getElementById("main").append(circle);
      let colorss = document.querySelectorAll(".colors");

      for (let i = 0; i < colorss.length; i++) {
        if (colorss[i].checked == true) {
          circle.style.backgroundColor = colorss[i].value;
        }
      }
    };
  };
};

document.getElementById("romb").onclick = function () {
  let main = document.getElementById("main");
  main.onmousedown = function (e) {
    var pageX11start = e.pageX;
    var pageY11start = e.pageY;
    console.log(pageX11start + "startx");
    console.log(pageY11start + "startY");
    main.onmouseup = function (ev) {
      var pageX1end = ev.pageX;
      var pageY1end = ev.pageY;
      console.log(pageX1end);
      console.log(pageY1end);
      let romb = document.createElement("div");
      romb.classList.add("rombone");
      romb.style.top = pageY11start - 230 + "px";
      romb.style.left = pageX11start + "px";
      romb.style.width = pageX1end - pageX11start + "px";
      romb.style.height = pageY1end - pageY11start + "px";
      document.getElementById("main").append(romb);

      let colorss = document.querySelectorAll(".colors");

      for (let i = 0; i < colorss.length; i++) {
        if (colorss[i].checked == true) {
          romb.style.backgroundColor = colorss[i].value;
        }
      }
    };
  };
};

document.getElementById("triangle").onclick = function () {
  let main = document.getElementById("main");
  main.onmousedown = function (e) {
    var pageX11start = e.pageX;
    var pageY11start = e.pageY;
    console.log(pageX11start + "startx");
    console.log(pageY11start + "startY");
    main.onmouseup = function (ev) {
      var pageX1end = ev.pageX;
      var pageY1end = ev.pageY;
      console.log(pageX1end);
      console.log(pageY1end);
      let triangle = document.createElement("div");
      triangle.classList.add("triangleone");
      triangle.style.top = pageY11start - 230 + "px";
      triangle.style.left = pageX11start + "px";
      let trianglewidth = pageX1end - pageX11start + "px";
      let triangleheight = pageY1end - pageY11start + "px";
      triangle.style.borderWidth = `${triangleheight} 0 0  ${trianglewidth}`;
      document.getElementById("main").append(triangle);

      let colorss = document.querySelectorAll(".colors");

      for (let i = 0; i < colorss.length; i++) {
        if (colorss[i].checked == true) {
          triangle.style.borderColor = `transparent transparent transparent ${colorss[i].value}`;
        }
      }
    };
  };
};

// let checkbox1 = document.getElementById("red");
// if (checkbox1.checked == true) {
//   triangle.style.borderColor =
//     "transparent transparent transparent  #ff605f";
// }
// let checkbox2 = document.getElementById("green");
// if (checkbox2.checked == true) {
//   triangle.style.borderColor =
//     "transparent transparent transparent  #96d100";
// }
// let checkbox3 = document.getElementById("blue");
// if (checkbox3.checked == true) {
//   triangle.style.borderColor =
//     "transparent transparent transparent  #00a8ff";
// }
// let checkbox4 = document.getElementById("purple");
// if (checkbox4.checked == true) {
//   triangle.style.borderColor =
//     "transparent transparent transparent  #d066fa";
// }
// let checkbox5 = document.getElementById("orange");
// if (checkbox5.checked == true) {
//   triangle.style.borderColor =
//     "transparent transparent transparent  orange";
// }

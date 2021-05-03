const btn = document.getElementById("btn");
const admin = document.getElementById("admin");
const valid = document.getElementById("valid");
const min = document.getElementById("min");
const repeat = document.getElementById("repeat");
const table = document.querySelector("table");
console.log(table);
console.log(btn);
document.querySelector("form").onsubmit = (e) => e.preventDefault();

btn.onclick = function (ev) {
  let tbody = document.createElement("tbody");
  let username = document.getElementById("username").value;
  console.log(username);
  if (username == "admin" || username == "test" || username == "user") {
    admin.style.display = "block";
  } else if (username == "") {
    document.getElementById("username").placeholder =
      "You must write your  username";
    return;
  } else {
    admin.style.display = "none";
  }

  let email = document.getElementById("email").value;
  console.log(email);
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(email.match(re));
  if (email.match(re)) {
    valid.style.display = "none";
    console.log("yes");
  } else if (email == "") {
    document.getElementById("email").placeholder = "You must write your  email";
  } else {
    valid.style.display = "block";
    return;
  }

  let password = document.getElementById("password").value;
  console.log(password);
  if (password.length < 6) {
    min.style.display = "block";
    return;
  } else if (password == "") {
    document.getElementById("password").placeholder =
      "You must write your  password";
  } else {
    min.style.display = "none";
  }

  let passwordrepeat = document.getElementById("passwordrepeat").value;
  console.log(passwordrepeat);
  if (passwordrepeat !== password) {
    repeat.style.display = "block";
    return;
  } else {
    repeat.style.display = "none";
  }
  let pass = "";
  if (password.match(/^([a-z])|([0-9])|([A-Z])$/)) {
    pass = " ( very easy )";
  } else if (
    password.match(/^([a-z]+[0-9])|([0-9]+[a-z])+$/) ||
    password.match(/^([A-Z]+[0-9])|([0-9]+[A-Z])+$/)
  ) {
    pass = " (Easy)";
  } else if (
    password.match(
      /^([0-9]+[A-Z]+[a-z])|([0-9]+[a-z]+[A-Z])|([A-Z]+[0-9]+[a-z])|([a-z]+[A-Z]+[0-9])+$/
    )
  ) {
    
    pass = " (normal)";
  }
  else {
     pass = " (HARD)";
  }
  tbody.innerHTML = `<tr>
              <td>Username:</td>
              <td>${username}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>${email}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>${password + pass}</td>
            </tr>`;
  table.append(tbody);
};

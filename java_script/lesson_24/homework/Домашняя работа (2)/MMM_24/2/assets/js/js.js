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
  if (username.match(/[0-9]+/) || username.length < 2 || username.length > 50) {
    admin.style.display = "block";
    return;
  } else if (username == "") {
    document.getElementById("username").placeholder =
      "You must write your  Fullname";
  } else {
    admin.style.display = "none";
  }
  let file = document.getElementById("file").value;
  console.log(file);
  if ((file = "" || file.length < 1)) {
    console.log(file);
    return;
  }
  let birthday = document.getElementById("birthday").value;
  console.log(birthday);
  if (birthday == "") {
    return;
  }
  let genders = "";
  let female = document.getElementById("female").value;
  let male = document.getElementById("male").value;
  if (
    document.getElementById("female").checked === false &&
    document.getElementById("male").checked === false
  ) {
    return;
  } else if (document.getElementById("female").checked) {
    genders = "female";
    console.log(genders);
  } else if (document.getElementById("male").checked) {
    genders = "male";
    console.log(genders);
  }
  console.log(document.getElementById("female").checked);
  console.log(document.getElementById("male").checked);
  tbody.innerHTML = `<tr>
              <td>Fullname:</td>
              <td>${username}</td>
            </tr>
            <tr>
              <td>Avatar:</td>
              <td>${document.getElementById("file").value}</td>
            </tr>
            <tr>
              <td>birthday</td>
              <td>${birthday}</td>
            </tr>
            <tr>
              <td>gender</td>
              <td>${genders}</td>
            </tr>`;
  table.append(tbody);
};

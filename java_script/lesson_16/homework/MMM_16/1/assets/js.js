document.getElementById("btn").onclick = function (event) {
  event.preventDefault();
  let colorName = document.getElementById("namecolor").value;
  let type = document.getElementById("select").value;
  let color = document.getElementById("color").value;

  let block = document.createElement("div");
  block.classList.add("block");
  block.style.backgroundColor = type + `(` + color + `)`;
  let about = document.createElement("div");
  about.classList.add("about");
  //   about.style.backgroundColor = code;
  let title = document.createElement("p");
  title.innerHTML =
    colorName + `<br>` + type + `<br>` + `<strong>` + color + `</strong>`;
  about.append(title);
  block.append(about);

  document.body.append(block);
};

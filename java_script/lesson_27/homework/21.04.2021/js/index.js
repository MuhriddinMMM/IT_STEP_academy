let slidess = document.querySelector(".js__slider__images");
console.log(slidess);
fetch("https://api.sampleapis.com/wines/reds")
  .then((data) => {
    return data.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
    document.querySelector("body").onload = function () {
      for (i = 0; i < 10; i++) {
        console.log(jsonData[i]);
        let li = document.createElement("li");
        li.classList.add("slider__images-item");
        let img = document.createElement("img");
        img.classList.add("slider__images-image");
        img.src = jsonData[i].image;
        let p = document.createElement("p");
        p.classList.add("textp");
        p.textContent =
          "Wine  =>  " +
          jsonData[i].wine +
          "  Location =>  " +
          jsonData[i].location;
        li.append(img);
        li.append(p);
        slidess.append(li);
      }
    };
  });

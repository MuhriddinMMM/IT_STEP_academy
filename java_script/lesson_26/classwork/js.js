let object = {
  cityName: "NEW YORK",
  regions: [
    {
      regionName: "THE BRONX",
      allPlaces: 9000,
      filledPlaces: 4500,
      schools: [
        {
          schoolName: "SCHOOL № 2",
          allPlaces: 900,
          filledPlaces: 630,
          classes: [
            {
              className: "FIRST GRADES",
              allPlaces: 225,
              filledPlaces: 140,
            },
          ],
        },
      ],
    },
  ],
};

console.log(object.regions[0]);
let section = document.getElementById("section");
let result =
  (object.regions[0].filledPlaces / object.regions[0].allPlaces) * 100;
let color = "";
if (0 < result && result < 20) {
  color = "darkseagreen";
} else if (20 < result && result < 40) {
  color = "darkcyan";
} else if (40 < result && result < 60) {
  color = "darksalmon";
} else if (60 < result && result < 80) {
  color = "darkorange";
} else if (80 < result && result < 100) {
  color = "darkred";
}
section.innerHTML = `<main>
      <h2>CITY : ${object.cityName}</h2>
      <div class="circles">
        <div class="street">
          <a onclick="myFunction()"  >${object.regions[0].regionName}  </a>
          <div class="circle">
            <div class="circle1" style="
            background-color:${color}; 
            width:${result}%;
            height:${result}%;
            ">
            
            </div>
          </div>
          <div class="info">
            <div>
              <p>PLACESFILLED</p>
              <p class="filled">${object.regions[0].filledPlaces}</p>
            </div>
            <div>
              <p>out of places availbale</p>
              <p class="available">${object.regions[0].allPlaces}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    `;

let results =
  (object.regions[0].schools[0].filledPlaces /
    object.regions[0].schools[0].allPlaces) *
  100;
console.log(results);

let colors = "";
if (0 < results && results < 20) {
  colors = "darkseagreen";
} else if (20 < results && results < 40) {
  colors = "darkcyan";
} else if (40 < results && results < 60) {
  colors = "darksalmon";
} else if (60 < results && results < 80) {
  colors = "darkorange";
} else if (80 < results && results < 100) {
  colors = "darkred";
}

function myFunction() {
  let myWindow = window.open("", "newwindow", "width=900,height=900");
  myWindow.document.write(
    ` <link rel="stylesheet" href="style.css" />
    <main>
      <h2>CITY : ${object.cityName + ">" + object.regions[0].regionName}></h2>
      <div class="circles">
        <div class="street">
          <a onclick="myFunctionone()"  >${
            object.regions[0].schools[0].schoolName
          }  </a>
          <div class="circle">
            <div class="circle1" style="
            background-color:${colors}; 
            width:${results}%;
            height:${results}%;
            ">
            
            </div>
          </div>
          <div class="info">
            <div>
              <p>PLACESFILLED</p>
              <p class="filled">${object.regions[0].schools[0].filledPlaces}</p>
            </div>
            <div>
              <p>out of places availbale</p>
              <p class="available">${object.regions[0].schools[0].allPlaces}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    `
  );
}





let resultss =
  (object.regions[0].schools[0].filledPlaces /
    object.regions[0].schools[0].allPlaces) *
  100;
console.log(results);

let colors = "";
if (0 < results && results < 20) {
  colors = "darkseagreen";
} else if (20 < results && results < 40) {
  colors = "darkcyan";
} else if (40 < results && results < 60) {
  colors = "darksalmon";
} else if (60 < results && results < 80) {
  colors = "darkorange";
} else if (80 < results && results < 100) {
  colors = "darkred";
}

function myFunction() {
  let myWindow = window.open("", "newwindow", "width=900,height=900");
  myWindow.document.write(
    ` <link rel="stylesheet" href="style.css" />
    <main>
      <h2>CITY : ${object.cityName + ">" + object.regions[0].regionName}></h2>
      <div class="circles">
        <div class="street">
          <a onclick="myFunctionone()"  >${
            object.regions[0].schools[0].schoolName
          }  </a>
          <div class="circle">
            <div class="circle1" style="
            background-color:${colors}; 
            width:${results}%;
            height:${results}%;
            ">
            
            </div>
          </div>
          <div class="info">
            <div>
              <p>PLACESFILLED</p>
              <p class="filled">${object.regions[0].schools[0].filledPlaces}</p>
            </div>
            <div>
              <p>out of places availbale</p>
              <p class="available">${object.regions[0].schools[0].allPlaces}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    `
  );
}

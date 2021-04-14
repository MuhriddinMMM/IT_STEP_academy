let name = document.getElementById("title");
let section = document.getElementById("section");
let btn = document.getElementById("btn");

let block = document.getElementById("block");
let array = [];
btn.onclick = function (e) {
  e.preventDefault();
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `http://www.omdbapi.com/?apikey=585a4221&t=${name.value}`);
  xhr.onload = function () {
    let obj = JSON.parse(xhr.response);
    console.log(obj);

    let second__block = document.getElementById("second__block");

    let type = obj.Type;
    let title = obj.Title;
    let img = obj.Poster;
    let year = obj.Year;

    //console.log(type)
    //console.log(title)
    //console.log(img)
    //console.log(year)

    let section = document.createElement("div");
    section.innerHTML = `
    <div class="page">
    <div data-num= ${+(i++ - 1)} class="num">
	  <div class="result">
      <div class="img">
        <img src="${img}" alt="${img}" />
      </div>
      <div class="about">
        <h5 class="atype">${type}</h5>
        <h3 class="atitle">${title}</h3>
        <p class="year">${year}</p>
        <div class="rbtn">
          <button class="result__btn">Details</button>
        </div>
      </div>
    </div>
    </div>
    </div>
	  `;
    second__block.append(section);
    array.push(title);
    console.log(array);

    $(".result__btn").on("click", function () {
      console.log($(".result__btn"));
      let index = $(".result__btn").index(this);
      console.log(index);
      let xhrs = new XMLHttpRequest();
      xhrs.open(
        "GET",
        `http://www.omdbapi.com/?apikey=585a4221&t=${array[index]}`
      );
      xhrs.onload = function () {
        let objs = JSON.parse(xhrs.response);
        console.log(objs);

        let section__three = document.getElementById("section__three");
        let imgs = objs.Poster;
        let details = document.getElementById("details");

        details.innerHTML = `
    	
    <div  class="details">
      <div class"detail__img" id="detail__img">
    			<img src="${imgs}" alt="${imgs}">
    		</div>
    		<div class"detail__about" id="detail__about">
    			<div>
    				<h5>Title: ${objs.Title}</h5>
    			</div>
    			<div>
    				<h5>Released: ${objs.Released}</h5>
    			</div>
    			<div>
    				<h5>Genre: ${objs.Genre}</h5>
    			</div>
    			<div>
    				<h5>Country: ${objs.Country}</h5>
    			</div>
    			<div>
    				<h5>Director: ${objs.Director}</h5>
    			</div>
    			<div>
    				<h5>Writer: ${objs.Writer}</h5>
    			</div>
    			<div>
    				<h5>Actors: ${objs.Actors}</h5>
    			</div>
    			<div>
    				<h5>Awards: ${objs.Awards}</h5>
    			</div>
    		</div>
    </div>
   
    		`;
        section__three.append(details);
      };
      xhrs.send();
    });
  };

  xhr.send();
};

var count = 10; //всего записей
var cnt = 3; //сколько отображаем сначала
var cnt_page = Math.ceil(count / cnt); //кол-во страниц

//выводим список страниц
var paginator = document.querySelector(".paginator");
var page = "";
for (var i = 0; i < cnt_page; i++) {
  page +=
    "<span data-page=" +
    i * cnt +
    '  id="page' +
    (i + 1) +
    '">' +
    (i + 1) +
    "</span>";
}
paginator.innerHTML = page;

//выводим первые записи {cnt}
var div_num = document.querySelectorAll(".num");
for (var i = 0; i < div_num.length; i++) {
  if (i < cnt) {
    div_num[i].style.display = "block";
  }
}

var main_page = document.getElementById("page1");
main_page.classList.add("paginator_active");

//листаем
function pagination(event) {
  var e = event || window.event;
  var target = e.target;
  var id = target.id;

  if (target.tagName.toLowerCase() != "span") return;

  var num_ = id.substr(4);
  var data_page = +target.dataset.page;
  main_page.classList.remove("paginator_active");
  main_page = document.getElementById(id);
  main_page.classList.add("paginator_active");

  var j = 0;
  for (var i = 0; i < div_num.length; i++) {
    var data_num = div_num[i].dataset.num;
    if (data_num <= data_page || data_num >= data_page)
      div_num[i].style.display = "none";
  }
  for (var i = data_page; i < div_num.length; i++) {
    if (j >= cnt) break;
    div_num[i].style.display = "block";
    j++;
  }
}

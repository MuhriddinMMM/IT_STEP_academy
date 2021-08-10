// let myIndex = 0;

// function carousel() {
//   let i;
//   let x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 2000);
// }
// carousel();
let arraysize = [];
document.querySelector(".add-size-btn").addEventListener("click", (e) => {
  e.target.insertAdjacentHTML(
    "beforebegin",
    `<div class="form-group"><label class='form-label'>size quantity</label>
    <select class="selectsqy"  name='' id='' required>
        <option disabled selected >Select size</option>
        <option value='XS'>Extra small</option>
        <option value='S'>small</option>
        <option value='M'>Medium</option>
        <option value='L'>Large</option>
        <option value='XL'>Extra Large</option>
    </select>
    <input  name='' type='number' placeholder='quantity' disabled required></div>`
  );
  document.querySelector(".selectsqy").addEventListener("change", function () {
    this.setAttribute("name", "size-" + this.value.toLowerCase());
    arraysize.push(this.getAttribute("name"));
    console.log(arraysize);
    this.nextElementSibling.setAttribute("name", this.value.toLowerCase());
    this.nextElementSibling.removeAttribute("disabled");
    this.nextElementSibling.value = 1;
  });
  document.querySelector(".selectsqy").classList.remove("selectsqy");
});

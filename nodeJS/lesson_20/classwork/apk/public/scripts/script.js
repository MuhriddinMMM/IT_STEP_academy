// let myIndex = 0;
// carousel();

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

const addBtn = document.querySelector(".add-size-btn");
let sizes = [];
let sizesFull = false;

addBtn.addEventListener("click", (e) => {
  addBtn.insertAdjacentHTML(
    "beforebegin",
    `<div class="form-group select-container">
     <button class="btn-delete" type="button">Remove</button>
    <select class="added"  name='' id='' required>
        <option disabled selected >Select size</option>
        <option value='xs'>Extra small</option>
        <option value='s'>small</option>
        <option value='m'>Medium</option>
        <option value='l'>Large</option>
        <option value='xl'>Extra Large</option>
    </select>
    <input  name='' type='number' placeholder='quantity' disabled required min="1"></div>
    `
  );
  addBtn.disabled = true;
  const select = document.querySelector(".added");
  const optionElems = Array.from(select.children);
  optionElems.forEach((opt) => {
    for (let size of sizes) {
      if (size === opt.value) opt.disabled = true;
    }
  });
  select.addEventListener("change", function () {
    this.setAttribute("name", "size-" + this.value);
    this.nextElementSibling.setAttribute("name", "qty-" + this.value);
    this.nextElementSibling.removeAttribute("disabled");
    this.nextElementSibling.value = 1;

    // !
    this.disabled = true;
    addBtn.disabled = false;

    sizes.push(this.value);
    console.log(sizes);
    addBtn.classList.remove("disabled");

    if (sizes.length === optionElems.length - 1) {
      addBtn.disabled = true;
      sizesFull = true;
    }
  });

  document.querySelector(".added").classList.remove("added");

  const deleteBtns = document.querySelectorAll(".btn-delete");

  deleteBtns.forEach((deleteBtn) => {
    if (!deleteBtn.hasAttribute("eventListener")) {
      deleteBtn.setAttribute("eventListener", true);
      deleteBtn.addEventListener("click", function () {
        this.parentElement.remove();
        if (this.nextElementSibling.hasAttribute("disabled")) {
          sizes = sizes.filter((size) => {
            if (size !== this.nextElementSibling.value) return size;
          });
        }
        if (!sizes.length) addBtn.disabled = false;
        if (sizesFull && sizes.length < optionElems.length - 1) {
          addBtn.disabled = false;
          sizesFull = false;
        }
      });
    }
  });
});

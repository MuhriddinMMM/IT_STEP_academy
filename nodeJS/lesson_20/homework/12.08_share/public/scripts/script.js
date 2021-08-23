// document.querySelector('.modal button').addEventListener('click', (e) => {
//     e.target.parentElement.classList.toggle('hidden')
// })

const addBtn = document.querySelector(".add-size-btn");
let sizes = [];
let sizesFull = false


addBtn.addEventListener("click", (e) => {
  addBtn.insertAdjacentHTML(
    "beforebegin",
    `<div class="select-container">
      <button class="btn-delete" type="button">Remove</button>
      <select name="" class="added" required>
          <option disabled selected>Select size</option>
          <option value="xs">Extra small</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
          <option value="xl">Extra large</option>
      </select>
      <input type="number" name="" placeholder="Quantity" disabled required min="1">
    </div>
    `
  );
  addBtn.disabled = true;
  const select = document.querySelector(".added");
  const optionElems = Array.from(select.children)
  optionElems.forEach((opt) => {
      for(let size of sizes) {
          if(size === opt.value) opt.disabled = true
      }
  })


  select.addEventListener("change", function () {
    this.setAttribute("name", "size-" + this.value);
    this.nextElementSibling.setAttribute(
      "name",
      "qty-" + this.value
    );
    this.nextElementSibling.removeAttribute("disabled");
    this.nextElementSibling.value = 1;
    // ****************
    this.disabled = true;
    addBtn.disabled = false;
    sizes.push(this.value)
    if(sizes.length === optionElems.length - 1) {
      addBtn.disabled = true
      sizesFull = true
    } 
    // ****************
  });


  document.querySelector(".added").classList.remove("added");
  const deleteBtns = document.querySelectorAll('.btn-delete')
  deleteBtns.forEach((deleteBtn) => {
    if(!deleteBtn.hasAttribute('eventListener')) {
      deleteBtn.setAttribute('eventListener', true)
      deleteBtn.addEventListener('click', function() {
        this.parentElement.remove()
        if(this.nextElementSibling.hasAttribute('disabled')) {
          sizes = sizes.filter(size => {
            if(size !== this.nextElementSibling.value) return size
          })
        }
        if(!sizes.length) addBtn.disabled = false
        if(sizesFull && sizes.length < optionElems.length - 1) {
          addBtn.disabled = false
          sizesFull = false
        }
      })
    }
  })

  
});



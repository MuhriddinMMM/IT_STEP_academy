// document.querySelector('.modal button').addEventListener('click', (e) => {
//     e.target.parentElement.classList.toggle('hidden')
// })


document.querySelector('.add-size-btn').addEventListener('click', (e) => {
    e.target.insertAdjacentHTML('beforebegin', 
    `<select name="" class="added" required>
        <option disabled selected>Select size</option>
        <option value="XS">Extra small</option>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
        <option value="XL">Extra large</option>
    </select>
    <input type="number" name="" placeholder="Quantity" disabled required>
    `
)
    document.querySelector('.added').addEventListener('change', function() {
        this.setAttribute('name', "size-" + this.value.toLowerCase())
        this.nextElementSibling.setAttribute('name', 'qty-' + this.value.toLowerCase())
        this.nextElementSibling.removeAttribute('disabled')
        this.nextElementSibling.value = 1
    })
    document.querySelector('.added').classList.remove('added')
})
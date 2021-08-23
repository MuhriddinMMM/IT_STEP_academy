const form = document.querySelector('form')
const submitBtn = document.querySelector('.submit')

submitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    const obj = {}
    for(let elem of form.children) {
        obj[elem.name] = elem.value
    }

    console.log(obj)
    
})

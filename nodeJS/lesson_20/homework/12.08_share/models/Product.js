const fs = require('fs')
const path = require('path')

let data = null
fs.readFile(path.join(__dirname, '..', 'data', 'products.json'), (err, prods) => {
    if(err) throw err
    data = JSON.parse(prods)
})

module.exports = class Product {
    constructor(imgUrl, title, price, description, qty){
        this.imgUrl = imgUrl
        this.title = title
        this.price = price
        this.description = description
        this.qty = qty
        this.prodId = data.length
    }

    add(){
        data.push(this)
        fs.writeFile(path.join(__dirname, '..', 'data', 'products.json'), JSON.stringify(data, null, 2), (err) => {
        if(err) throw err
    })
    }
}
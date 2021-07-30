const path = require('path')
const fs = require('fs')

let data = null
fs.readFile(path.join(__dirname, '..', 'data', 'products.json'), (err, prods) => {
    if(err) throw err
    data = JSON.parse(prods)
})

const getRoot = (req, res) => {
    res.render('index', {products: data})
}

module.exports = getRoot
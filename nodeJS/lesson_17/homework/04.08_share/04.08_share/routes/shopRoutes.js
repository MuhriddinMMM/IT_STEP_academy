const path = require('path')
const fs = require('fs')

const express = require('express')

const router = express.Router()

let data = null
fs.readFile(path.join(__dirname, '..', 'data', 'products.json'), (err, prods) => {
    if(err) throw err
    data = JSON.parse(prods)
})

router.get('/product/:id', (req, res) => {
    res.render('product-details', { product: data.find((elem) => elem.prodId === Number(req.params.id)) })
})

router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'products.json'), (err, prods) => {
        if(err) throw err
        data = JSON.parse(prods)
        res.render('index', {products: data})
    })
})

module.exports = router
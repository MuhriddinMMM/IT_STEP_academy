const Product = require('../models/Product')

exports.getAddProduct = (req, res) => {
    res.render('add-product')
}

exports.postAddProduct = (req, res) => {
    let { body } = req
    let product = new Product(body.imgUrl, body.title, body.price, body.description, body.qty)
    product.add()
    res.redirect('/')
}
const path = require('path')

const getProduct = (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", 'views',  'product.html'))
}

module.exports = getProduct
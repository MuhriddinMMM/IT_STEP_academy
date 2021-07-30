const path = require('path')

const getCart = (req, res) => {
    res.redirect('/')
    // res.status(200).sendFile(path.join(__dirname, '..', 'views', 'cart.html'))
}

module.exports = getCart
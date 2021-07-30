const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const authRoutes = require('./routes/authRoutes')
const getProduct = require('./routes/productRoute')
const getCart = require('./routes/cartRoute')
const getRoot = require('./routes/rootRoute')

const app = express()


app.set('views', 'templates')
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/auth', authRoutes)


app.use('/product', getProduct)
app.use('/cart', getCart)
app.use('/', getRoot)

app.listen(3000)
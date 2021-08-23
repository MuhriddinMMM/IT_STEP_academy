const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/adminRoutes')
const authRoutes = require('./routes/authRoutes')
const shopRoutes = require('./routes/shopRoutes')

const app = express()

app.set('views', 'templates')
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/auth', authRoutes)
app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(3000)
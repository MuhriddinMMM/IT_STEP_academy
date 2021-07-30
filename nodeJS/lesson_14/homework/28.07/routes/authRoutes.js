const path = require('path')
const fs = require('fs')

const express = require('express')

const router = express.Router()

let data = null
fs.readFile(path.join(__dirname, '..', 'data', 'users.json'), (err, users) => {
    if (err) throw err
    data = JSON.parse(users)
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res) => {
    for (let user of data) {
        if (user.username === req.body.username && user.password === req.body.password) {
            res.redirect('/cart')
        }
    }
    res.redirect('/auth/login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const { body } = req
    if(body.password !== body['password-repeat']) throw new Error('Passwords do not match!')

    for(let user of data) {
        if(user.username === body.username) {
            console.log(user, body)
            throw new Error('Profile with such username already exists!')
        }
    }
    delete body['password-repeat']
    delete body.agree
    data.push(body)
    fs.writeFile(path.join(__dirname, '..', 'data', 'users.json'), JSON.stringify(data), () => {
        console.log("User successfully registered!")
    })

    res.end()
})




module.exports = router






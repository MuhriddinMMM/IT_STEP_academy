const path = require('path')
const fs = require('fs')

let data = null
fs.readFile(path.join(__dirname, '..', 'data', 'users.json'), (err, users) => {
    if (err) throw err
    data = JSON.parse(users)
})

const auth = {
    getAuth: (req, res) => {
        res.status(200).sendFile(path.join(__dirname, '..', 'views', 'auth.html'))
    },

    postAuth: (req, res) => {
        for (let user of data) {
            if (user.username === req.body.username && user.password === req.body.password) {
                res.redirect('/cart')
            }
        }
        res.redirect('/auth')
    }
}

module.exports = auth


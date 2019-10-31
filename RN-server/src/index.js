const express = require('express')
const app = express()
var bodyParser = require('body-parser')

const port = 3000

const USERNAME = "F2f";
const PASSWORD = "1111"

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello hey there whats up World!'))

let authenticate = (username, password) => {

    if (username != USERNAME) {
        return { message: 'User Not Found', status: 'fail' }
    } else {
        if (password != PASSWORD) {
            return { message: "Incorrect Password", status: 'fail' }

        } else {
            return { message: "Loggin in...", status: "success" }
        }

    }

}

app.post('/login', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    let data = authenticate(username, password)

    res.send(data)

})

app.listen(port, () => console.log(` app listening on port ${port}!`))
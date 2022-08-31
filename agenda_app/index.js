const express = require('express')
const { port } = require('./config')
const { connection } = require('./config/db')
const auth = require("./routes/auth")


const app = express()

//MIDDLEWARE
app.use(express.json())

//DATABASE
connection()

//RUTA
auth(app)

app.get('/', function (req, res) {
    return res.end('Hola, bienvenido')
})

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on: http://localhost:' + port)
})
const express = require('express')
const morgan = require('morgan')
const { port, enviroment } = require('./config')
const { connection } = require('./config/db')
const auth = require('./routes/auth')

const logginEnum = {
    DEV: 'dev',
    PROD: 'tiny'
}

const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(morgan(logginEnum[enviroment]))

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

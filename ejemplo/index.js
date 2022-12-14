const express = require('express')
const { port } = require('./config')
const { connection } = require('./config/db')

const foodRouter = require('./routes/food')
const food_simple = require('./routes/food_simple')

const app = express()

//MIDDLEWARE
app.use(express.json())

//DATABASE
connection()

//RUTA
app.use('/api/food', foodRouter)

food_simple(app)

app.get('/', function (req, res) {
    return res.end('Hola, bienvenido')
})

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on: http://localhost:' + port)
})
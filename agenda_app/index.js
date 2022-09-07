import express, {
	json
} from 'express'
import morgan from 'morgan'
import config from './config/index.js'
import {
	connection
} from './config/db.js'
import auth from './routes/auth.js'

const logginEnum = {
	DEV: 'dev',
	PROD: 'tiny'
}

const app = express()


// MIDDLEWARE
app.use(json())
app.use(morgan(logginEnum[config.enviroment]))

// DATABASE
connection()

// RUTA
auth(app)

app.get('/', function (req, res) {
	return res.end('Hola, bienvenido')
})

app.listen(config.port, () => {
	// eslint-disable-next-line no-console
	console.log('Listening on: http://localhost:' + config.port)
})

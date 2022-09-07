import {
	Router
} from 'express'
import cookieResponse from '../helpers/cookieResponse.js'
import AuthService from '../services/auth.js'

function auth(app) {
	const router = Router()
	app.use('/api/auth', router)

	const authServ = new AuthService()

	router.post('/login', async ({
		body
	}, res) => {
		const result = await authServ.login(body)
		return cookieResponse(res, result)
	})

	router.post('/signup', async ({
		body
	}, res) => {
		const result = await authServ.signup(body)

		return cookieResponse(res, result)
	})
}

export default auth

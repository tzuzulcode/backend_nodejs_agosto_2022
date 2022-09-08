import {
	Router
} from 'express'
import cookieResponse from '../helpers/cookieResponse.js'
import validationHandler from '../middlewares/validationHandler.js'
import {
	createUserSchema
} from '../schemas/user.js'
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

	router.post('/signup', validationHandler(createUserSchema), async ({
		body
	}, res) => {
		const result = await authServ.signup(body)

		return cookieResponse(res, result)
	})
}

export default auth

import Users from './users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config/index.js'

class Auth {
	#users
	constructor() {
		this.#users = new Users()
	}

	async login(data) {
		const {
			email, password
		} = data
		if (!email || !password) {
			return {
				message: 'Incorrect credentials',
				success: false
			}
		}

		const {
			success,
			data: user,
			message
		} = await this.#users.getOneByEmail(email)

		if (success && await this.#compare(password, user.password)) {
			return {
				...this.#generateAuthData(user),
				message
			}
		}

		return {
			message: 'Incorrect credentials',
			success: false,
		}
	}

	async signup(payload) {
		if (!payload.password || !payload.email) {
			return {
				message: 'Error interno, reintentar',
				succes: false
			}
		}

		payload.password = await this.#hash(payload.password, 10)

		const {
			data: user,
			success,
			message
		} = await this.#users.create(payload)

		if (!success){
			return {
				message,
				success
			}
		}

		return {
			...this.#generateAuthData(user),
			message
		}
	}

	#generateAuthData(userData) {
		const user = {
			email: userData.email,
			name: userData.name,
			id:userData.id
		}
		return {
			data: user,
			success: true,
			token: this.#createToken(user)
		}
	}

	#compare(string, hash) {
		try {
			return bcrypt.compare(string, hash)
		} catch (error) {
			return false
		}
	}

	#createToken(data) {
		return jwt.sign(data, config.jwtSecret, {
			expiresIn: '7d'
		})
	}

	async #hash(password) {
		try {
			return await bcrypt.hash(password, 10)
		} catch (error) {
			return false
		}
	}
}

export default Auth

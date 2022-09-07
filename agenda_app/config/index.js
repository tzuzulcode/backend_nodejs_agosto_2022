import dotenv from 'dotenv'
dotenv.config()

const config = {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	dbHost: process.env.DB_HOST,
	dbUser: process.env.DB_USER,
	dbPassword: process.env.DB_PASSWORD,
	dbName: process.env.DB_NAME,
	dbOptions: process.env.DB_OPTIONS,
	jwtSecret: process.env.JWT_SECRET
}

config.dev = config.env==='development'
config.prod = config.env==='production'
export default config
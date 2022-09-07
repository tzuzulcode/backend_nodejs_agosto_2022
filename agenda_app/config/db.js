import mongoose from 'mongoose'
import config from './index.js'

const {
	dbUser, dbPassword, dbHost, dbName, dbOptions
} = config

export const connection = async () => {
	const conn = await mongoose.connect(
		`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}${dbOptions}`
	)
	// eslint-disable-next-line no-console
	console.log('Mongo DB connected:', conn.connection.host)
}

export default mongoose

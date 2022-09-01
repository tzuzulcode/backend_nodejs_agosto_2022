const mongoose = require('mongoose')
const { dbUser, dbPassword, dbHost, dbName, dbOptions } = require('.')

const connection = async () => {
    const conn = await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}${dbOptions}`
    )
    // eslint-disable-next-line no-console
    console.log('Mongo DB connected:', conn.connection.host)
}

module.exports = { connection, mongoose }

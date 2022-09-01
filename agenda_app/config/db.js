const mongoose = require('mongoose')
const { dbUri } = require('.')


const connection = async () => {
    const conn = await mongoose.connect(dbUri)
    // eslint-disable-next-line no-console
    console.log('Mongo DB connected:', conn.connection.host)
}

module.exports = { connection, mongoose }

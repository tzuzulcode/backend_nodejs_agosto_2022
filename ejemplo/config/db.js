const mongoose = require("mongoose")
const { dbUser, dbPassword, dbHost, dbName } = require(".")

const connection = async ()=>{
    const conn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`)
    console.log("Mongo DB connected:",conn.connection.host)
}

module.exports = {connection,mongoose}
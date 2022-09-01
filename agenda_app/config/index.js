require('dotenv').config()

const config = {
    dbUri     : process.env.MONGODB_URI,
    enviroment: process.env.ENVIROMENT,
    jwtSecret : process.env.JWT_SECRET,
    port      : process.env.PORT
}

const logginEnum :{
    DEV: 'dev'
}

module.exports = config

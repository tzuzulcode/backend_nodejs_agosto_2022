const express = require("express")
const { port } = require("./config")
const { connection } = require("./config/db")

const foodRouter = require("./routes/food")
const food_simple = require("./routes/food_simple")

const app = express()

connection()

app.use("/api/food",foodRouter)

food_simple(app)

app.get("/",function(req,res){

    return res.end("Hola, bienvenido")
})

app.listen(port,()=>{
    console.log("Listening on: http://localhost:"+port)
})

//Actividad: Investigar acerca del MVC y Arquitectura Orientada a Servicios. Investigar CRUD en Mongoose
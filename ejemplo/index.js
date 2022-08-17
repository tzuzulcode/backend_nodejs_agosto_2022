const express = require("express")

const app = express()

const port = 4000

app.get("/",function(req,res){
    console.log(req)

    return res.end("Hola mundo")
})

app.listen(port,()=>{
    console.log("Listening on: http://localhost:"+port)
})
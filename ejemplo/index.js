const express = require("express")
const { port } = require("./config")

const app = express()

app.get("/",function(req,res){
    console.log(req)

    return res.end("GET")
})

app.get("/:id",function(req,res){

    return res.end("GET:"+req.params.id)
})

app.post("/",function(req,res){

    return res.end("POST")
})

app.put("/:id",function(req,res){

    return res.end("PUT:"+req.params.id)
})

app.delete("/:id",function(req,res){

    return res.end("DELETE:"+req.params.id)
})

app.listen(port,()=>{
    console.log("Listening on: http://localhost:"+port)
})
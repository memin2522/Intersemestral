const express = require("express");

const PORT = 5000;
const api = express();

//http://127.0.0.1:5000/
api.get("/", (req, res)=>{
    res.send("Binomio de Oro de America");
})

api.listen(PORT, ()=>{
    console.log("http://127.0.0.1:5000")
})
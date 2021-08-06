const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message: "Om Namaha Shivaya"
    });
});
app.get("/shiva",(req,res)=>{
    res.send("<h1>SHIVA SHIVA SHIVA</h1>");
});
app.get("/rama",(req,res)=>{
    res.send("<h1>RAMA RAMA RAMA</h1>");
});

app.listen(8000,()=>{
    console.log("App is running at 8000");
});

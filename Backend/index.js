const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://sashong2003:12345@cluster0.4kb3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log('Connected to MongoDB');
    })
    .catch(()=>{
        console.log("Error")
    })

const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.listen(7000,()=>{
    console.log("Server Port 7000")
});
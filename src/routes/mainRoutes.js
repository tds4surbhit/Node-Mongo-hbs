const express = require("express");
const { model } = require("mongoose");
const Detail = require("../models/Detailss")

const routes = express.Router();

routes.get('/', async (req,res) =>{
    
    const details = await Detail.findOne({"_id":'635439e84f9e8ee1d2a7b646'});
    console.log("details",details);
    res.render("index",{
        details:details
    });

})

routes.get('/gallery',(req,res) => {
    res.send("gallery")
})

module.exports = 
    routes;
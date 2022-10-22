const express = require("express")
const routes = require('./routes/mainRoutes')
const hbs = require("hbs");
const app = express();
const moongose = require("mongoose");
const Detail = require('./models/Details');

app.use('/static',express.static("public")); //Use middleware to have access Static file in Public folders
app.use('', routes);


// Using Templete Engine - HBS
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/Partial");


// DB Connection.
moongose.connect("mongodb://localhost/website_tut",()=>{
    console.log("db connected");
    Detail.create({
        brandName:"Surbhit and Sons",
        brandIconUrl:"https:surbhit/.com",
        link:[
            {
                label:"Home",
                url:"/"
            },
            {
                label:"Service",
                url:"/services"
            },
            {
                label:"gallery",
                url:"/gallery"
            },
            {
                label:"About",
                url:"/about"
            },
            {
                label:"ContactUS",
                url:"/contact-us"
            },
        ],
    })
})

// Listen Server Functionality
app.listen(process.env.PORT | 5556,() =>{
    console.log("Server Started");
})

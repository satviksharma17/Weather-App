//Modules requires to run express.js.
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');

//Path to get static pages from public folder.
const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");
//To set view engine to hbs
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);
//TO use static pages.
app.use(express.static(staticPath));

//Routing.
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404error",{
        errMsg:"Opps! Page Not found"
    });
});

app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log(`Server is Running on ${port}`);
});
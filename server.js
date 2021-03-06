require("dotenv").config();

//external mods

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//internal mods

require('./config/database');
const routes = require('./routes/index');
const { applyMiddleware } = require("redux");

//middleware

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
});

//system variables

const PORT = process.env.PORT || 8081;
app.set('view engine', 'ejs')

//routes

app.use("/jobs", routes.jobs );

app.get("/", (req,res)=> {
    res.render("index");
});
app.use("/jobs", routes.commentsJobs );
app.use("/events", routes.events );
app.use("/events", routes.commentsEvents );
app.use("/pets", routes.pets );
app.use("/pets", routes.commentsPets );
app.use("/music", routes.music );
app.use("/music", routes.commentsMusic );


app.use(express.static(__dirname + '/public'));


app.get("/", (req,res)=> {
    res.render("index");
});


app.listen(PORT, function() {
    console.log('my guy im live on http://localhost:${PORT}');
});


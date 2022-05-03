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
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use((req,res,next)=>{
    console.log(req.url, req.method);
    next();
});

//system variables

const PORT = process.env.PORT || 8080;
app.set('view engine', 'ejs')

//routes

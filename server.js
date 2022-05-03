require("dotenv").config();

//external mods

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

//internal mods

require('./config/database');
const routes = require('./routes/index');


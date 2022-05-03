const express = require('express');
const router = express.Router();

module.exports = {
  jobs: require("./jobs"),
  events: require('./events'),
  pets: require('./pets'),
  music: require('./music'),
  commentsJobs: require('./commentsJobs'),
  commentsEvents: require('./commentsEvents'),
  commentsPets: require('./commentsPets'),
  commentsMusic: require('./commentsMusic'),
};
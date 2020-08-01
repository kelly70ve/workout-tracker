 // Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our models
var db = require("../models");

module.exports = function(app) { 
  // home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // add exercise page
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
}
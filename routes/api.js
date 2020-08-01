const db = require("../models");
const mongoose = require("mongoose");

module.exports = function(app) {
  
  // GET all workouts and exercises
  app.get("/api/workouts/", (req, res) => {
    db.Workout.find({})
      .then(workouts => {
        res.json(workouts);
      })
      .catch(err => {
        res.json(err);
      });
  });


}
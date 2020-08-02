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

    // Put exercises
    app.put("/api/workouts/:id", (req, res) => {
      console.log(req.body)
      let exercise = req.body;
      let exerciseData;

      if (exercise.type === 'resistance') {
        exerciseData = {
          type: exercise.type,
          name: exercise.name,
          weight: exercise.weight,
          sets: exercise.sets,
          reps: exercise.reps,
          duration: exercise.duration
        } 
      } else if (exercise.type === 'cardio') {
        exerciseData = {
          type: exercise.type,
          name: exercise.name,
          distance: exercise.distance,
          duration: exercise.duration
        }
      };

      db.Workout.findOneAndUpdate(
        {
          _id: req.params.id
        },
        {
          $push: {
            exercises: exerciseData
          }
        },
        (error, data) => {
          if (error) {
            res.send(error);
          } else {
            res.send(data);
          }
        }
      );
    });

}
const router = require("express").Router();
const Workout = require("../models");

// Submit new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      }).catch(err => {
        res.status(400).json(err);
      });
  });

  // Update by ID & body 
  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  // Pull info for Range page 
  router.get("/api/workouts/range", ({}, res) => {
    db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  // Info for Workouts Page
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})




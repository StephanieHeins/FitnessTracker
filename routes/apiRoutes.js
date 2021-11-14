const router = require("express").Router();
const db = require("../models");

// Submit new workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
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
    db.Workout.find({}).limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
  });

  // Info for Workouts Page
  router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
  });

  /*
  // Delete by ID
  router.delete("/api/workouts", ({ body }, res) => {
    db.Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });
  */

  module.exports = router;


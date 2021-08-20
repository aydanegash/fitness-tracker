const Workout = require('../models/workout.js');
const router = require('express').Router();

//post routes for workout
router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

<<<<<<< HEAD
//delet routes for workouts
router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

=======
>>>>>>> 237aa7bead7dabd830290fbdb23a860bc9c97073
//update routes for workout
router.put('/api/workouts/:id', ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

<<<<<<< HEAD

router.get('/api/workouts', (req, res) => {
	Workout.aggregate([ 
		{$addFields: {
			totalDuration: 
				{
					$sum: '$exercises.duration'
				}
		}}
	])
		.then((dbWorkout) => {
			res.json(dbWorkout);
		})
		.catch((err) => {
			res.json(err);
		});
});

//get routes for the 7 day averages 
=======
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

>>>>>>> 237aa7bead7dabd830290fbdb23a860bc9c97073
router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkouts) => {
<<<<<<< HEAD
=======
      console.log(dbWorkouts);
>>>>>>> 237aa7bead7dabd830290fbdb23a860bc9c97073
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

<<<<<<< HEAD

=======
router.delete('/api/workouts', ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});
>>>>>>> 237aa7bead7dabd830290fbdb23a860bc9c97073

module.exports = router;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

<<<<<<< HEAD
const fitnessSchema = new Schema({
=======
const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
>>>>>>> 237aa7bead7dabd830290fbdb23a860bc9c97073
  exercises: [{
    type: {
      type: String,
      required: "Aerobic or Resistance?"
    },
    name: {
      type: String,
      trim: true,
      required: "What is the name of the exercise?"
    },
    duration: {
      type: Number,
      required: "In minutes, how long did you do this exercise for?"
    },
    weight: {
      type: Number,
    },
    reps: {
<<<<<<< HEAD
      type: Number,
      
    },
    sets: {
      type: Number,
    }
  }],
    day: { 
      type: Date, 
      default: (new Date()).getTime() 
    } 
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;
=======
      type: Date,
      default: Date.now
    },
    sets: {
      type: Date,
      default: Date.now
    }
  }]
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
>>>>>>> 237aa7bead7dabd830290fbdb23a860bc9c97073


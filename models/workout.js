const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
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


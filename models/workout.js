const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
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
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;


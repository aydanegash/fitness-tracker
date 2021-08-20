const express = require("express");
const mongoose = require("mongoose");
const router = require("express").Router();
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/api.js"));
app.use(require("./routes/index"))

// router.get("/exercise", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/exercise.html"));
// });

// router.get("/stats", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/stats.html"));
// });

//module.exports = router;

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker", 
//   {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



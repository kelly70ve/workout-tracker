const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect( process.env.MONGODB_URI || "mongodb://user1:password1@ds247830.mlab.com:47830/heroku_12k7dpht", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/api.js")(app);
require("./routes/view.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
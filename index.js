const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

// initilize app
const app = express();

const PORT = process.env.PORT || 6000;
// set up database connection
const mongoose = require("mongoose");

let db_url =
  process.env.DB_URL ||
  ``;

mongoose.connect(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Monfo connection error"));

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({
    message: "Hello from server",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

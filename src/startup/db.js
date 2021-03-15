const mongoose = require("mongoose");
var db = "mongodb://localhost:27017/Practice";

var dbConnection = mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connection successful");
    }
  }
);

module.exports = dbConnection;

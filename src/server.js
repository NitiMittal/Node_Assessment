const express = require("express");
const dbConnection = require("./startup/db");
const bodyParser = require("body-parser");
const { UserRoutes } = require("./routes");

const app = express();

app.listen(7000, "localhost", () => {
  console.log("Server listening on port 7000");
});

dbConnection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/user", UserRoutes);

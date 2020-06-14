//Requires
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Init variables
var app = express();
//Routes
var appRoutes = require("./routes/app");
var userRoutes = require("./routes/user");
var loginRoutes = require("./routes/login");
var hospitalRoutes = require("./routes/hospital");
var doctorRoutes = require("./routes/doctor");
var searchingRoutes = require("./routes/searching");
var uploadRoutes = require("./routes/upload");
var imageRoutes = require("./routes/images");

//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Connection
mongoose.connection.openUri(
  "mongodb://localhost:27017/hospitalDB",
  (err, res) => {
    if (err) throw err;

    console.log("Connection With MongoDB Succesfull");
  }
);

//Listen Request
app.listen(3000, () => {
  console.log("Express Server Live Now On Port: 3000");
});

app.use("/", appRoutes);
app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/hospital", hospitalRoutes);
app.use("/doctor", doctorRoutes);
app.use("/search", searchingRoutes);
app.use("/image", imageRoutes);

const express = require("express");
const mongoose = require("mongoose");
const app = express();
// connect MongoDB
mongoose.connect("mongodb://localhost/todolist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// middlewares
app.use(express.urlencoded({ extend: true }));
app.use(express.static("public"));
app.set("view engine", "pug");
// server configuration
app.use("/", require("./routes/index"));
app.use("/", require("./routes/todo"));
app.listen(3000, function () {
  console.log("listening on port 3000");
});

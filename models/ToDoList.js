const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = new mongoose.model("ToDoList", schema);

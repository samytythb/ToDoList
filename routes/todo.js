const express = require("express");
const router = express.Router();
const Todo = require("../models/ToDoList");
router
  .post("/add", (req, res, next) => {
    const { todo } = req.body;
    const newTodo = new Todo({ todo });
    newTodo
      .save()
      .then(() => {
        console.log("Successfully added todo");
        res.redirect("back");
      })
      .catch(next);
  })
  .get("/delete/:_id", (req, res, next) => {
    const { _id } = req.params;
    Todo.deleteOne({ _id })
      .then(() => {
        console.log("Deleted successfully");
        res.redirect("back");
      })
      .catch(next);
  });

module.exports = router;

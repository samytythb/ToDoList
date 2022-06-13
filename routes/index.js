const express = require("express");
const router = express.Router();
const Todo = require("../models/ToDoList");
router.get("/", async (req, res, next) => {
  const Todos = await Todo.find();
  res.render("index", { todo: Todos });
});
module.exports = router;

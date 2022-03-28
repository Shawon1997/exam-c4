const express = require("express");
const router = express.Router();

const Todo = require("../model/todo.model")
router.post("", (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        returnres.send(todo)
    } catch (err) {
        res.send(err)
    }
})
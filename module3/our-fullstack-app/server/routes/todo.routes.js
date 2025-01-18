const router = require("express").Router();
const { map } = require("../app");
const TodoModel = require("../models/Todo.model");
//route to create a todo
router.post("/create", async (req, res) => {
  try {
    const createdTodo = await TodoModel.create(req.body);
    console.log("todo created", createdTodo);
    res.status(201).json({ message: "todo created, nice work", createdTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating the todo" });
  }
});
//find all the todos for one specific user
router.get("/user-todos/:userId", async (req, res) => {
  const theUserId = req.params.userId;
  //destructured way
  // const{userId} = req.params
  try {
    const allTodosForOneUser = await TodoModel.find({
      owner: theUserId,
    }).populate("owner");
    // const mappedTodos = allTodosForOneUser.map((todo) => {
    //   const newTodo = { ...todo._doc, owner: todo.owner.username };
    //   return newTodo;
    // });
    // console.log("here are the users todos", mappedTodos);
    res.status(200).json({ userTodos: allTodosForOneUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error finding the todos" });
  }
});
module.exports = router;

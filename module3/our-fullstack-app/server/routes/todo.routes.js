const router = require("express").Router();
const { map } = require("../app");
const TodoModel = require("../models/Todo.model");

router.get("/all-todos", async (req, res) => {
  try {
    const allTodos = await TodoModel.find();
    res.status(200).json(allTodos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error getting the todos" });
  }
});
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
    const todos = await TodoModel.find({
      owner: theUserId,
    }).populate("owner");
    // const mappedTodos = allTodosForOneUser.map((todo) => {
    //   const newTodo = { ...todo._doc, owner: todo.owner.username };
    //   return newTodo;
    // });
    // console.log("here are the users todos", todos, req.params.userId);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error finding the todos" });
  }
});
//route to get details for one todo based on the id
router.get("/one-todo/:todoId", async (req, res) => {
  const { todoId } = req.params;
  try {
    const oneTodo = await TodoModel.findById(todoId);
    console.log("here is the one todo", oneTodo);
    res.status(200).json(oneTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error finding the todo" });
  }
});
//update one todo based on the id in the url
router.put("/update/:todoId", async (req, res) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.todoId,
      req.body,
      { new: true }
    );
    console.log("here is updated todo", updatedTodo);
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error updating the todo" });
  }
});
//delete one todo based on the id in the url
router.delete("/delete/:todoId", async (req, res) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.todoId);
    console.log("deleted todo", deletedTodo);
    res.status(200).json(deletedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error deleting the todo" });
  }
});
module.exports = router;

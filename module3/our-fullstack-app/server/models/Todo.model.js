const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    required: [true, "is the todo completed is required"],
  },
  owner: {
    type: Schema.Types.ObjectId, //this is the _id of a user
    ref: "User",
    required: true,
  },
});

const TodoModel = model("Todo", todoSchema);
module.exports = TodoModel;

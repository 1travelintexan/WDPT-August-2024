const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  name: String,
  age: Number,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const PetModel = model("pet", petSchema);
module.exports = PetModel;

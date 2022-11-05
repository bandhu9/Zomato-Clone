// import mongoose schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const mealTypeSchema = new Schema({
  name: String,
  content: String,
  image: String,
  meal_type: Number,
});

const mealTypeModel = mongoose.model("mealType", mealTypeSchema);

module.exports = mealTypeModel;

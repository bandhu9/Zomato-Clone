const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: String,
  city: String,
  location_id: Number,
  city_id: Number,
  locality: String,
  thumb: Array,
  aggregate_rating: Number,
  rating_text: String,
  min_price: Number,
  contact_number: Number,
  cuisine_id: Array,
  cuisine: Array,
  image: String,
  mealtype_id: Number,
});

const RestaurantModel = mongoose.model("restaurant", RestaurantSchema);

module.exports = RestaurantModel;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: String,
  city_id: Number,
  location_id: Number,
  city: String,
  country_name: String,
});

const LocationModel = mongoose.model("location", LocationSchema);

module.exports = LocationModel;

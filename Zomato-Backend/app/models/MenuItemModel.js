const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = Schema.Types.ObjectId;

const MenuItemSchema = new Schema({
  name: String,
  description: String,
  ingridients: Array,
  restaurantId: ObjectID,
  image: String,
  qty: Number,
  price: N,
});

const MenuItemModel = mongoose.model("menuitem", MenuItemSchema);

module.exports = MenuItemModel;

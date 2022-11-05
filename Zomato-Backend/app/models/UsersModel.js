const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email: String,
  password: String,
  firstname: String,
  lastname: String,
});

const UsersModel = mongoose.model("user", UsersSchema);

module.exports = UsersModel;

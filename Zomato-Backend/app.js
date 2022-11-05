// require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const apiRoutes = require("./app/routes/api-routes");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRoutes);

console.log("connecting to database...");

mongoose.connect(
  "mongodb+srv://bandhu:N3FXUP9OUaqC2Hja@cluster0.fdv8vp0.mongodb.net/?retryWrites=true&w=majority",
  () => {
    console.log("MongoDB connected");
    console.log("your server is running on http://localhost:", port);
  },
  (e) => console.log(e)
);

app.listen(port, () => {
  console.log("listening on port", port);
});

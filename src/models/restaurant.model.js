const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  contact: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  addedBy: {
    type: String,
  },
});

const restaurants = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurants;

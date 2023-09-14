const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  contact: {
    type: String,
  },
});

const restaurants = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurants;

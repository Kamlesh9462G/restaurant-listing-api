const { restaurants } = require("../models");
const addRestaurant = async (restaurantData) => {
  return await restaurants.create(restaurantData);
};
const getRestaurant = async (restaurantId) => {
    console.log(restaurantId)
    return await restaurants.findOne({_id:restaurantId})
};

const getRestaurants = async () => {
  return await restaurants.find({});
};

const updateRestaurant = async (restaurantId, updateData) => {
  return await restaurants.findOneAndUpdate({ _id: restaurantId }, updateData);
};

const deleteRestaurant = async (restaurantId) => {
  return await restaurants.findOneAndDelete({ _id: restaurantId });
};

module.exports = {
  addRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
};

const express = require("express");

const restaurantController = require("../controllers/restaurant.controller");
const validate = require("../middlewares/validate");
const restaurantValidation = require("../validations/restaurant.validation");
const router = express.Router();

router
  .route("/")
  .post(validate(restaurantValidation.addRestaurant),restaurantController.addRestaurant)
  .get(restaurantController.getRestaurants);

router
  .route("/:restaurantId")
  .get(restaurantController.getRestaurant)
  .put(validate(restaurantValidation.updateRestaurant),restaurantController.updateRestaurant)
  .delete(restaurantController.deleteRestaurant);

module.exports = router;

const { restaurantService,userService } = require("../services");
const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync")


const addRestaurant = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.body.userId);
  req.body["addedBy"] = user.name;
  const rest = await restaurantService.addRestaurant(req.body);
  return res.status(httpStatus.CREATED).json({
    message: "restaurant added successfully!!",
  });
});
const getRestaurant = catchAsync(async (req, res) => {
  const restaurant = await restaurantService.getRestaurant(req.params.restaurantId);
  return res.status(httpStatus.OK).json({
    Data: restaurant,
  });
});

const getRestaurants = catchAsync(async (req, res) => {
  const restaurants = await restaurantService.getRestaurants();
  return res.status(httpStatus.OK).json({
    Data: restaurants,
  });
});

const updateRestaurant = catchAsync(async (req, res) => {
  const updatedRes = await restaurantService.updateRestaurant(
    req.params.restaurantId,
    req.body
  );
  return res.status(httpStatus.OK).json({
    message: "restaurant details updated successfully!!",
  });
});

const deleteRestaurant = catchAsync(async (req, res) => {
  const deletedRes = await restaurantService.deleteRestaurant(req.params.restaurantId);
  return res.status(httpStatus.OK).json({
    message: "restaurant deleted successfully!!",
  });
});

module.exports = {
  addRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
  deleteRestaurant,
};

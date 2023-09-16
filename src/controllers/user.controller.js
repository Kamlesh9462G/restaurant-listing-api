const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

const addUser = catchAsync(async (req, res) => {
  const user = await userService.addUser(req.body);
  return res.status(httpStatus.CREATED).json({
    message: "user created successfully",
  });
});

const getUsers = catchAsync(async (req, res) => {
  const users = await userService.getUsers();
  return res.status(httpStatus.OK).json({
    Data: users,
  });
});

module.exports = {
  addUser,
  getUsers,
};

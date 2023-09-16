const { users } = require("../models");

const addUser = async (userData) => {
  return await users.create(userData);
};

const getUsers = async () => {
  return await users.aggregate([
    {
      $project: {
        _id: 1,
        name: 1,
      },
    },
  ]);
};

const getUserById = async (userId) => {
  return await users.findOne({ _id: userId });
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
};

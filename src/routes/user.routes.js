const express = require("express");

const userController = require("../controllers/user.controller");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/user.validation");
const router = express.Router();

router
  .route("/")
  .post(validate(userValidation.addUser), userController.addUser)
  .get(userController.getUsers);

module.exports = router;

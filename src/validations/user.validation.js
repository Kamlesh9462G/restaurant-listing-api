const Joi = require("joi");

const addUser = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phoneNumber: Joi.string().required(),
  }),
};

module.exports = {
  addUser,
};

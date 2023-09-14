const Joi = require("joi");
const { objectId } = require("./custom.validation");

const addRestaurant = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string().required(),
    contact: Joi.string().required(),
  }),
};
const updateRestaurant = {
  params: Joi.object().keys({
    restaurantId: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object().keys({
    name: Joi.string().required(),
    address: Joi.string().required(),
    contact: Joi.string().required(),
  }),
};

module.exports = {
  addRestaurant,
  updateRestaurant
};

const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    message,
    data: [],
  };
  res.status(statusCode).send(response);
};

module.exports = {
  errorHandler,
};

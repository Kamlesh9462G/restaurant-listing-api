const express = require("express");

const ApiError = require("./utils/ApiError");
const { errorConverter ,errorHandler } = require("../src/middlewares/error");

const cors = require('cors');
const routes = require("./routes/index");
const app = express();


app.use(express.json());
app.use(cors());


app.use("/api/v1", routes);
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.use(errorConverter);
app.use(errorHandler);
module.exports = app;

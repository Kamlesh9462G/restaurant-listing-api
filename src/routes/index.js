const express = require("express");

const restaurantRoute = require("./restaurant.routes");
const userRoute = require("./user.routes");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/restaurant",
    route: restaurantRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

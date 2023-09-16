const app = require("./app");
const mongoose = require("mongoose");
const path = require("path");

//const mysql = require('mysql2/promise');

let server;

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const port = process.env.PORT || 3000;

mongoose.set("strictQuery", true);

mongoose
  .connect(
    "mongodb+srv://Kamal9462:aRSyD6YqCFkjrTZX@cluster0.llk00.mongodb.net/restaurant-listing?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("MongoDB Connected");
    server = app.listen(port, "0.0.0.0", () => {
      console.log(`HTTPS Server running on port  ${port}`);
    });
  });

/**
 * ========================================
 * If We are using MySQL as a DB
 * ========================================
 */
// const pool = mysql.createPool({
//   host: "localhost",
//   user: "username",
//   password: "pwd@12344",
//   database: "restaurant_db",
// });

// module.exports = {
//   pool,
// };

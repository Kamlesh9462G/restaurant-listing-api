const app = require("./app");
const mongoose = require("mongoose");
const path = require("path");
let server;

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const port = process.env.PORT || 3000;

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb+srv://Kamal9462:aRSyD6YqCFkjrTZX@cluster0.llk00.mongodb.net/restaurant-listing?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  })
  .then(() => {

    console.log("MongoDB Connected");
    server = app.listen(port,"0.0.0.0", () => {
      console.log(`HTTPS Server running on port  ${PORT}`);
    });

  });

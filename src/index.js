const app = require("./app");
const mongoose = require("mongoose");
const path = require("path");
let server;

require("dotenv").config({ path: path.join(__dirname, "../.env") });

let PORT = process.env.PORT;

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => {

    console.log("MongoDB Connected");
    server = app.listen(PORT, () => {
      console.log(`HTTPS Server running on port  ${PORT}`);
    });

  });

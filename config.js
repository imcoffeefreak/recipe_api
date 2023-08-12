const mongoose = require("mongoose");

const connect = mongoose
  .connect(
    "",
  )
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = connect;

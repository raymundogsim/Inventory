require("dotenv").config()
const mongoose = require("mongoose");
require("colors");

mongoose.set('strictQuery', false);

console.log(process.env.URI)

//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.URI);
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};




//export
module.exports = connectDb;

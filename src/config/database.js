

const mongoose = require("mongoose");

localUrl="mongodb://localhost:27017/devTinder";
cloudUrl="mongodb+srv://vkoshta92:ROWLwqBH0jRvnV8s@vishnu.uxyfx.mongodb.net/devTinder"
const connectDB = async () => {
  await mongoose.connect(
    localUrl
  );
};

module.exports = connectDB;
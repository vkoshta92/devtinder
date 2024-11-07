const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user")

app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  const user = new User({
    firstName: "Sachin",
    lastName: "Tendulkar",
    emailId: "sachin@kohli.com",
    password: "sachin@123",
  });

  try {
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(7777, () => {
      console.log("Server is successfully listening on port 7777...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
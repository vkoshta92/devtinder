const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user");
const {validateSignUpData}= require("./utils/validation.js")

app.use(express.json());  // json me convert krta h server se dta ko
app.post("/signup", async (req, res) => {
  // Creating a new instance of the User model
  // const user = new User({
  //   firstName: "Sachin",
  //   lastName: "Tendulkar",
  //   emailId: "sachin@kohli.com",
  //   password: "sachin@123",
  // });
//dynamic data srnd

// validation of data
validateSignUpData(req);
// encrypt 




//create new instance

  const user=new User(req.body);
  try {
    await user.save();
    res.send("User Added successfully!");
  } catch (err) {
    res.status(400).send("Error saving the user:" + err.message);
  }
});

// get user id by email
app.get("/user",async(req,res)=>{
  const userEmail= req.body.emaiId;
  try{
    console.log(userEmail);
    const user= await User.findOne({emaild:userEmaiil});
    if(!user){
      res.status(404).send("user not found")
    }
    else{
      res.send(user)
    } 
   
  }
  catch(err){

    res.status(400).send("Something went wrong")
  }
});


// feed all use from data base

app.get("/feed",async (req,res)=>{
  try{
    const users= await User.find({});
    res.send(users);
    console.log('users',users);
  }

  catch(err){{
    res.status(400).send("something went wrong")
  }}
})

// Detele a user from the database
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    //const user = await User.findByIdAndDelete(userId); ye bhi likh skte h

    res.send("User deleted successfully");
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

//update data
app.patch("/user",async (req,res)=>{
  const userId= req.body.userId;
  const data= req.body;
  try{
    const user= await User.findByIdAndUpdate({_id:userId},data,{
      returnDocument: "before",  //   parameter se console me  update ka bad ka printhoga befoe se phle ka
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully");
    
  }
  catch(err){
    res.status(400).send("update failed"+err.message)
  }

})

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
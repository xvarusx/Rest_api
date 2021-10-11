const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/connectDB");
const User = require("./Models/User");
const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello");
// });
connectDB();
//CRUD
// GET
app.get("/user/get/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});
//POST
app.post("/users/post", async (req, res) => {
  const { name, lastName } = req.body;
  try {
    const newUSer = new User({
      name,
      lastName,
    });
    await newUSer.save();
    res.send(newUSer);
  } catch (error) {
    res.send(error.message);
  }
});
//update
app.put("/user/put/", async (req, res) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true }
    );
  } catch (error) {
    res.send(error);
  }
});
//delete
app.delete("/user/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("user deleted....");
  } catch (error) {
    res.send(error);
  }
});

const port = process.env.PORT || 8000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`port runing at port ${port}`)
);

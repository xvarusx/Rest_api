require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const connectDB = require("./config/connectDB");
const User = require("./Models/User");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});
// connectDB();
//CRUD
//POST
// app.post("/users/post", async (req, res) => {
//   const { name, lastName } = req.body;
//   try {
//     const newUSer = new User({
//       name,
//       lastName,
//     });
//     await newUSer.save();
//     res.send(newUSer);
//   } catch (error) {
//     res.send(error.message);
//   }
// });
const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.log(err) : console.log(`port runing at port ${port}`)
);

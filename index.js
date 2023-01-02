require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const defineCurrentUser = require("./middleware/defineCurrentUser");

//Express Settings

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(defineCurrentUser);
//controllers

app.use("/users", require("./controllers/users_controller"));
app.use("/authentication", require("./controllers/authentication"));
//app listen

app.get("/", (req, res) => {
  res.send("welcome to bender you cheeky fuck");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on Port: ${process.env.PORT}`);
});


//{ origin: "http://10.0.0.40:19000", credentials: true }
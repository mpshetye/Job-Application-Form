require('dotenv').config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const app = express();
app.use(express.static(path.join(__dirname, "static")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


//Create database connection
mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  const port = process.env.PORT || 80;
  //Start the server
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
})
}).catch((err)=>{
  console.log(err);
});


//RENDERING FORM
app.get("/", (req, res) => {
  res.status(200).render("index.pug");
});

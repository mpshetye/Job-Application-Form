const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
// var mime = require("mime-types");
const crypto = require("crypto");
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');

const app = express();
app.use("/static", express.static("static"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/contactApplication", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 80;

// app.use(methodOverride('_method'));
// app.use(bodyParser.urlencoded({extended: true}))

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  // image: String,
  jobType: String,
  reside: String,
});

const Contact = mongoose.model("ContactData", contactSchema);

const storag = multer.diskStorage({
  destination: function (req, file, cb) {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, "./static/image");
    } else if (file.mimetype === "application/pdf") {
      cb(null, "./static/file");
    } else {
      let error = new Error("wrong file");
      cb(error);
    }
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);

      cb(null, raw.toString("hex") + path.extname(file.originalname));
    });
  },
});

const upload = multer({ storage: storag });

//RENDERING FORM
app.get("/", (req, res) => {
  res.status(200).render("index.pug");
});

//DISPLAYS ALL ENTRIES
app.get("/data", (req, res) => {
  Contact.find({}, (err, data) => {
    if (err) throw err;
    res.status(200).render("allData.pug", { records: data });
  });
});

const cpUpload = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "file", maxCount: 1 },
]);

// app.post("/contacts", cpUpload, (req, res, next) => {
//   const myData = new Contact({
//     name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     profile: req.files["image"][0].filename,
//     jobType: req.body.jobType,
//     reside: req.body.reside,
//   });
//   Contact.save((err, data) => {
//     if (err) throw err;
//     res.status(200).render("allData.pug", {records: data });
//   });
//   //   res.status(200).render("index.pug");
// });

//AJAX GET
app.get("/user_detail", (req, res) => {
  res.status(200).render("ajaxButton.pug");
});

app.get("/user_data", (req, res) => {
  // console.log(" reached server");
  Contact.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//AJAX POST
app.get("/user_search", (req, res) => {
  res.status(200).render("postAjax.pug");
});
app.post("/search", (req, res, next) => {
  Contact.find({ email: req.body.email }, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//XmlHttpRequest GET
app.get("/all_details", (req, res) => {
  res.status(200).render("xhrGET.pug");
});

app.get("/allUser_data", (req, res) => {
  // console.log(" reached server");
  Contact.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//XmlHttpRequest POST
app.get("/search_details", (req, res) => {
  res.status(200).render("xhrPOST.pug");
});

app.post("/search_data", (req, res, next) => {
  console.log(req);
  Contact.find({ email: req.body.email }, (err, data) => {
    if (err) throw err;
    console.log('147')
    console.log(data);
    console.log('149')
    return res.send(data);
  });
});

//SAVING DATA TO MONGOdb
app.post("/contacts", cpUpload, (req, res, next) => {
  const myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.status(200).render("data.pug", {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        profile: req.files["image"][0].filename,
        jobType: req.body.jobType,
        reside: req.body.reside,
      });
    })
    .catch(() => {
      res.status(400).send("Item cannot be saved to the database");
    });
  //   res.status(200).render("index.pug");
});

//Start the server
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});

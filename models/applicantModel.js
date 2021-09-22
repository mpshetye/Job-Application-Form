const Schema = require("mongoose").Schema;
const { model } = require("mongoose");

const contactSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  jobType: String,
  reside: String,
});

const Contact = model("Contact", contactSchema);

module.exports = Contact;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const City = mongoose.model("Book", citySchema);

module.exports = City;

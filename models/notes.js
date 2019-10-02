var mongoose = require("mongoose");
// Create the schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the noteSchema with the schema object
var noteSchema = new Schema({
  // The city associated with the note
  _CityId: {
    type: Schema.Types.ObjectId,
    ref: "City"
  },
  // date is just a string
  date: {
    type: Date,
    default: Date.now
  },
  // as is the noteText
  noteText: String
});

// Create the Note model using the noteSchema
var Note = mongoose.model("Note", noteSchema);

// Export the Note model
module.exports = Note;
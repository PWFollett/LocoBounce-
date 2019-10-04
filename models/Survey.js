// Node Packages.
const mongoose = require('mongoose');

// Define This As A Schema. 
const Schema = mongoose.Schema;

// Define Our Feedback Schema.
var surveyFeedback = new Schema({
    userLocation: {
        type: String,
        required: true
    }
});

// Define and Export This Document As Schema Name 'Feedback'.
var Feedback = mongoose.model("Feedback", surveyFeedback);

// Do Export.
module.exports = Feedback;
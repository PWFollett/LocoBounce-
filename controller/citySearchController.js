const mongoose = require("mongoose");
const City = require("../models/cities");

module.exports = {
 findAll: function(req, res) {
   City.find(req.query)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 findById: function(req, res) {
   City.findById(req.params.id)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 create: function(req, res) {
   City
     .create(req.body)
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 }
};
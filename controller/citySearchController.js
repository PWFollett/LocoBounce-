 const db = require("../models");

 module.exports = {
    findAll: function(req, res) {
      db.City.find(req.query)
        .then(dbCity => res.json(dbCity))
        .catch(err => res.status(422).json(err));
    }

};
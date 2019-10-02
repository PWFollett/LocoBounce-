var router = require("express").Router();
var citySearchController = require("../controller/citySearchController");

router.get("/cities", citySearchController.findAll);

module.exports = router;

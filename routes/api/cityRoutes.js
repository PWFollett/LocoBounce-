var router = require("express").Router();
var citySearchController = require("../../controller/citySearchController");
router
    .route("/")
    .get(citySearchController.findAll)
    .post(citySearchController.create);
router.route("/:id").get(citySearchController.findById);
module.exports = router;
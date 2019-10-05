const router = require("express").Router();
const citiesRoutes = require("./cityRoutes");

const survey = require("./survey");

router.use("/survey", survey);



// Book routes
router.use("/cities", citiesRoutes);
module.exports = router;
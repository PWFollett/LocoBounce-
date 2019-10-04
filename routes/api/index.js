const router = require("express").Router();
const citiesRoutes = require("./cityRoutes");
// Book routes
router.use("/cities", citiesRoutes);
module.exports = router;
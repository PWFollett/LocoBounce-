const router = require("express").Router();
const bookRoutes = require("./cities");

// Book routes
router.use("/city", citySearchController);

module.exports = router;
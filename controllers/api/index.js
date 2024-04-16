const router = require("express").Router();
const bloggerRoutes = require("./bloggerRoutes");

router.use("/blogger", bloggerRoutes);

module.exports = router;

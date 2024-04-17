const router = require("express").Router();
const bloggerRoutes = require("./bloggerRoutes");
const blogpostRoutes = require("./blogpostRoutes");

router.use("/blogger", bloggerRoutes);
router.use("/blogpost", blogpostRoutes);

module.exports = router;

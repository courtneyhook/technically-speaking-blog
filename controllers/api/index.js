const router = require("express").Router();

const bloggerRoutes = require("./bloggerRoutes");
const blogpostRoutes = require("./blogpostRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/blogger", bloggerRoutes);
router.use("/blogpost", blogpostRoutes);
router.use("/comment", commentRoutes);

module.exports = router;

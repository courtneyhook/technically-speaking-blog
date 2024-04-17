const router = require("express").Router();
const { BlogPost } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.create({
      ...req.body,
      blogger_id: req.session.user_id,
    });
    console.log(blogPostData);
    res.status(200).json(blogPostData);
  } catch (error) {}
});
module.exports = router;

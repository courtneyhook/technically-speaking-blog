const router = require("express").Router();
const { BlogPost } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.create({
      ...req.body,
      blogger_id: req.session.user_id,
    });

    res.status(200).json(blogPostData);
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  try {
    const blogpostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        blogger_id: req.session.user_id,
      },
    });

    res.status(200).json(blogpostData);
  } catch (error) {
    console.log("Could not delete post");
  }
});
module.exports = router;

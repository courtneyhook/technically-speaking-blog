const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/", async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect("/login");
  }
  try {
    const commentData = await Comment.create({
      comment_body: req.body.comment,
      blogpost_id: req.body.id,
      blogger_id: req.session.user_id,
    });

    res.status(200).json(commentData);
  } catch (error) {
    res.status(400).json({ status: "error", message: "Cannot create comment" });
  }
});

module.exports = router;

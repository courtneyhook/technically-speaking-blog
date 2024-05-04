const router = require("express").Router();
const { Blogger, BlogPost, Comment } = require("../models");
//const withAuth = require("../utils");

router.get("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: Comment,
          attributes: ["comment_body", "blogger_id", "blogpost_id"],
          include: [
            {
              model: Blogger,
              attributes: ["username"],
            },
          ],
        },
        {
          model: Blogger,
          attributes: ["username"],
        },
      ],
    });

    const blogPost = blogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );

    res.render("home", {
      blogPost,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/profile", async (req, res) => {
  if (!req.session.logged_in) {
    return res.redirect("/login");
  }
  try {
    const bloggerData = await Blogger.findByPk(req.session.user_id, {
      include: [
        {
          model: BlogPost,
          attributes: ["title", "body", "id"],
        },
        {
          model: Comment,
          attributes: ["comment_body"],
        },
      ],
    });

    if (!bloggerData) {
      res
        .status(400)
        .json({ message: "There is no BLOGGER with that user id" });
    }
    const blogger = bloggerData.get({ plain: true });

    res.render("profile", {
      ...blogger,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/profile");
  }
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;

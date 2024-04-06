const router = require("express").Router();
const { Blogger, BlogPost, Comment } = require("../models");
const withAuth = require("../utils/auth");

//get the latest blogposts to display on the homepage
router.get("/", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findAll({
      include: [
        {
          attributes: ["title", "body"],
        },
        {
          model: Blogger,
          attributes: ["username"],
        },
      ],
    });

    const blogpost = blogpostData.map((blogpost) =>
      blogpost.get({ plain: true })
    );

    res.render("home", {
      blogpost,
    });
  } catch (error) {
    console.log("error getting blogpost data");
  }
});

//routes the user to the login screen
router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    return res.redirect("/");
  }
  res.render("login");
});

//routes the user to their profile page and displays their current blogposts with comments
router.get("/profile", withAuth, async (req, res) => {
  try {
    const bloggerData = await BlogPost.findByPk(req.session.user_id, {
      include: [
        {
          model: BlogPost,
          attributes: ["title", "body"],
        },
        {
          model: Comment,
          attributes: ["comment_body"],
          include: [
            {
              model: Blogger,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const blogger = bloggerData.get({ plain: true });

    res.render("profile", {
      ...blogger,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.log("error displaying profile");
  }
});

module.exports = router;

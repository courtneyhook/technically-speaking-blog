const router = require("express").Router();
const { BlogPost, Comment, Blogger } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.create({
      ...req.body,
      blogger_id: req.session.user_id,
    });

    res.status(200).json(blogPostData);
  } catch (error) {
    console.error(error);
  }
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
    console.error("Could not delete post");
  }
});

router.put("/:id", async (req, res) => {
  try {
    const blogpostData = await BlogPost.update(
      {
        title: req.body.title,
        body: req.body.body,
      },
      {
        where: {
          id: req.params.id,
          blogger_id: req.session.user_id,
        },
      }
    );
    console.log(blogpostData);

    res.status(200).json(blogpostData);
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const blogpostData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [
            "comment_body",
            "blogger_id",
            "blogpost_id",
            "createdAt",
          ],
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
    console.log(blogpostData);
    const post = blogpostData.get({ plain: true });

    res.render("blogpost", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;

const router = require("express").Router();
const { Blogger } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const bloggerData = await Blogger.create({ ...req.body });

    req.session.save(() => {
      req.session.user_id = bloggerData.id;
      req.session.logged_in = true;

      res.status(200).json(bloggerData);
    });
  } catch (error) {
    res.status(400).json({ status: "error", message: "Can not signup" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const bloggerData = await Blogger.findOne({
      where: { email: req.body.email },
    });
    if (!bloggerData) {
      res.status(400).json({ message: "Incorrect email or password " });
      return;
    }

    const passwordOk = bloggerData.checkPassword(req.body.password);

    if (!passwordOk) {
      res.status(400).json({ message: "Incorrect email or password " });
      return;
    }

    req.session.save(() => {
      req.session.user_id = bloggerData.id;
      req.session.logged_in = true;

      res.json({ user: bloggerData, message: "You are logged in" });
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    console.log("error logging out");
  }
});

module.exports = router;

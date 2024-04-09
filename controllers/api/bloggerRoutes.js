const router = require("express").Router();
const { Blogger } = require("../../models");

//create a new blogger from the sign up function
router.post("/", async (req, res) => {
  try {
    console.log("blogger route");
    console.log(req.body);
    const bloggerData = await Blogger.create({ ...req.body });

    req.session.save(() => {
      req.session.user_id = bloggerData.id;
      req.session.logged_in = true;

      res.status(200).json(bloggerData);
    });
  } catch (error) {
    console.log("error creating user");
  }
});

//blogger login existing user
router.post("/login", async (req, res) => {
  try {
    const bloggerData = await Blogger.findOne({
      where: { email: req.body.user_email },
    });

    if (!bloggerData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = bloggerData.checkPassword(req.body.user_password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = bloggerData.id;
      req.session.logged_in = true;

      res.json({ user: bloggerData, message: "You are now logged in" });
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

//blogger logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).json({
      status: "error",
      message: "There was an error logging out",
    });
  }
});

module.exports = router;

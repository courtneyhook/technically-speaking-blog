require("dotenv").config();
const sequelize = require("../config/connection");

const seedBlogger = require("./bloggerData");
const seedBlogPost = require("./blogpostData");
const seedComment = require("./commentData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedBlogger();

  await seedBlogPost();

  await seedComment();

  process.exit(0);
};

seedDatabase();

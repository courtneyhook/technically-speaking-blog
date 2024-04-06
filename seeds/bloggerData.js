const { Blogger } = require("../models");

const bloggerData = [
  {
    first_name: "Courtney",
    last_name: "Hook",
    username: "chook79",
    email: "chook@gmail.com",
    password: "courtney",
  },
  {
    first_name: "Rodney",
    last_name: "Hook",
    username: "rhook75",
    email: "rhook@gmail.com",
    password: "rodney12",
  },
  {
    first_name: "Jasmine",
    last_name: "Hook",
    username: "jhook06",
    email: "jhook@gmail.com",
    password: "jasmine1",
  },
  {
    first_name: "Daiton",
    last_name: "Hook",
    username: "dhook05",
    email: "dhook@gmail.com",
    password: "daiton12",
  },
  {
    first_name: "Sabrina",
    last_name: "Dobson",
    username: "sdobson77",
    email: "sdobson@gmail.com",
    password: "sabrina1",
  },
  {
    first_name: "Scott",
    last_name: "Dobson",
    username: "sdobson76",
    email: "sdobson1@gmail.com",
    password: "scott123",
  },
  {
    first_name: "Teresa",
    last_name: "Lindsay",
    username: "tlindsay58",
    email: "tlindsay@gmail.com",
    password: "teresa12",
  },
  {
    first_name: "Mike",
    last_name: "Lindsay",
    username: "mlindsay50",
    email: "mlindsay@gmail.com",
    password: "mike1234",
  },
  {
    first_name: "Bob",
    last_name: "Davis",
    username: "bdavis32",
    email: "bdavis@gmail.com",
    password: "bob12345",
  },
  {
    first_name: "Martha",
    last_name: "Davis",
    username: "mdavis35",
    email: "mdavis@gmail.com",
    password: "martha12",
  },
];

const seedBlogger = () =>
  Blogger.bulkCreate(bloggerData, { individualHooks: true });
module.exports = seedBlogger;

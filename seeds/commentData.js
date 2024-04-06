const { Comment } = require("../models");

const commentData = [
  {
    comment_body: "That is a great idea!",
    blogger_id: 4,
    blogpost_id: 1,
  },
  {
    comment_body: "You might need meds....you are clearly unstable",
    blogger_id: 6,
    blogpost_id: 1,
  },
  {
    comment_body: "Mouses!",
    blogger_id: 10,
    blogpost_id: 2,
  },
  {
    comment_body: "dude....everyone knows it is mice",
    blogger_id: 8,
    blogpost_id: 2,
  },
  {
    comment_body: "people like you don't deserve to have computers",
    blogger_id: 6,
    blogpost_id: 3,
  },
  {
    comment_body:
      "okay, karen. she has the right to have a computer if she wants",
    blogger_id: 4,
    blogpost_id: 3,
  },
  {
    comment_body:
      "use a red light like the movie studios do when they are filming",
    blogger_id: 1,
    blogpost_id: 4,
  },
  {
    comment_body:
      "Do you know what a red light in a house means? You can earn money from streaming and from redlighting",
    blogger_id: 10,
    blogpost_id: 4,
  },
  {
    comment_body: "Sign me up!",
    blogger_id: 1,
    blogpost_id: 5,
  },
  {
    comment_body: "is the room big enough to line dance in?",
    blogger_id: 7,
    blogpost_id: 5,
  },
  {
    comment_body:
      "You need to put a stop to her spending. You shouldn't have to work so hard to provide for her",
    blogger_id: 2,
    blogpost_id: 6,
  },
  {
    comment_body:
      "^^that last comment was so rude. She takes care of the house and you. She DESERVES to be thanked ",
    blogger_id: 3,
    blogpost_id: 6,
  },
  {
    comment_body: "What a great idea!!!!!",
    blogger_id: 5,
    blogpost_id: 7,
  },
  {
    comment_body: "arentyouthecrazyladyfromtheseniorcenter",
    blogger_id: 9,
    blogpost_id: 7,
  },
  {
    comment_body:
      "take the honeydo list that she has given you, go to the garage and lay down, yell for her help and tell her you hurt yourself trying to surprise her by getting her list completed",
    blogger_id: 2,
    blogpost_id: 8,
  },
  {
    comment_body: "genius idea!!",
    blogger_id: 6,
    blogpost_id: 8,
  },
  {
    comment_body:
      "that long bar button on the bottom of your keyboard will put spaces between your words",
    blogger_id: 3,
    blogpost_id: 9,
  },
  {
    comment_body: "than  k     y ou    th   at ishelp  ful",
    blogger_id: 9,
    blogpost_id: 9,
  },
  {
    comment_body: "oh dear! that is so sad!",
    blogger_id: 7,
    blogpost_id: 10,
  },
  {
    comment_body: "Grandma! I told you I would come visit next month!",
    blogger_id: 1,
    blogpost_id: 10,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);
module.exports = seedComment;

const { FOREIGNKEYS } = require("sequelize/lib/query-types");
const Blogger = require("./Blogger");
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");

Blogger.hasMany(BlogPost, {
  foreignKey: "blogger_id",
});

BlogPost.belongsTo(Blogger, {
  foreignKey: "blogger_id",
});

Blogger.hasMany(Comment, {
  foreignKey: "blogger_id",
});

Comment.belongsTo(Blogger, {
  foreignKey: "blogger_id",
});

BlogPost.hasMany(Comment, {
  foreignKey: "blogpost_id",
});

Comment.belongsTo(BlogPost, {
  foreignKey: "blogpost_id",
});

module.exports = { BlogPost, Blogger, Comment };

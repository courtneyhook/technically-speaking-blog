const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    blogger_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blogger",
        key: "id",
      },
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "blogpost",
        key: 'id",',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelKey: "comment",
  }
);

module.exports = Comment;

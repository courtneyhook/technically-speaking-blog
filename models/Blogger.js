const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");
const { timeStamp } = require("console");

class Blogger extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Blogger.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newBloggerData) => {
        newBloggerData.password = await bcrypt.hash(
          newBloggerData.password,
          10
        );
        return newBloggerData;
      },
      beforeUpdate: async (updatedBloggerData) => {
        updatedBloggerData.password = await bcrypt.hash(updatedBloggerData);
        return updatedBloggerData;
      },
    },
    sequelize,
    freezeTableName: true,
    timeStamps: true,
    underscored: true,
    modelName: "blogger",
  }
);

module.exports = Blogger;

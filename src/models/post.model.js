const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Post = sequelize.define(
  "Post",
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(2000),
      // allowNull defaults to true
    },
    image: {
      type: DataTypes.STRING(2000),
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Post === sequelize.models.Post); // true

Post.sync({ alter: true });

module.exports = Post;

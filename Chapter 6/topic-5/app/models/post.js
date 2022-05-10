"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      paranoid: true, // Enable soft delete
      deletedAt: "deletedAt", // Column name to enable soft delete
      modelName: "Post",
    }
  );
  return Post;
};

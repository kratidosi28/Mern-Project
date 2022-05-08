'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_blog.belongsTo(models.user, {
        as: "userDetails",
        foreignKey: "userId",
        onDelete: "CASCADE",
        onUpdate: "NO ACTION"
      })
    }
  }
  user_blog.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    userId:{
      type: DataTypes.UUID,
      allowNull: false
    },
    title: DataTypes.STRING(100),
    description: DataTypes.TEXT,
    author: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'user_blog',
  });
  return user_blog;
};
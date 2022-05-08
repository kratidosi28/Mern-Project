'use strict';
const {
  Model
} = require('sequelize');
const encrypt = new (require("../../Configs/encrypt"))();
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING(50),
    userName: DataTypes.STRING(50),
    email: DataTypes.STRING(100),
    password: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('password', encrypt.bcrypt(value))
      }
    },
    authToken: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
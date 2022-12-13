'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Friend.belongsTo(models.User, { foreignKey: 'followingId'})
      Friend.belongsTo(models.User, { foreignKey: 'userId'})
    }
  };
  Friend.init({
    images: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};

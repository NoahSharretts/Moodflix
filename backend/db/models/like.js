'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Like.belongsTo(models.User, { foreignKey: 'userId' });
      Like.belongsTo(models.Review, { foreignKey: 'reviewId' });
    }
  };
  Like.init({
    images: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};

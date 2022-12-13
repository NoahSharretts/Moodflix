'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: 'userId' });
      Review.hasMany(models.Comment, { foreignKey: 'reviewId', onDelete: 'cascade', hooks: true });
      Review.hasMany(models.Like, { foreignKey: 'reviewId', onDelete: 'cascade', hooks: true });
    }
  };
  Review.init({
    images: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};

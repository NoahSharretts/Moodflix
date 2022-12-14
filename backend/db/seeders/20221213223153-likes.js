'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Likes', [
      {
        userId: 2,
        reviewId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        reviewId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'Likes',
      null,
      {
        truncate: true, cascade: true, restartIdentity: true
      }
    );
  }
};

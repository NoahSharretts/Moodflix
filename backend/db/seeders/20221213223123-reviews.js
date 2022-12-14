'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        images: "https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        rating: 5,
        userId: 1,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        images: "https://image.tmdb.org/t/p/w500/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        rating: 5,
        userId: 2,
        movieId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});


  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {
      truncate: true, cascade: true, restartIdentity: true
    });

  }
};

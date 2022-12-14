'use strict';
const faker = require('faker');

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const comments = [];

for(let i = 0; i <= 200; i++) {
  let newComment = {
      userId: getRandomNum(1, 3),
      reviewId: getRandomNum(1, 2),
      body: faker.lorem.sentence(),
      createdAt: new Date(),
      updatedAt: new Date()
  }
  comments.push(newComment)
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', comments, [
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'Comments',
      null,
      {
        truncate: true, cascade: true, restartIdentity: true
      }
    );
  }
};

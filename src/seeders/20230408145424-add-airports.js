'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports', [{
    name: 'Juhu Airport',
    cityId: 59,
    createdAt: new Date(),
    updatedAt: new Date()

   }, 
   {
    name: 'Chattrapti Shivaji Maharaj International Airport',
    cityId: 59,
    createdAt: new Date(),
    updatedAt: new Date()
   }, 
   {
    name: 'Pune International Airport',
    cityId: 61,
    createdAt: new Date(),
    updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
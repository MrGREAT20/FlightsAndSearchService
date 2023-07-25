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
   await queryInterface.bulkInsert('Flights', [
    {
      flightNumber: 'Uk 720',
      airplaneId: 1,
      departureAirportId: 8,
      arrivalAirportId: 9,
      arrivalTime: new Date(2023, 7, 25, 10, 33, 30, 0),
      departureTime: new Date(2023, 7, 24, 10, 33, 30, 0),
      price: 4500,
      boardingGate: '1A',
      totalSeats: 160,
      createdAt: new Date(),
      updatedAt: new Date()
   },
   {
    flightNumber: 'Uk 721',
    airplaneId: 2,
    departureAirportId: 8,
    arrivalAirportId: 9,
    arrivalTime: new Date(2023, 7, 27, 10, 33, 30, 0),
    departureTime: new Date(2023, 7, 26, 10, 33, 30, 0),
    price: 4500,
    boardingGate: '1A',
    totalSeats: 160,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    flightNumber: 'Uk 722',
    airplaneId: 3,
    departureAirportId: 8,
    arrivalAirportId: 9,
    arrivalTime: new Date(2023, 7, 29, 10, 33, 30, 0),
    departureTime: new Date(2023, 7, 28, 10, 33, 30, 0),
    price: 4500,
    boardingGate: '1A',
    totalSeats: 160,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    flightNumber: 'Uk 723',
    airplaneId: 4,
    departureAirportId: 8,
    arrivalAirportId: 9,
    arrivalTime: new Date(2023, 8, 2, 10, 33, 30, 0),
    departureTime: new Date(2023, 8, 1, 10, 33, 30, 0),
    price: 4500,
    boardingGate: '1A',
    totalSeats: 160,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    flightNumber: 'Uk 724',
    airplaneId: 4,
    departureAirportId: 8,
    arrivalAirportId: 9,
    arrivalTime: new Date(2023, 8, 3, 10, 33, 30, 0),
    departureTime: new Date(2023, 8, 4, 10, 33, 30, 0),
    price: 4500,
    boardingGate: '1A',
    totalSeats: 160,
    createdAt: new Date(),
    updatedAt: new Date()
   },
  ], {})
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

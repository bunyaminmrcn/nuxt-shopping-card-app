'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Products', [
      {
        title: 'Apple Macbook M1',
        price: 24000
      },
      {
        title: 'Asus Mouse',
        price: 200
      },
      {
        title: 'Logitech Keyboard',
        price: 300
      },
      {
        title: 'Xioami Airbuds',
        price: 120
      },
      {
        title: 'DELL Monitor',
        price: 3800
      },
      {
        title: 'Samsung SSD',
        price: 1500
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Products', null, {});

  }
};

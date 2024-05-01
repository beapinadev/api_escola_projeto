'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.changeColumn('professores', 'email', {
      type: Sequelize.STRING,
      allowNull: false 
    });

    
    await queryInterface.changeColumn('professores', 'password', {
      type: Sequelize.STRING,
      allowNull: false 
    });
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.changeColumn('professores', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    });

    
    await queryInterface.changeColumn('professores', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    });
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Altera a definição do campo "email" na tabela "professores" para remover o defaultValue
    await queryInterface.changeColumn('professores', 'email', {
      type: Sequelize.STRING,
      allowNull: false // Se necessário, defina allowNull conforme sua necessidade
    });

    // Altera a definição do campo "password" na tabela "professores" para remover o defaultValue
    await queryInterface.changeColumn('professores', 'password', {
      type: Sequelize.STRING,
      allowNull: false // Se necessário, defina allowNull conforme sua necessidade
    });
  },

  async down(queryInterface, Sequelize) {
    // Reverte a alteração feita no campo "email" na tabela "professores"
    await queryInterface.changeColumn('professores', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    });

    // Reverte a alteração feita no campo "password" na tabela "professores"
    await queryInterface.changeColumn('professores', 'password', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'none'
    });
  }
};

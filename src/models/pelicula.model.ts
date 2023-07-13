import { Sequelize, DataTypes } from "sequelize";

module.exports = function (sequelize: Sequelize) {
  return sequelize.define(
    "Pelicula",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      genero: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};

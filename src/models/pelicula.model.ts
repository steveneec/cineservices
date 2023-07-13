import { DataTypes, Sequelize } from "sequelize";

const PeliculaModel: { init: Function } = { init: () => {} };

function init(sequelize: Sequelize) {
  sequelize.define(
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
}

PeliculaModel.init = init;

export default PeliculaModel;

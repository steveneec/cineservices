import { DataTypes, Sequelize } from "sequelize";

const SnackModel: { init: Function | any } = { init: () => {} }; //El objeto por defecto a exportar

function init(sequelize: Sequelize) {
  sequelize.define(
    "Snack",
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING,
      },
      //todos los demas propiedades del modelo
      // nombre: {type: DataTypes._...}
    },
    { timestamps: false }
  );
}

SnackModel.init = init;

export default SnackModel;

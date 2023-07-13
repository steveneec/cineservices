import { Sequelize } from "sequelize";
import PeliculaModel from "./pelicula.model";
import SnackModel from "./snack.model";

const sequelize = new Sequelize({
  dialect: "mysql",
  username: "root",
  host: "localhost",
  password: "root",
  database: "cine",
  port: 3306,
});

//Inicializar modelos
PeliculaModel.init(sequelize);
SnackModel.init(sequelize);

export default sequelize;

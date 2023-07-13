import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  username: "root",
  host: "localhost",
  password: "root",
  database: "cine",
  port: 3306,
});

(async function initDB() {
  try {
    await sequelize.sync({ force: true });
    console.log("DB has been connected!");
  } catch (error) {
    console.log(error);
  }
})();

const Pelicula = require("./pelicula.model")(sequelize);
const Snack = require("./snack.model")(sequelize);

export default sequelize;

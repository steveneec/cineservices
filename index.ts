import express from "express";
import rutasPeliculas from "./src/routes/peliculas.route";
import sequelize from "./src/models";

const app = express(); //Crear instancia del servidor
app.use(express.json()); //Entender que se usa json
const port = 3000; //Puerto

//Usar las rutas
app.use("/peliculas", rutasPeliculas); //ruta general

app.listen(port, () => {}); //Incializar server

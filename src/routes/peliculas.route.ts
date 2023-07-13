import express from "express";
import sequelize from "../models";

const router = express.Router();

//Gets
router.get("", async (req, res) => {
  try {
    //@ts-ignore
    const movie = await sequelize.models.Pelicula.findAndCountAll();
    res.json(movie);
  } catch (error) {
    res.status(500).send({ message: "error" });
  }
});

//Posts
router.post("", async (req, res) => {
  try {
    //@ts-ignore
    const movie = await sequelize.models.Pelicula.create(req.body);
    res.send(movie);
  } catch (error) {
    res.status(500).send({
      mensaje: "Ha ocurrido un error!",
      detalles: error.errors ? error.errors[0].message : "Error desconocido",
    });
  }
});

export default router;

export const a = { id: "", b: "" };

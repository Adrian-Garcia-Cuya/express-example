import express from "express";
import routerFlying from "./router/routerFlying.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("bienvenido a la raiz");
});

app.use("/vuelos", routerFlying);

app.use((req, res, next) => {
  // res.status(404).json({message:'ruta no valida-prueba.'})
  next({ status: 404, message: "No se encontro la URL especificada" });
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status).json({ message: error.message });
});

app.listen(3000, () => console.log("Example app is listening on port 3000"));

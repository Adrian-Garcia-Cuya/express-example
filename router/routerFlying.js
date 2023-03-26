import express from "express";
import { flightsOffer, mainFlights } from "../flights.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.json(mainFlights);
});

route.get("/ofertas", (req, res) => {
  console.log("entraste");
  res.json(flightsOffer);
});

route.get("/:id", (req, res) => {
  console.log("entras por vuelos id");
  const id = req.params.id;

  for (let flight of mainFlights) {
    if (flight.id == id) {
      res.json(flight);
    }
  }
});

route.get("/ofertas/:id", (req, res, next) => {
  console.log("entraste a ofertas id ");
  const id = req.params.id;
  const offer = flightsOffer.find((obj) => {
    if (obj.id == id) {
      return true;
    }
  });
  if (offer) {
    return res.json(offer);
  }
  next({ status: 404, message: "vuelo no encontrado" });
});

export default route;

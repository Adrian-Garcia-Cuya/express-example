import express from "express";
import { flightsOffer, mainFlights } from "../flights.js";
import { FligthServices } from "../services/flight.service.js";

const route = express.Router();

const flightServices = new FligthServices();

route.get("/", async (req, res, next) => {
  try {
    const result = await flightServices.getFlights();
    res.json(result);
  }
  catch(e){
    next({status:404,message:e});
  }
});

route.get("/ofertas", async (req, res) => {
  try {
    const result = await flightServices.getOffers();
    res.json(result);
  }
  catch(e){
    next({status:404,message:e});
  }
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

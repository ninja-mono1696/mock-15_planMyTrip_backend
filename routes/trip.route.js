const express = require("express");
const { getTrips, createTrip } = require("../controllers/trip.controller");

const tripRouter = express.Router();

tripRouter.get("/", getTrips);
tripRouter.post("/post", createTrip);

module.exports = { tripRouter };

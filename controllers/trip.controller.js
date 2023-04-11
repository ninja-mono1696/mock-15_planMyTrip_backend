const { tripModel } = require("../models/trip.model");

const getTrips = async (req, res) => {
  try {
    const { destination, budget_per_person } = req.query;

    let filter;
    if (destination) {
      filter = { destination };
    } else {
      filter = {};
    }

    const trips = await tripModel.find(filter).sort({ budget_per_person });
    res.send(trips);
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
};

const createTrip = async (req, res) => {
  try {
    await tripModel.create(req.body);
    res.send({ msg: "New trip has been created" });
  } catch (error) {
    res.send({ msg: "Something went wrong", error: error.message });
  }
};

module.exports = { getTrips, createTrip };

const mongoose = require("mongoose");

const tripSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    destination: {
      type: String,
      enum: ["India", "Africa", "Europe", "America"],
    },
    no_of_travellers: Number,
    budget_per_person: Number,
  },
  {
    timestamps: true,
  }
);

const tripModel = mongoose.model("trip", tripSchema);

module.exports = { tripModel };

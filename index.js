const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");
const { tripRouter } = require("./routes/trip.route");

require("dotenv").config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});

app.use("/trips", tripRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});

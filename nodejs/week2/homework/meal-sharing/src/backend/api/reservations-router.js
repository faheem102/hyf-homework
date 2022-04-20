const express = require("express");
const router = express.Router();
const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    response.json(reservations);
  });
  router.get("/:id", async (request, response) => {
    const reservationWithid = reservations.find((reserve)=> `${reserve.id}` === request.params.id)
    response.json(reservationWithid);
  });



module.exports = router;
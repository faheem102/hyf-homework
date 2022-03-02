const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
    response.json(reviews);
  });
  router.get("/:id", async (request, response) => {
    const reviewWithid = reviews.find((review)=> `${review.id}` === request.params.id)
    response.json(reviewWithid);
  });

module.exports = router;
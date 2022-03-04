const app = require("./app");

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
// Import all the data
const express = require("express");
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// golbal variable
const app = express();

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  console.log("hi my name is faheem")
  response.send("Result of the Application");
});
const allMealswithReviews = meals.map((meal)=>{
  meal.reviews = reviews.filter((review)=>meal.id===review.mealId);
  // in the above line i made the change from meals.id meal.id === review.mealId as suggested
      return meal;

});
// get all the meals
app.get("/meals", async (request, response) => {
  response.json(allMealswithReviews);
});
//get cheap-meals with reviews
app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = allMealswithReviews.filter((meal)=>{ return meal.price < 100});
  response.json(cheapMeals);
});
// get large meals with reviews
app.get("/large-meals", async (request, response) => {
  const largeMeals = allMealswithReviews.filter((meal)=>{return meal.maxNumberOfGuests > 3});
  response.json(largeMeals);
});
// random meal with review
// make a helper function 
const randomMealHelper = ()=> Math.floor(Math.random() * 5);

app.get("/meal", async (request, response) => {
  const randomMeal = allMealswithReviews[randomMealHelper()];
  response.json(randomMeal);
});
// all reservations
app.get("/reservations", async (request, response) => {
  // const allMeals = reservations.map((res)=>{return res});
  response.json(reservations);
});
// random reservation
app.get("/reservation", async (request, response) => {
  const randomReservation = reservations[randomMealHelper()];
  console.log(randomReservation)
  response.json(randomReservation);
});

module.exports = app;

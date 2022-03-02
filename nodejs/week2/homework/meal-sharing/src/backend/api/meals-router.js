const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");
// const reservations = require("./../data/reservations.json");
// const reviews = require("./../data/reviews.json");

router.get("/:id", async (request, response) => {
  const mealId = Number(request.params.id);
  let mealWithid = meals;
  try {
  
    if(isNaN(mealId)){
      mealWithid = "You have entered a string. enter a number instead"
    }
    if(mealId<=4){
      mealWithid = meals.find((meal)=> meal.id === Number(request.params.id))}
    if(mealId>4){
    mealWithid = "Cannot find any meal for this id"
    }
  
  response.json(mealWithid)
}   catch (error) {
    throw error;
  }
    
});
router.get("/", async (request, response) => {
  let mealsData = meals;
  try {
    if("maxPrice" in request.query){
      const maxPrice = Number(request.query.maxPrice);
      mealsData = mealsData.filter((meal)=> meal.price <maxPrice);
  }
    if("title" in request.query){
      const mealTitle = request.query.title;
      mealsData = mealsData.filter((meal)=> meal.title.includes(mealTitle));
  }
    if("createdAfter" in request.query){
      const date1 = Date.parse(request.query.createdAfter);
      mealsData = mealsData.filter((meal)=>date1< Date.parse(meal.createdAt))
  }
    if("limit" in request.query){
      const limitMeals = Number(request.query.limit);
      mealsData = mealsData.slice(0, limitMeals);
  }
  response.json(mealsData);
  } catch (error) {
    throw error;
  }
});

module.exports = router;

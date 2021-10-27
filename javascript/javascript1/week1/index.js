console.log("Step-1- Age-ify" + "A future age calculater.");
const yearOfBirth = 1985;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age  + " years in " + yearFuture + ".");
console.log("Step-2- Goodboy-Oldboy" + " (A dog age Calculator)");
const dogYearOfBirth = 2020;
const dogYearFuture = 2045;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = (dogYearFuture - dogYearOfBirth) * 7;
let shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears === true) {
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);

}
else {
    console.log(`Your dog will be ${humanYear} human years old in ${dogYearFuture}`);
}
console.log("Step-3- Housey Pricey" + " (A house price estimator)");
let friendsNames = ["peter", "julia"];
let houseWidth = [8,5];
let houseHeight = [10,8];
let houseDepth = [10,11];
const peterHouseVolume = houseWidth[0] * houseHeight[0] * houseDepth[0];
const juliaHouseVolume = houseWidth[1] * houseHeight[1] * houseDepth[1];
let volumeInMeters = [peterHouseVolume, juliaHouseVolume];
let gardenSizeInM2 = [100,70];
let houseCost = [2500000,1000000];
let peterHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
let juliaHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300; 
let housePrice = [peterHousePrice, juliaHousePrice];
let priceDifference = [houseCost[0]-housePrice[0], houseCost[1] - housePrice[1]];
if (houseCost[0] > housePrice[0] & houseCost[1] < housePrice[1]) {
    console.log(`${friendsNames[0]} has paid ${priceDifference[0]} less than the house price and julia has paid ${Math.abs(priceDifference[1])} more than the house price.`);

}
else if (houseCost[0] < housePrice[0] & houseCost[1] > housePrice[1]) {
    console.log(`${friendsNames[0]} has paid ${priceDifference[0]} more than the house price and julia has paid ${Math.abs(priceDifference[1])} less than the house price.`);

}
else {
    console.log(`${friendsNames[0]} has paid exact right house price and julia has paid exact right house price.`);

}
console.log ("Step-4- Ez Namey");
const firstWords = ["Amazing","Awesome", "excellent", "Fabulous", "Fantastic", "Incredible", "Outstanding", "Splendid", "Super", "Wonderful"];
//console.log(firstWords.length);


const secondWords = ["business", "company", "concern", "firm", "enterprise", "establishment", "facility", "house", "outfit", "interest"];
//console.log(secondWords.length);
const randomNumberFirst = Math.floor(Math.random() * firstWords.length );
const randomNumberSecond = Math.floor(Math.random() * secondWords.length);
let startupName = firstWords[randomNumberFirst] + " " +secondWords[randomNumberSecond];
//console.log(startupName);
console.log(`"Our Startup name: "${startupName}" which contains ${startupName.length-1} characters"`);



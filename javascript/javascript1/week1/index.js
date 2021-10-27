console.log("Age-ify" + "A future age calculater.");
const yearOfBirth = 1985;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age  + " years in " + yearFuture + ".");
console.log("Goodboy-Oldboy" + " (A dog age Calculator)");
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
console.log("Housey Pricey" + " (A house price estimator)");
let friendsNames = ["peter", "julia"];
let houseHeight = 10;
let houseWidth = 8;
let houseDepth = 10;
let volumeInMeters = houseHeight * houseWidth * houseDepth;
let gardenSizeInM2 = 100;
let houseCost = 2500000
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let priceDifference = houseCost - housePrice
if (housePrice > houseCost) {
    console.log(`${friendsNames[0]} have paid more than the house price`);

}
else if (housePrice <houseCost) {
    console.log(`${friendsNames[0]} have paid ${priceDifference} less than the house price`);
}
else {
    console.log(`${friendsNames[0]} have paid exact right house price`)
}

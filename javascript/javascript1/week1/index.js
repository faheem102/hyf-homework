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
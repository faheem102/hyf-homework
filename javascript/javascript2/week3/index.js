//!--Warm-up Exercises--!

//!--Step1--!
function logOutText() {setTimeout(() => {
    console.log("Called after 2.5 seconds")
}, 2500)}
logOutText();

//!--Step2--!

const delayString= (delay, stringToLog) =>{
    let delayTime = delay * 1000

    setTimeout(() => {
        console.log (`${stringToLog}`)
    }, delayTime)
}
delayString(4, "my name is Faheem?" );

//!--Step3--!
const logAfter5 = () => {
    console.log("Called after 5 seconds")
}
const button1 = document.getElementById("my-button1")
button1.addEventListener("click", () => {
    setTimeout(logAfter5, 5000)
})

// //!--Step4--!

const earthLogger = () => {
    console.log("Earth")
};
const saturnLogger = () => {
    console.log("Saturn")
};
function planetLog(callback){
    callback(planetLog);
    
    

}
planetLog(saturnLogger);
planetLog(earthLogger);

//!--Step5--!

const button2 = document.getElementById("my-button2")
const myPosition = document.getElementById("position")
function getLocation (){
    navigator.geolocation.getCurrentPosition(showPosition);
}
function showPosition(position) {
    myPosition.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }

button2.addEventListener("click", getLocation)

// //!--Step7--!

function runAfterDelay(wait, callback){
    const waitTime = wait *1000
    setTimeout(() => {
        return callback(runAfterDelay)
             }, waitTime)
}

runAfterDelay(4, function counting (value1, symbol, value2){
    if(symbol==="+"){
        return Math.floor(value1+value2)
    }
    if(symbol==="-"){
        return Math.floor(value1-value2)
    }
    if(symbol==="*"){
        return Math.floor(value1*value2)
    }
    if(symbol==="/"){
        return Math.floor(value1/value2)
    }
    if(symbol==="%"){
        return Math.floor(value1%value2)
    }
    console.log("The result is " + counting(4, "*", 4))
})

//!--Step8--!

const doubleClick = () =>{
    console.log("Double click is detected");
}
document.addEventListener("dblclick", doubleClick)

//!--Step9--!
let shouldTellFunnyJoke = true;
const logFunnyJoke = () =>{
    console.log("'Funny Joke': Hear about the new restaurant called Karma? There is no Menu: You get what you deserve.")
}
const logBadJoke = () =>{
    console.log("'Bad Joke': You know what I saw today? Everything I looked at.")
}
function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
    if(shouldTellFunnyJoke ===true){
         return logFunnyJoke(jokeCreator)
    }
    else{
        return logBadJoke(jokeCreator)
    }

}
jokeCreator(true, logFunnyJoke, logBadJoke);

//!--Function as variable--!
const myName = () =>{
    console.log("Faheem Hassan")
}
const myInterests = () =>{
    console.log("Coding, Readin, Table Tennis")
}
const myFavoriteCountries = () =>{
    console.log("Denmark, Germany, Sweden")
}
const favoriteArray = [myName, myInterests, myFavoriteCountries];
favoriteArray.forEach((item)=>item(favoriteArray))

const myData = {
    firtsName:"Faheem",
    secondName:"Hassan",
    age:function ageCalculator(yearBorn){
        console.log(Math.floor(2021-yearBorn));

    },
    eyeColor:"blue"

}
myData.age(1985)

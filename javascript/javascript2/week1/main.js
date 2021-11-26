const products = getAvailableProducts();

function renderProducts(product) {
    //your code here
    
    for(i=0; i<products.length; i++){
        const mainList = document.querySelector("ul");
        const listHeading = document.createElement("h1");
        const listcomponent1 = document.createElement("li");
        const listcomponent2 = document.createElement("li");
        listcomponent1.innerHTML = `price: ${products[i].price}`
        listcomponent2.innerHTML = `rating: ${products[i].rating}`
        listHeading.innerHTML = products[i].name
        mainList.appendChild(listHeading);
        mainList.appendChild(listcomponent1);
        mainList.appendChild(listcomponent2);
        mainList.style.background = "#79a6d2";
        listHeading.style.color = "purple";
        listcomponent1.style.color = "white";
        listcomponent2.style.color = "#ff0000";

    }
  }
  renderProducts();

  //Spirited Animal Task

  const spiritAnimals = ["The crying Butterfly", "The fullmoon Wolf", "The cunning Fox", "The roaring Lion", "The flying Hawk", "The aggresive Bear", "The elegant Swan", "The durable Camel", "The peacful Dove", "The lively Dolphin"]


const bodyOfPage = document.querySelector("body");
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("placeholder", "Write your name here");
nameInput.setAttribute("value", "");
nameInput.setAttribute("id", "personName")
const myButton = document.createElement("button");
myButton.innerHTML = "Click Me!"
const resultText = document.createElement("p");

bodyOfPage.appendChild(nameInput);
bodyOfPage.appendChild(myButton);
bodyOfPage.appendChild(resultText);

function toggleAnimalName(){
    const getName = document.getElementById("personName").value;
    console.log(getName);
    if(getName.length<=0){
        resultText.innerHTML = "Please provide your name to see the result";
        
        
    }
    else{
        
        const randomAnimals = spiritAnimals[Math.floor(Math.random()*spiritAnimals.length)];
        resultText.innerHTML = `${getName}- ${randomAnimals}`
        


    }

}

function buttonClick(){
    myButton.addEventListener("click", function(){
        if(document.querySelector("#choice-button").checked){
            toggleAnimalName();
        }
    });
}
function hoverEffect(){
    nameInput.addEventListener("mouseover", function(){
        if(document.querySelector("#choice-hover").checked){
            toggleAnimalName();
        }
    });
}
buttonClick();
hoverEffect();

//Shortest word finder

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestWord(a,b){
    if(a.length<= b.length){
        return a;

    }
    else{
        return b;
    }

    
    
    }
console.log (danishWords.reduce(shortestWord));
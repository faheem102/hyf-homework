// Step--4 Getting into Promises
const repoList = document.querySelector(".repo-list")

// make an array of the three my favorite github users
const userNames = ["benna100", "faheem102", "amritpandey"]

// make a function which will return the list of users along with their repo information
// use a for loop to make lists every time we fetch repo information  of each user login

function returnList(data){
    for (i = 0; i < data.length; i++) {

        var li = document.createElement('li');
        repoList.appendChild(li);

        var h3 = document.createElement('h3');
        li.appendChild(h3);

        h3.innerText = `${userNames[i]} repositories`

        var internalUl = document.createElement('ul');
        li.appendChild(internalUl);

        for (let j = 0; j < data[i].items.length; j++) {

            const element = data[i].items[j];
            if (j > 2) break;

            const fullName1 = element.name
            const url1 = element.html_url

            var li1 = document.createElement('li');
            internalUl.appendChild(li1);
            li1.innerHTML = `${fullName1} : ${url1}`
        }
}
}



// make three separate promises with different user logins 
// then do the promise all and call our function inside to display the data all together

const promise1 =
    fetch("https://api.github.com/search/repositories?q=user:" + userNames[0])
        .then(response1 => response1.json());

const promise2 = fetch("https://api.github.com/search/repositories?q=user:" + userNames[1])
    .then(response2 => response2.json());


const promise3 = fetch("https://api.github.com/search/repositories?q=user:" + userNames[2])
    .then(response3 => response3.json());

Promise.all([promise1, promise2, promise3]).then((data) => {
    console.log(data)

   returnList(data);

})

//Step--5 Products into shopping cart

// create two classes one for product and other for shoppingcart

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }

    // inside the class create different functionality 
  
    addProduct(product) {
      // Implement functionality here
      this.products.push(product);
    }
  
    removeProduct(product) {
      // Implement functionality here
      var indexOfProduct = this.products.indexOf(product);
      this.products.splice(indexOfProduct, 1);
      //delete this.products[product];
    }
  
    searchProduct(productName) {
      // Implement functionality here
      var item = this.products.find((item) => {
        return item.name === productName;
      });
      return item;
    }
  
    getTotal() {
      // Implement functionality here
      return this.products.reduce((partSum, a) => partSum + a.price, 0);
    }
  
    renderProducts() {
      // Implement functionality here
      var productsLs = "";
      var productsDiv = document.querySelector("#products");
      this.products.forEach((element) => {
        productsLs += element.name;
      });
      productsDiv.innerHTML = productsLs;
    }
  
    getUser(user) {
      // Implement functionality here
  
      return fetch(" https://jsonplaceholder.typicode.com/users/" + 1).then(
        (response2) => response2.json()
      );
    }
  // using switch statements to turn DKK into other currency
     convertCurrency(currency){
  
      switch (currency) {
          case "DOllar":
              return this.getTotal() * 6.5;
              break;
          case "PKR":
              return this.getTotal() * 26.5;
                  break;
          default:
              break;
      }
     }
  }
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  const laptop = new Product("Apple macAir", 10000);
  shoppingCart.addProduct(flatscreen);
  shoppingCart.addProduct(laptop);
  shoppingCart.renderProducts();
     var productReturned = shoppingCart.searchProduct("flat-screen");
     console.log(productReturned)
     //shoppingCart.removeProduct(productReturned);
  console.log(shoppingCart.convertCurrency("PKR"))
  
  shoppingCart.getUser().then((user) => {
    console.log(user);
    document.querySelector("#user").innerHTML = user.name;
    shoppingCart.renderProducts();
    document.querySelector("#total").innerHTML =
      "Total:" + shoppingCart.getTotal();
  });
  
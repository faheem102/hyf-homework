window.getAvailableProducts = function() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function getRandomItem(availableProductNames) {
      return availableProductNames[
        getRandomInt(0, availableProductNames.length - 1)
      ];
    }
  
    function getRandomProductname() {
      const preWords = [
        "Used",
        "Fantastic",
        '"Used"',
        "Broken",
        "Beautiful",
        "Wet",
        "Green",
        "Sloppy",
        "Dirty"
      ];
      const productNames = [
        "Carrot",
        "Drone",
        "Giftcard",
        "Puppy",
        "Car",
        "Shirt",
        "Milk",
        "Chalk",
        "Fish fingers",
        "Socks",
        "Chocolate",
        "Toothbrush",
        "Computer",
        "Nokia",
        "Cologne"
      ];
  
      let chosenProductName = getRandomItem(productNames);
      const shouldHavePreWord = getRandomInt(0, 10) > 6;
  
      if (shouldHavePreWord) {
        const preWord = preWords[getRandomInt(0, preWords.length - 1)];
        chosenProductName = `${preWord} ${chosenProductName}`;
      }
  
      return chosenProductName;
    }
  
    const numberOfAvailableProducts = getRandomInt(0, 30);
    const availableProducts = Array.apply(
      null,
      Array(numberOfAvailableProducts)
    ).map(() => {
      const name = getRandomProductname();
      return {
        id: `${name}${getRandomInt(0, 100000)}`,
        name,
        price: getRandomInt(0, 10000),
        rating: getRandomInt(1, 10)
      };
    });
  
    return availableProducts;
  };


  //!!--HYFBAY--!!

  console.log("Script loaded");

function renderProducts(products)
{
  document.getElementById("products").innerHTML = "";
  for (var i = 0; i < products.length; i++)
  {
  const mainList = document.createElement("ul");
  const listHeading = document.createElement("h2");
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
  document.getElementById("products").appendChild(mainList);
  }
    
}

const products = getAvailableProducts();

renderProducts(products);

var searchProductsInput = document.getElementById("searchProductsInput");

var inputElement = document.createElement("INPUT");
inputElement.setAttribute("type", "text");
inputElement.setAttribute("id", "searchProduct");
inputElement.setAttribute("placeholder", "search for products");
searchProductsInput.appendChild(inputElement);

var inputElementPrice = document.createElement("INPUT");
inputElementPrice.setAttribute("type", "text");
inputElementPrice.setAttribute("id", "searchProductOnPrice");
inputElementPrice.setAttribute("placeholder", "set maximum price");
searchProductsInput.appendChild(inputElementPrice);

document.getElementById("searchProduct").addEventListener('input', function (evt) {
    var searchp = products.filter(function (product) {
        return product.name.toLowerCase().indexOf(evt.target.value.toLowerCase()) != -1;
    })
    renderProducts(searchp);
});

document.getElementById("searchProductOnPrice").addEventListener('input', function (evt) {
        var searchp = products.filter(function (product) {
            return product.price <= parseInt(evt.target.value);
        })
    renderProducts(searchp);
});

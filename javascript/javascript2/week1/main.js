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
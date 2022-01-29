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
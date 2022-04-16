const { response } = require("express");
const express = require("express");
const { all } = require("express/lib/application");
const app = express();
app.use(express.urlencoded({ extended: true }));

// make four functions based on math operation to use them in GET and Post requests.

function addFunction(Array) {
  return Array.reduce((a, b) => a + b, 0);
}
function multiplyFunction(Array) {
  return Array.reduce((a, b) => a * b, 1);
}
function divideFunction(Array) {
  return Array.reduce((a, b) => a / b);
}
function subtractFunction(Array) {
  return Array.reduce((a, b) => a - b);
}

app.get("/calculator/:operator", (req, res) => {
  //make variable for path parameter to use multiple paths
  var operator = req.params.operator;
  const firstNumbers = req.query.first;
  const secondNumbers = req.query.second;
  //make array of values from both query parameters
  const numsArr1 = Array.from(firstNumbers, Number);
  const numsArr2 = Array.from(secondNumbers, Number);
  //here we have two arrays now make these two into one array
  const allNumbersArray = numsArr1.concat(numsArr2);

  let data;

  //now make conditional statements to perform different function with different path parameters the help of operator variable

  if (operator === "add") {
    data = addFunction(allNumbersArray);
  }
  if (operator === "multiply") {
    data = multiplyFunction(allNumbersArray);
  }
  if (operator === "divide") {
    data = divideFunction(allNumbersArray);
  }
  if (operator === "subtract") {
    data = subtractFunction(allNumbersArray);
  }

  res.send(`Total is: ${data}`);
});
app.post("/calculator/:operator", async (req, res) => {
  var operator = req.params.operator;
  const firstNumber = req.body.first;
  const secondNumber = req.body.second;
  const numsArr1 = Array.from(firstNumber, Number);
  const numsArr2 = Array.from(secondNumber, Number);
  const allNumbersArray = numsArr1.concat(numsArr2);

  let data;
  if (operator === "add") {
    data = addFunction(allNumbersArray);
  }
  if (operator === "multiply") {
    data = multiplyFunction(allNumbersArray);
  }
  if (operator === "divide") {
    data = divideFunction(allNumbersArray);
  }
  if (operator === "subtract") {
    data = subtractFunction(allNumbersArray);
  }
  if (data) {
    res.json(`The total is: ${data}`);
  } else {
    res.status(404).end("Invalid Parameter");
  }
  //res.json(`The total is: ${data}`)
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

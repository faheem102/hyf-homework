const { response } = require("express");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/calculator/:operator", (req, res,) => {
    //make variable for path parameter to use multiple paths
    var operator = req.params.operator;
    const firstNumbers= req.query.first;
    const secondNumbers= req.query.second;
    //make array of values from both query parameters
    const numsArr1 = Array.from(firstNumbers, Number);
    const numsArr2 = Array.from(secondNumbers, Number);
    //here we have two arrays now make these two into one array
    const allNumbersArray = numsArr1.concat(numsArr2)
    
    let data;
    //now make conditional statements to perform different function with different path parameters the help of operator variable
    if(operator === "add"){
        data = allNumbersArray.reduce((a, b)=> a+b, 0)

    }
    if(operator === "multiply"){
        data = allNumbersArray.reduce((a, b)=> a*b, 1)

    }
    if(operator === "divide"){
        data = allNumbersArray.reduce((a, b)=> a/b, 1)
    }
    if(operator === "subtract"){
        data = allNumbersArray.reduce((a, b)=> a - b)
    }
    
     res.send(`Total is: ${data}`);
    
    
});
app.post("/calculator/:operator", async (req, res) => {
    var operator = req.params.operator;
    const firstNumber = Number(req.body.first)
    const secondNumber = Number(req.body.second)
    
    let data;
    if(operator === "add"){
        data =firstNumber + secondNumber
    }
    if(operator === "multiply"){
        data =firstNumber * secondNumber
    }
    if(operator === "divide"){
        data =firstNumber / secondNumber
    }
    if(operator === "subtract"){
        data =firstNumber - secondNumber
    }
    if(data){
        res.json(`The total is: ${data}`)

    }
    else{
        res.status(404).end("Invalid Parameter")
    }
    //res.json(`The total is: ${data}`)
    



});
    


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

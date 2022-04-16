const { request } = require("express");
const express = require("express");
const app = express();

app.get("/numbers/add", (req, res) => {
    const firstNumber = Number(req.query.first)
    const secondNumber = Number(req.query.second)
    const sumFunction = firstNumber+secondNumber
    
    res.send(`Total: ${sumFunction}`);


});
app.get("/numbers/multiply/:firstnumber/:secondnumber", (req, res) => {
    const numberFirst = Number(req.params.firstnumber)
    const numberSecond = Number(req.params.secondnumber)
    const multiplyFunction = numberFirst * numberSecond
    res.send(`Total: ${multiplyFunction}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

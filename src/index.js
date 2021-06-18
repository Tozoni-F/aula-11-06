const discount = require("./discount");
const print = require("./print");
const Product = require("./product");


// final_price(computer,discount(period(hour)));
const cel = new Product("Smarthphone","Android","Samsung",2021,"S21",6250,.2);
// final_price(smarthphone,discount(period(hour)));
// console.log(print(computer))
// console.log(print(smarthphone))
const imprime = print(cel);
console.log(imprime)
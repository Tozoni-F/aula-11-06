const discount = require("./discount");
const print = require("./print");
const Product = require("./product");
const cel = new Product("Smarthphone","Android","Samsung",2021,"S21",6250,discount);
const imprime = print(cel);
console.log(imprime)
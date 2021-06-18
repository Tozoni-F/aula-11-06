const discount = require("./discount");
const Product = require("./product");


// final_price(computer,discount(period(hour)));
const pc = new Product("Smarthphone","Android","Samsung",2021,"S21",6250,.2);
// final_price(smarthphone,discount(period(hour)));
// console.log(print(computer))
// console.log(print(smarthphone))
console.log(pc.name)
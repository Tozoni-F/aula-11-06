const Product = {
    type: "Laptop",
    Manufacturer: "Dell",
    Year: 2021,
    model: "Latitude 5470",
    Price: 9000,
};
var morning_discount= 0.1;
var afternoon_discount= 0.08;
let period = ()=>{
    
    if (new Date().getHours < 12){
        return true
        }
        else return false
}

console.log(period())


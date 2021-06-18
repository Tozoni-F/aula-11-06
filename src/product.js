//Cria o objeto produto com suas caracteristicas
class Product {
    constructor(name, type, manufacturer, year, model, price, discount) {
        this.name = name;
        this.type = type;
        this.manufacturer = manufacturer;
        this.year = year;
        this.model = model;
        this.price = price;
        this.discount=discount;
        this.final_price= this.price - this.price*this.discount;
        };
}
module.exports = Product
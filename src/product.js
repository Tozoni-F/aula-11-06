//Cria o objeto produto com suas caracteristicas
//final price tem que ser definido depois, pois depende da hora
function produtc (clas,type,manufacturer,year,model,price,){
    this.clas=clas,
    this.type = type,
    this.manufacturer = manufacturer,
    this.year = year,
    this.model = model,
    this.price = price,
    this.final_price = 
};
function final_price(obj,discount){
    obj.final_price = obj.price-obj.price*discount;
};

module.exports = produtc;
module.exports = final_price;

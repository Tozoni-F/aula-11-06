//determina os descontos globais por horario

const period = require("./period");

//retorna o valor do desconto conforme o periodo
var morning_discount = .1;
var afternoon_discount= .08;
var nigth_discount= 0;
var midnigth_discount= .2;
const discount = (period)=>{
    var discount = 0;
    if(period === "morning"){
        discount=morning_discount
    } else if (period === "afternoon"){
        discount=afternoon_discount
    } else if (period === "nigth"){
        discount=nigth_discount
    } else if (period === "midnigth"){
        discount=midnigth_discount
    }
    return discount
}
module.exports = discount(period);
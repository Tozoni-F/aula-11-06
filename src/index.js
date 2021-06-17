
// A madrugada vai da zero hora às 6h.
//  A manhã, das 6h às 12h (ou ao meio-dia). 
//  A tarde, das 12h às 18h. 
//  A noite, das 18h às 24h (ou meia-noite).
var hour = new Date().getHours();

function period(hour){ 
    let period="a";
    if (hour>=0 && hour<=6){
        period="midnigth"
    } else if (hour>6 && hour<= 12 ){
        period="morning"
    } else if (hour>12 && hour<=18){
        period="afternoon"
    } else if (hour>18 && hour<=24){
        period="nigth"
    }
    return period
};

var morning_discount = 0.1;
var afternoon_discount= 0.08;
var nigth_discount= 0;
var midnigth_discount= .7;
function discount(period){
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
};


function final_price(obj,discount){
        var final_price = obj.price-obj.price*discount;
        obj.final_price = final_price
    };



function produtc (clas,type,manufacturer,year,model,price,final_price){
    this.clas=clas,
    this.type = type,
    this.manufacturer = manufacturer,
    this.year = year,
    this.model = model,
    this.price = price,
    this.final_price=final_price
};
var computer = new produtc("Computer","Laptop","Dell",2021,'Latitude 5470',9000)
function print (obj) {
    var final = "";
    for (var i in obj) {
        if (i==="price"){
            final += obj.clas + "." + i + " = " + Intl.NumberFormat('pt-BR',{style:'currency',currency: 'BRL'}).format(obj[i]) + "\n"
        }else if (i==="final_price"){
            final += obj.clas + "." + i + " = " + Intl.NumberFormat('pt-BR',{style:'currency',currency: 'BRL'}).format(obj[i]) + "\n"
        }else if (obj.hasOwnProperty(i)) {
          final += obj.clas + "." + i + " = " + obj[i] + "\n";
      }
    }
    return final;
  };
final_price(computer,discount(period(hour)));
console.log(print(computer))



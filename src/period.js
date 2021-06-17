//  Determina o periodo do dia conforme abaixo.
//  Entra Hora(number) e sai Periodo(string)
//  A madrugada vai da zero hora às 6h.
//  A manhã, das 6h às 12h (ou ao meio-dia). 
//  A tarde, das 12h às 18h. 
//  A noite, das 18h às 24h (ou meia-noite).

const period = () => {
    hour=new Date().getHours();
    let period="";
    if (hour>=0 && hour<6){
        period="midnigth"
    } else if (hour>=6 && hour< 12 ){
        period="morning"
    } else if (hour>=12 && hour<18){
        period="afternoon"
    } else if (hour>=18 && hour<24){
        period="nigth"
    }
    return period
};
module.exports = period();

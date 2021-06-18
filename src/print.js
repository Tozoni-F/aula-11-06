//percorre todo o objeto e cria a string para impressao, com as correções nos valores para reais
function print (obj) {
    var final = "";
    for (var i in obj) {
        if (i==="price"){
            final += obj.name + "." + i + " = " + Intl.NumberFormat('pt-BR',{style:'currency',currency: 'BRL'}).format(obj[i]) + "\n"
        }else if (i==="final_price"){
            final += obj.name + "." + i + " = " + Intl.NumberFormat('pt-BR',{style:'currency',currency: 'BRL'}).format(obj[i]) + "\n"
        }else if (obj.hasOwnProperty(i)) {
          final += obj.name + "." + i + " = " + obj[i] + "\n";
      }
    }
    return final
  };
module.exports = print
function solucao(precos) {let a = 0;
    let total = 0;
  for (let i = 0; i < precos.length; i++) {if (i < precos.length) {total = total + precos[i]};
                                           if (precos[i] > 200) {a = a + 1} } 
  if (total < 1000) {console.log("NORMAL")} else if (a > 0) {console.log("PREMIUM")} else {console.log("VIP")}

//seu codigo aqui

}
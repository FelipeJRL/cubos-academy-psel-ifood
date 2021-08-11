function solucao(primeiraLetra, segundaLetra, palavras) { let resposta = [];
                                                       
    for (let ocorencia of palavras) {if (primeiraLetra === ocorencia[0] && segundaLetra === ocorencia[1]) {resposta.push(ocorencia)}
                                  }
    let a = resposta.length
                                                          
if (a === 0) {console.log("NENHUMA")} else {for (let i = 0; i < a; i++) {console.log(resposta[i])}
//seu codigo aqui

}}
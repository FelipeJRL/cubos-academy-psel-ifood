function solucao(sequencia) {let maiorQ = 0; // >
    let menorQ = 0; // <
    
    for (let sinal = 0; sinal < sequencia.length; sinal++) {if (sequencia[sinal] === ">") {maiorQ = maiorQ + 1} else if (sequencia[sinal] === "<") {menorQ = menorQ + 1}} 
     let total = maiorQ - menorQ;
     let posicao = total % 7
     if (posicao >= 0) {console.log(posicao)} else {console.log(7 + posicao)}
//seu codigo aqui

}
function solucao(obj) {if (obj.jaTomouVacina === true) {console.log("JA TOMOU VACINA")}
    else if (obj.idade >= 60 && obj.jaTomouVacina === false) {console.log("APTA POR IDADE")}
    else if (obj.temComorbidade === true && obj.jaTomouVacina === false) {console.log("APTA POR COMORBIDADE")}
    else {console.log("INAPTA")}
                       
}
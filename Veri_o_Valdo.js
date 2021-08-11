function solucao(obras) {let i = obras.length;
    obras.sort(function(a,b) {
        if (a.valor < b.valor){
            return true;
        } else {
            return -1
        }
    })
console.log(obras[0].nome)

}
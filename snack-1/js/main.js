/*
    FUNCTIONS
*/

function rndNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
  


class Zucchina {
    constructor(varieta, peso, lunghezza) {
        this.vavarieta =varieta;
        this.peso = peso;
        this.lunghezza = lunghezza;
    }
}

let zucchine = [];
let pesoTotale = 0;

for(let i = 0; i < 10; i++){
    let zucchina = new Zucchina(rndNumber(1, 5), rndNumber(1, 20), rndNumber(1, 30));
    zucchine.push(zucchina);
}

for(let i = 0; i < zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}

console.log(pesoTotale);
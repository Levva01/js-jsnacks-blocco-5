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

let zucchineUnder15 = [];
let zucchineOver15 = [];

for(let i = 0; i < zucchine.length; i++){
    if(zucchine[i].lunghezza < 15){
        zucchineUnder15.push(zucchine[i]);
    } else {
        zucchineOver15.push(zucchine[i]);
    }
}

console.log(zucchineOver15);
console.log(zucchineUnder15);
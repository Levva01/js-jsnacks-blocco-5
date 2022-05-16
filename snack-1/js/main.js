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
    let zucchina = new Zucchina(i, i*2, i+1);
    zucchine.push(zucchina);
}

for(let i = 0; i < zucchine.length; i++){
    pesoTotale += zucchine[i].peso;
}

console.log(pesoTotale);
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
    pesoTotale = zucchine.zucchina.peso;
    zucchine.push(zucchina);
}

console.log(pesoTotale);
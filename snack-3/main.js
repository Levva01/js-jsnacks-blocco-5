// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// Infine stampa separatamente i 3 array.




//creo l'array composto da 10 automobili

let automobili = [

    {
        marca: "Audi",
        modello: "A5",
        alimentazione: "benzina"
    },

    {
        marca: "bmw",
        modello: "x5",
        alimentazione: "diesel"
    },

    {
        marca: "mercedes",
        modello: "classe A",
        alimentazione: "diesel"
    },

    {
        marca: "Ferrari",
        modello: "Enzo",
        alimentazione: "benzina"
    },

    {
        marca: "Fiat",
        modello: "Punto",
        alimentazione: "gpl"
    },

    {
        marca: "Tesla",
        modello: "Model X",
        alimentazione: "elettrico"
    },

    {
        marca: "Audi",
        modello: "A6",
        alimentazione: "diesel"
    },

    {
        marca: "Volkswagen",
        modello: "Passat",
        alimentazione: "diesel"
    },

    {
        marca: "Volkswagen",
        modello: "Polo",
        alimentazione: "metano"
    },

    {
        marca: "Ford",
        modello: "Mustang",
        alimentazione: "benzina"
    }

];

const benzina = automobili.filter((elm) => elm.alimentazione === "benzina");

const diesel = automobili.filter((elm) => elm.alimentazione === "diesel");

const restoAuto = automobili.filter((elm) => elm.alimentazione !== "benzina" && elm.alimentazione !== "diesel");

console.log(benzina);
console.log(diesel);
console.log(restoAuto);
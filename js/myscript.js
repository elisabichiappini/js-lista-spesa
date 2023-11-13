//FILE JS: Programma per stampare una lista della spesa con il ciclo while.

//restrizione codice
'use strict';

// dichiaro e assegno variabile per manipolare elemento in DOM
const elementListaSpesaDom = document.querySelector('.lista');

// dichiaro e assegno array di elementi che rappresentano la mia lista
const listaSpesa = ['castagne', 'uva', 'shampoo', 'cucciolone', 'broccoli', 'scottex', 'caffe', 'salmone', 'yogurt', 'ostriche', 'patate', 'noci', 'marmellata'];

// dichiaro e assegno una variabile prodotto con valore 0 iniziale
let prodotto = 0;
// ciclo while per stampa lista prodotti dell'array
while ( prodotto <= listaSpesa.length-1){
    //stampo i prodotti in console e la loro posizione in array
    console.log([prodotto], listaSpesa[prodotto]);
    prodotto++;
    //creazione elemento per inserirlo in HTML
    const elementoProdotto = document.createElement('li');
    elementoProdotto.classList.add('to-buy');
    elementListaSpesaDom.append(elementoProdotto);
    elementoProdotto.append(listaSpesa[prodotto]);
}
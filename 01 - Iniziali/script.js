/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function startLetters (array) {
    let newArray = [];
    
    for (let i = 0; i < names.length; i++){
        let word = names[i]; 
        newArray.push(word.substring(0,1));  
    }
    return newArray
}

// Invoca la funzione qui e stampa il risultato in console

console.log(startLetters(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
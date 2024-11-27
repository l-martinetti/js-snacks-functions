/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function onlyA (array, letter) {
    let newArray = [];
    
    for (let i = 0; i < names.length; i++){
        let word = names[i]; 

        if (word.substring(0, 1).toUpperCase() === "A"){
            newArray.push(word);              
        } 
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(onlyA(names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
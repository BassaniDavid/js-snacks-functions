/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

initial= 'A'

// Dichiara la funzione qui.

function funzione (input, letter) {
    
    // controllo array che non ci siano numeri e spazi
    for (let i = 0; i < input.length; i++) {
        let stringa =input[i].toString()
        for (let i = 0; i < stringa.length; i++) {
        
            if(!isNaN(stringa[i]) || stringa[i] === " " ){
                return 'array non valido'
            }
        }
    }
    // crea secondo Array
    let secondArray = []

    // controllo ogni elemento singolarmente, lo trasformo in stringa e se in prima posizione ha la lettera corretta la aggiungo al secondo array
    for (let i = 0; i < input.length; i++) {
        let stringa =input[i].toString()

        if(stringa[0] === letter){
            secondArray.push(stringa)
        }
    }

    // il risultato della funzione è il secondo array
    return secondArray
}


// Invoca la funzione qui e stampa il risultato in console

console.log(funzione(names, initial))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
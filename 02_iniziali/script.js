/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function funzione (input) {

    // controllo array che non ci siano numeri
    for (let i = 0; i < input.length; i++) {
        if(isNaN(input[i]) === false) {
            return 'array non valido'
        } 
        else{

            // nuovo array in cui inserire le iniziali
            let inArray = []

            // selezionare le iniziali del primo array e inserirle nel secondo array
            for (let i = 0; i < input.length; i++) {
                inArray.push(input[i])
                
                
            }
            return inArray
        }
    }

}

// Invoca la funzione qui e stampa il risultato in console
funzione(names)
console.log(funzione(names))




//Risultato atteso: ["A", "L", "M", "A", "G", "A"]








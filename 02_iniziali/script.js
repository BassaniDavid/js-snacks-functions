/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function funzione (input) {

    // controllo array che non ci siano numeri e spazi
    for (let i = 0; i < input.length; i++) {
        let stringa =input[i].toString()
        for (let i = 0; i < stringa.length; i++) {
        
            if(!isNaN(stringa[i]) || stringa[i] === " " ){
                return 'array non valido'
            }
        }
    }

    // nuovo array in cui inserire le iniziali
    let inArray = []

    // selezionare le iniziali del primo array e inserirle nel secondo array
    for (let i = 0; i < input.length; i++) {
    
        // trasforma l'elemento selezionato dell' array in una stringa
        let stringa =input[i].toString()
    
        // inserisci la prima lettera della stringa nel secondo array
        inArray.push(stringa[0])
                    
    }
    return inArray

}

// Invoca la funzione qui e stampa il risultato in console
funzione(names)

console.log(funzione(names))




//Risultato atteso: ["A", "L", "M", "A", "G", "A"]



// versione con arrow function
let funzione2 = (input) =>{

    // controllo array che non ci siano numeri e spazi
    for (let i = 0; i < input.length; i++) {
        let stringa =input[i].toString()
        for (let i = 0; i < stringa.length; i++) {
        
            if(!isNaN(stringa[i]) || stringa[i] === " " ){
                return 'array non valido'
            }
        }
    }

    // nuovo array in cui inserire le iniziali
    let inArray = []

    // selezionare le iniziali del primo array e inserirle nel secondo array
    for (let i = 0; i < input.length; i++) {
    
        // trasforma l'elemento selezionato dell' array in una stringa
        let stringa =input[i].toString()
    
        // inserisci la prima lettera della stringa nel secondo array
        inArray.push(stringa[0])
                    
    }
    return inArray

}
console.log(funzione2(names))



/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const string ='stringadicontrollo'


// Dichiara la funzione qui.

function funzione (input) {

    // controllo che la variabile sia una stringa
    if (typeof word !== typeof string) {
        return 'non è una stringa'
    }
    // variabile contatore
    let contatorevocali = 0

    // controllo ogni lettera e se è uguale ad una vocale aumento di 1 una variabile
    input = input.toLowerCase()

    for(let i = 0; i < input.length; i++){
        if(input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
            contatorevocali++
        }
    }
    
    return contatorevocali
}


// Invoca la funzione qui e stampa il risultato in console

console.log(funzione (word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)
/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function hello (name) {
    
    // controllo se la stringa inserita non ha numeri o spazi
    for (let i = 0; i < name.length; i++) {
        
        if(!isNaN(name[i]) || name[i] === " " ){
            console.log(false) 
            return 'Inserisci un nome valido'
        }
    }

    console.log(true) 
    return `Ciao ${name}`

}

// Invoca la funzione qui e stampa il risultato in console

let result=hello(userName)
console.log(result)

//Risultato atteso se si passa 'Mario': // ciao Mario


// versione con arrow function
let hello2 = (name) =>{
    
    // controllo se la stringa inserita non ha numeri o spazi
    for (let i = 0; i < name.length; i++) {
        
        if(!isNaN(name[i]) || name[i] === " " ){
            console.log(false) 
            return 'Inserisci un nome valido'
        }
    }
    return `Ciao ${name}`

}

console.log(hello2(userName))
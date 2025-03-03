/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function hello (name) {
    
    // controllo se la stringa inserita non ha numeri o spazi
    for(let i = 0; i < name.length; i++){
        
        if(!isNaN(name[i]) || name[i] === " " ){
            return false
        }
        else {
            return true
        }
    }
        

}

// Invoca la funzione qui e stampa il risultato in console
hello(userName)
console.log(hello(userName))
let result=hello(userName)

//Risultato atteso se si passa 'Mario': // ciao Mario

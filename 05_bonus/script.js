/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function hello (userName) {
    
    // controllo se la stringa inserita non ha numeri o spazi
    for (let i = 0; i < userName.length; i++) {
        
        if(!isNaN(userName[i]) || userName[i] === " " ){
            console.log(false) 
            return 'Inserisci un nome valido'
        }
    }

    const d = new Date()
    if(d.getHours()< 13){
        return `buongiorno ${userName}`
    }
    else if(d.getHours()>= 13 && d.getHours()< 17){
        return `buon pomeriggio ${userName}`
    }
    else if(d.getHours()>= 17)
    return `buonasera ${userName}`
}

// Invoca la funzione qui e stampa il risultato in console

console.log(hello(name))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.


// arrow function
let hello2 = (userName) => {
    
    // controllo se la stringa inserita non ha numeri o spazi
    for (let i = 0; i < userName.length; i++) {
        
        if(!isNaN(userName[i]) || userName[i] === " " ){
            console.log(false) 
            return 'Inserisci un nome valido'
        }
    }

    const d = new Date()
    if(d.getHours()< 13){
        return `buongiorno ${userName}`
    }
    else if(d.getHours()>= 13 && d.getHours()< 17){
        return `buon pomeriggio ${userName}`
    }
    else if(d.getHours()>= 17)
    return `buonasera ${userName}`
}

console.log(hello2(name))
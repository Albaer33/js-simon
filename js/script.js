// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// dichiarazione variabili
const nInt = 5;
const randomNumber = [];
const userNumber = [];
const rightNumber = [];

// genero l'array di 5 numeri casuali
for (let i = 0; i < nInt; i++) {
    const thisRdnNumber = getRndInteger(0, 100);
    randomNumber.push(thisRdnNumber);
}

// mostro i numeri randomici
alert(randomNumber);

// faccio partire il timer, che dopo x secondi mi darà la possibilità di immettere i numeri
setTimeout(function() {
    for (let i = 0; i < nInt; i++) {
        userNumber[i] = parseInt(prompt('digita il ' + parseInt(i+1) + '° numero'));
    }

    // confronto gli userNumber con i randomNumber e mostro il risultato
    compareNumbers();

    // se l'array di numeri indovinati è vuoto esce un alert altrimenti mostra i numeri 
    if(!rightNumber.length) {
        alert('non hai indovinato nessun numero, sei scarso.');
    }
    else {
        alert('i numeri indovinati sono: ' + rightNumber);
    }
}, 30000);

// FUNCTION
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function compareNumbers() {
    // scorro gli elementi di userNumber con il forEach
    userNumber.forEach((element, index, array) => {
        // vedo se l'elemento i-esimo dei numeri dell'utente è incluso nell' array di numeri random
        if (randomNumber.includes(element)) {
            // se è compreso lo aggiungo all array dei numeri esatti, altrimenti non faccio nulla
            rightNumber.push(element);
        }
    });
}
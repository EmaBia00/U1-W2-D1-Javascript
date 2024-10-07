/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

// STRING
console.log("ESERCIZIO - 1:");
let string =
  "Datatype di tipo stringa il quale contiene dei valori letterali chiamati caratteri";
let stringExample = "Hello World!!!";
console.log(string + " - Es: " + stringExample);

// NUMBER
let number =
  "Datatype di tipo numerico e può assumere il valore intero, decimale, negativo etc...";
let numberExample = 10;
console.log(number + " - Es: " + numberExample);

//BOOLEAN
let boolean =
  "Datatype che può assumere il valore di true o false, in base a delle condizioni di controllo del codice";
let booleanExample = false;
console.log(boolean + " - Es: " + booleanExample);

//NULL
let varNull =
  "Dataype che rappresenta l'assenza di valore, decisa dallo sviluppatore, indicando che la variabile assegnata temporaneamente risulta vuota";
let nullExample = null;
console.log(varNull + " - Es: " + nullExample);

//UNDEFINED
let varUndefined =
  "Dataype che rappresenta l’assenza di valore, risposta dal sistema, dopo l'esecuzione di una determinata azione non riconosciuta";
console.log(varUndefined);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Emanuele";
console.log("ESERCIZIO - 2: " + "Il mio nome è: " + myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let firstNumber = 12;
let secondNumber = 20;
let resultNumber = 12 + 20;
console.log(
  "ESERCIZIO - 3: " +
    "Il risultato della somma tra " +
    firstNumber +
    " e " +
    secondNumber +
    " è: " +
    resultNumber
);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log("ESERCIZIO - 4: " + "La variabile ha il seguente valore: " + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Bianchi";
console.log("ESERCIZIO - 5: " + "Il mio cognome è: " + myName);

const constName = "Emanuele";
// constName = "Bianchi"; //Errore dovuto al fatto che le costanti non possono essere sovrascritte con altri valori (sono univoche).
const constErrorMessage =
  "Uncaught TypeError: Assignment to constant variable.";

console.log(
  "Nel caso in cui avessi cambiato il valore presente nella costante '" +
    constName +
    "' , con un qualsiasi altro valore. Il sistema avrebbe dato come errore il seguente messaggio: " +
    constErrorMessage
);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x -= 4;
console.log("ESERCIZIO - 6: " + "Il risultato della sottrazione è: " + x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(
  "ESERCIZIO - 7: " +
    "Il confronto tra la parola '" +
    name1 +
    "' e '" +
    name2 +
    "' da come risultato: " +
    (name1 === name2)
);

//EXTRA
console.log(
  "EXTRA ESERCIZIO - 7: " +
    "Il confronto tra la parola '" +
    name1 +
    "' e '" +
    name2.toLowerCase() +
    "' da come risultato: " +
    (name1 === name2.toLowerCase()) //trasformo la parola John con lettere minuscole.
);

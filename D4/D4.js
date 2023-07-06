/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

console.log("------esercizio 1------");

function area(l1, l2) {
  let result = Math.floor((l1 * l2) / 2);
  console.log("L'area del rettangolo è:", result);
}

area(10, 5);
area(235, 75);
area(35435, 576);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

console.log("------esercizio 2------");

function crazySum(n1, n2) {
  if (n1 === n2) {
    result2 = Math.floor((n1 + n2) * 3);
    console.log("Oops! Hai inserito due numeri uguali. Il tuo risultato x3 è:", result2);
  } else {
    let result2 = Math.floor(n1 + n2);
    console.log("Il tuo risultato è:", result2);
  }
}

crazySum(5, 4);
crazySum(2, 2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("------esercizio 3------");

m2 = 19;

function crazyDiff(m1, m2) {
  if (m1 > 19) {
    let result3 = Math.abs((m1 - m2) * 3);
    console.log("Oops! Uno dei due valori è > 19. Il tuo risultato x3 è:", result3);
  } else {
    let result3 = Math.abs(m1 - m2);
    console.log("La tua differenza assoluta è:", result3);
  }
}

crazyDiff(8, m2);
crazyDiff(45, m2);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure se n è uguale a 400.
*/

console.log("------esercizio 4------");

function boundary(n) {
  if (n === 20 || n <= 100 || n === 400) {
    let result4 = true;
    console.log("Congrats! Your function is:", result4);
  } else {
    let result4 = false;
    console.log("Oh no! Something went wrong. Your function is:", result4);
  }
}

boundary(20);
boundary(76);
boundary(400);
boundary(399);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("------esercizio 5------");

str = "";
str2 = str.split(" ");
str3 = str2[0];

function epify(str) {
  if (str3 === "EPICODE") {
    let result5 = str;
    console.log(result5);
  } else if (str3 !== "EPICODE") {
    let result5 = "EPICODE" + " " + str;
    console.log(result5);
  }
}

epify("EPICODE is amazing");
epify("is awesome");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("------esercizio 6------");

function check3and7(n4) {
  if (Math.abs(n4 % 3 === 0)) {
    console.log("Il numero è multiplo di 3");
  } else if (Math.abs(n4 % 7 === 0)) {
    console.log("Il numero è multiplo di 7");
  } else {
    console.log("Il numero non è multiplo di 3 né di 7");
  }
}

check3and7(9);
check3and7(14);
check3and7(34);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("------esercizio 7------");

function reverseString(paraStr) {
  let splitStr = paraStr.split("");
  let revArray = splitStr.reverse();
  let joinArr = revArray.join("");
  console.log(joinArr);
}

reverseString("Ciao");
reverseString("murder");
reverseString("Itopinonavevanonipoti");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("------esercizio 8------");

const string = "che la forza sia con te";

function upperFirst(string) {
  let splitString = string.split("");
  let spliceString = splitString.splice(3, 1);
  console.log(spliceString);
}

upperFirst(string);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("------esercizio 9------");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

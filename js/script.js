console.log("JS OK");

//# Chiedo all'utente una parola
const userWord = prompt(
  "Scrivimi una parola e ti controllo se è Palindroma"
).toLowerCase();

//# Flag
let isPalindrom = false;

//# Creo la funzione
function palindromWord(word) {
  let wordReverse = word.split("").reverse();
  wordReverse = wordReverse.join("");
  if (wordReverse === word) isPalindrom = true;
}

//# Invoco la funzione
palindromWord(userWord);

//# Controllo il parametro di isPalindrom e dichiaro se è palindroma o no
if (isPalindrom) console.log("è palindroma");
else console.log("Non è palindroma");

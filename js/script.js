console.log("JS OK");

// -----------------------------------------------------
//! PALINDROMI

// //# Recupero gli elementi dal DOM
// const userInputElement = document.getElementById("user-word");
// const button = document.getElementById("send");
// const resultElement = document.getElementById("result");

// //# Flag
// let isPalindrom;

// //# Creo la funzione
// function palindromWord(word) {
//   let wordReverse = word.split("").reverse();
//   wordReverse = wordReverse.join("");
//   if (wordReverse === word) isPalindrom = true;
//   else isPalindrom = false;
// }

// //# Attendo il click del bottone
// button.addEventListener("click", function () {
//   //# Recupero la parola data dall'utente
//   const userWord = userInputElement.value.trim().toLowerCase();

//   //# Invoco la funzione
//   palindromWord(userWord);

//   //# Controllo il parametro di isPalindrom e dichiaro se è palindroma o no
//   resultElement.innerText = "";
//   if (isPalindrom) resultElement.innerText = "E' palindroma";
//   else resultElement.innerText = "Non è palindroma";
// });

// -----------------------------------------------------

// -----------------------------------------------------
//! ODD or EVEN
//? Funzioni
//# Costanti
const min = 1;
const max = 5;

//# Creo la funzione per il random
function random(min, max) {
  const result = Math.floor(Math.random() * (max + 1 - min)) + min;
  return result;
}

//#Creo la funzione che determina se è pari o dispari
function oddEven(sum) {
  let resultOddEven = "dispari";
  if (!(sum % 2)) resultOddEven = "pari";
  return resultOddEven;
}

//# Chiedo all'utente di scegliere se è pari o dispari
const userChoice = prompt("scegli pari o dispari?", "pari")
  .toLowerCase()
  .trim();

//# Chiedo all'utente un numero da 1 a 5
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5 comrpesi", 3));

//! VALIDAZIONE
// ------------
let isValid = true;

if (userNumber > max || userNumber < min) isValid = false;

if (userChoice !== "pari" && userChoice !== "dispari") isValid = false;

if (isValid === false) alert("Campi non corretti");
else {
  //# Determino randomicamente il numero dell CPU
  const pcNumber = random(min, max);

  console.log(userChoice, userNumber, pcNumber);

  //# Sommo i due numeri
  const sum = userNumber + pcNumber;

  console.log(sum, oddEven(sum));

  //# Determino chi ha vinto controllando la scelta dell'utente con quella determinata dalla funzione
  if (oddEven(sum) === userChoice) console.log("Hai vinto");
  else console.log("Hai preso");
}
// -----------------------------------------------------

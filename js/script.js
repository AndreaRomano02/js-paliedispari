console.log("JS OK");

// -----------------------------------------------------
//! PALINDROMI

//# Recupero gli elementi dal DOM
const userInputElement = document.getElementById("user-word");
const button = document.getElementById("send");
const resultElement = document.getElementById("result");

//# Flag
let isPalindrom;

//# Creo la funzione
function palindromWord(word) {
  let wordReverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    wordReverse += word[i];
  }
  if (wordReverse === word) isPalindrom = true;
  else isPalindrom = false;
}

//# Attendo il click del bottone
button.addEventListener("click", function () {
  //# Recupero la parola data dall'utente
  const userWord = userInputElement.value.trim().toLowerCase();

  //# Invoco la funzione
  palindromWord(userWord);

  //# Controllo il parametro di isPalindrom e dichiaro se è palindroma o no
  resultElement.innerText = "";
  if (isPalindrom) resultElement.innerText = "E' palindroma";
  else resultElement.innerText = "Non è palindroma";
});

// -----------------------------------------------------

// -----------------------------------------------------
//! ODD or EVEN
//# Recupero gli elemtni dal DOM
const userNumberElement = document.getElementById("user-number");
const selectElement = document.getElementById("select-odd-even");
const resultElemetn = document.getElementById("result-odd-even");
const pcNumberElement = document.getElementById("cpu-number");
const play = document.getElementById("play");

//# Costanti
const min = 1;
const max = 5;

//? Funzioni

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

play.addEventListener("click", function () {
  //# Recupero dalla scelta dell'utente se è pari o dispari
  const userChoice = selectElement.value.toLowerCase();

  //# Recupero dall'input il valore del numero scelto dall'utente
  const userNumber = parseInt(userNumberElement.value);

  //! VALIDAZIONE
  // ------------
  let isValid = true;

  if (userNumber > max || userNumber < min) isValid = false;

  if (userChoice !== "pari" && userChoice !== "dispari") isValid = false;

  if (isValid === false) alert("Campi non corretti");
  else {
    //# Determino randomicamente il numero dell CPU e la stampo in pagina
    const pcNumber = random(min, max);
    pcNumberElement.innerText = pcNumber;

    //# Sommo i due numeri
    const sum = userNumber + pcNumber;

    console.log(sum, oddEven(sum));

    //# Determino chi ha vinto controllando la scelta dell'utente con quella determinata dalla funzione e la stampo
    if (oddEven(sum) === userChoice) resultElemetn.innerText = "Hai vinto";
    else resultElemetn.innerText = "Hai preso";
  }
});
// -----------------------------------------------------

console.log("JS OK");

//# Recupero gli elementi dal DOM
const userInputElement = document.getElementById("user-word");
const button = document.getElementById("send");
const resultElement = document.getElementById("result");

//# Attendo il click del bottone
button.addEventListener("click", function () {
  //# Recupero la parola data dall'utente
  const userWord = userInputElement.value.trim().toLowerCase();

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
  resultElement.innerText = "";
  if (isPalindrom) resultElement.innerText = "E' palindroma";
  else resultElement.innerText = "Non è palindroma";
});

# TRACCIA Palindroma

Chiedere all’utente di inserire una parola.

Creare una funzione per capire se la parola inserita è palindroma.

---

## STEPS

- Chiedo all'utente di inserire una parola e la salvo in una variabile.
- Creo una funziona: che vuole un attributo e che andrà a restituire un valore Booleano.

  - Creo un ciclo per scomporre la parola e invertire la sequenza di lettura.
  - **SE** è uguale alla parola data dall'utente
    - Imposta il valore della funzione "True"
  - **ALTRIMENTI**
    - Imposta il valore della funzione "False"

- Controllo il valore booleano della funzione cosa restituisce e determino se la parola è
  Palindroma oppure no.

---

# TRACCIA Pari o Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

Sommiamo i due numeri.

Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

Dichiariamo chi ha vinto.

---

## STEPS

- Creo la funzione per il random che ha bisogno di un min e di un max e restituisce un valore numerico.
  - Faccio la formula e il risultato lo inserisco nel valore da restituire.
- Chiedo all'utente di scegliere pari o dispari.
- Chiedo all'utente di dirmi un numero da 1 a 5 compresi.
- Richiamo la funzione inserendo i miei limiti del random.
- Sommo il numero uscito randomico e il numero detto dall'utente.

- Creo una funzione che stabilisca se è pari o dispari.

  - Creo una variabile che di default è 'dispari'.
  - **SE** è pari

    - Sovrascrivo la variabile con 'Pari'.

- Controllo quello che ha scelto l'utente.
- **SE** E' uguale alla variabile
  - Ha vinto l'utente
- **ALTRIMENTI** Ha vinto il pc.

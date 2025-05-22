const nome = "Alessio";
const cognome = "Chirone";
let eta = 25;
let professione = "Macellaio";

if (professione === "Sviluppatore Web") {
    console.log("Salve sono " + nome + " " + cognome + ", ho " + eta + " anni e sono un " + professione);
} else if (professione === "Sviluppatore Mobile") {
    console.log("Salve sono " + nome + " " + cognome + ", ho " + eta + " anni e sono un " + professione);
} else if (professione === "Sviluppatore Backend") {
    console.log("Salve sono " + nome + " " + cognome + ", ho " + eta + " anni e sono " + professione);
} else { console.log("Salve sono " + nome + " " + cognome + ", ho " + eta + " anni e non sono uno sviluppatore") };

console.log("------------------------------------------------------------");


//Stampa elementi del Dom per nome del tag
let par = document.getElementsByTagName("p");
console.log(par);
console.log("------------------------------------------------------------");


//Stampa elementi del Dom per nome della classe
let blocchi = document.getElementsByClassName("day-section");
console.log(blocchi);

console.log("------------------------------------------------------------");

//Con un ciclo for modifico il colore di sfondo di tutti gli elementi con la classe "day-section"
for (let i = 0; i < blocchi.length; i++) {
    blocchi[i].style.backgroundColor = "bisque"
}
console.log("------------------------------------------------------------");

// Funzione per calcolare l'area di un rettangolo
let base = 4;
let altezza = 5;

function calcolaAreaRettangolo(base, altezza) {
    return base * altezza;
}
console.log("Se la base de rettangolo è " + base + " ,l'altezza " + altezza + " , la sua area è di " + calcolaAreaRettangolo(base, altezza))

console.log("------------------------------------------------------------");


// Simulo un sito web di un cinema che calcola il prezzo del biglietto in base all'età 
// (i minori di 12 anni hanno diritto a uno sconto pari alla metà del bilgietto inziiale) e se il giorno della settimana è Lunedi c'un sconto del 20%
let prezzoBigliettoBase = 10;
let ifLunedi = true;
let etaCliente = 8;
const scontoBambino = 0.5;
let prezzoFinale = 0
let scontoLunedi = 0.8;


function calcolaPrezzoBiglietto(prezzoBase, giorno, eta) {



    if (etaCliente < 12 && ifLunedi === true) {
        prezzoFinale = prezzoBigliettoBase * scontoBambino * scontoLunedi;
    } else if (etaCliente < 12 && ifLunedi === false) {
        prezzoFinale = prezzoBigliettoBase * scontoBambino;
    } else if (etaCliente >= 12 && ifLunedi === true) {
        prezzoFinale = prezzoBigliettoBase * scontoLunedi;
    }
    else if (etaCliente >= 12 && ifLunedi === false) {
        prezzoFinale = prezzoBigliettoBase;
    }




    return prezzoFinale;


}
console.log("Il prezzo del biglietto è: " + calcolaPrezzoBiglietto(prezzoBigliettoBase, ifLunedi, etaCliente) + "€");


console.log("------------------------------------------------------------");

// Registrare un evento
let form = document.getElementById("myForm");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let nome = data.get("nome");
    let cognome = data.get("cognome");
    let email = data.get("email");
    console.log("Nome:", nome);
    console.log("Cognome:", cognome);
    console.log("Email:", email);


    


        let speciali = /[@!#$%&'()*+\-./0123456789]/;

    if (speciali.test(nome) || speciali.test(cognome)) {
        alert("Controlla i tuoi dati, non puoi usare caratteri speciali");
      
    }else{
    alert("Perfetto " + nome + " " + cognome + ", abbiamo ricevuto la tua richiesta di iscrizione. Riceverai una mail a " + email);
}}



//for of

const ingredienti = ["farina", "acqua", "sale", "lievito", "olio"];
for (const ingrediente of ingredienti){
    console.log(ingrediente)
}

console.log("------------------------------------------------------------");

// for in
const dipendenti={
    nome: "Alessio",
    eta:25,
    professione: "Sviluppatore Web"
}


for (let persona in dipendenti){
    console.log(persona + ":" + dipendenti[persona]);
}

console.log("------------------------------------------------------------");

// Esercizio 1

// Scrivi un programma che prenda un array di numeri e calcoli la somma di tutti gli elementi.
// For Classico
const numeri = [1, 2, 3, 4, 5];
let somma =0;
for(let i= 0; i<numeri.length; i++){
    somma+=numeri[i];
    console.log(` I numeri dell'array sono  ${numeri}`);
    
}
    console.log(`La somma dei numeri dell'array è: ${somma}`);





console.log("------------------------------------------------------------");



// For of
const n=[85,75,45,96];
let tot=0;
    for(let numero of n){
        tot+=numero;
        console.log(` I numeri dell'array sono ${n}`);
    }
        console.log(`La somma dei numeri dell'array è :${tot}`);




        function toggleDarkMode() {
    let body = document.getElementById("body") || document.body;
    body.classList.toggle("dark");

    let btn = document.querySelector(".darkMode");
    if (btn) {
        if (body.classList.contains("dark")) {
            btn.innerHTML = "☀"; // Sole
        } else {
            btn.innerHTML = "☾"; // Luna
        }
    }
}
// Bootstrap Collapse

        const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))



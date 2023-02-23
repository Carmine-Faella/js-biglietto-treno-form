
const fasciaEta = document.getElementById("fasciaEta");

const nomeCog = document.getElementById("nomeCog");

const price = document.getElementById("price");

const carrozza = document.getElementById("carrozza")

const codiceCp = document.getElementById("codiceCp")

const numeroDiKm = document.getElementById("numeroKm").value;

let prezzoBi = 0.21;

let prezzoTot = numeroDiKm * prezzoBi;

let prezzoMinore = (prezzoTot - (prezzoTot * (20/100)));

let prezzoOver = (prezzoTot - (prezzoTot * (40/100)));

const domButton = document.querySelector('#leggiForm');

domButton.addEventListener('click', 
    function () {
        const nomeDom = document.getElementById('nomeCognome');
        const nomeDelMessaggio = nomeDom.value;
        const numeroCasuale = Math.floor((Math.random() * 6)+1);
        carrozza.innerHTML = numeroCasuale
        const numeroCasualeCp = Math.floor((Math.random() * 99000));
        codiceCp.innerHTML = numeroCasualeCp
        nomeCog.innerHTML = nomeDelMessaggio; 
        price.innerHTML = prezzoTot;
    }
);

const domReset = document.querySelector('#resettaForm');

domReset.addEventListener('click', 
    function() {
        const nomeDom = document.getElementById('nomeCognome');
        nomeDom.value = "";
        const numeDom = document.getElementById('numeroKm')
        numeDom.value = ""
    } 
);




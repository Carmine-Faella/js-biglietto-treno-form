
const fasciaEta = document.getElementById("fasciaEta");

const prezzo = document.getElementById("price");

const nomeCog = document.getElementById("nomeCog");

const numeroDiKm = document.getElementById("numeroKm");

/*

let prezzoBi = 0.21;

let prezzoTot = numeroDiKm * prezzoBi;

let prezzoMinore = (prezzoTot - (prezzoTot * (20/100)));

let prezzoOver = (prezzoTot - (prezzoTot * (40/100)));

*/

const domButton = document.querySelector('#leggiForm');

domButton.addEventListener('click', 
    function () {
        const nomeDom = document.getElementById('nomeCognome');
        const nomeDelMessaggio = nomeDom.value;
        nomeCog.innerHTML = nomeDelMessaggio;  
    }
);

const domReset = document.querySelector('#resettaForm');

domReset.addEventListener('click', 
    function() {
        const nomeDom = document.getElementById('nomeCognome');
        nomeDom.value = "";
    }
);


console.log(prezzoTot)

console.log(numeroDiKm)


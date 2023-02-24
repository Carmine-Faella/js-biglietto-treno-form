 
const nomeCog = document.getElementById("nomeCog");

const prezzo = document.getElementById("price");

const carrozza = document.getElementById("carrozza")

const codiceCp = document.getElementById("codiceCp")

const numeroDiKm = document.getElementById("numeroKm").value;

const fasciaEta = document.getElementById("fasciaEta").value;

const mioBiglietto = document.getElementById("myTicket");

const mioBigliettoTitolo = document.getElementById("myTicketTitle");

const prezzoBi = 0.21;

const prezzoTot = numeroDiKm.value * prezzoBi;

const prezzoMinore = (prezzoTot - (prezzoTot * (20/100)));

const prezzoOver = (prezzoTot - (prezzoTot * (40/100)));

const domButton = document.querySelector('#leggiForm');

domButton.addEventListener('click', 
    function (){
        const nomeDom = document.getElementById('nomeCognome');
        const nomeDelMessaggio = nomeDom.value;
        nomeCog.innerHTML = nomeDelMessaggio; 
        const numeroCasuale = Math.floor((Math.random() * 6)+1);
        carrozza.innerHTML = numeroCasuale;
        const numeroCasualeCp = Math.floor((Math.random() * 99000));
        codiceCp.innerHTML = numeroCasualeCp;
        mioBiglietto.classList.remove("d-none");
        mioBigliettoTitolo.classlist.remove("d-none");
    }
);

const domReset = document.querySelector('#resettaForm');

domReset.addEventListener('click', 
    function() {
        const nomeDom = document.getElementById('nomeCognome');
        nomeDom.value = "";
        mioBiglietto.classList.add("d-none");
        mioBigliettoTitolo.classList.add("d-none");
    } 
);




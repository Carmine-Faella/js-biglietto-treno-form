 
const nameDom = document.getElementById('nomeCognome');

const kmDom = document.getElementById("numeroKm");

const ageDom = document.getElementById("fasciaEta");

const carrozza = document.getElementById("carrozza");

const codiceCp = document.getElementById("codiceCp");

const nameTicket = document.getElementById("nomeCog");

const prezzoTicket = document.getElementById("prezzo");

const mioBiglietto = document.getElementById("myTicket");

const mioBigliettoTitolo = document.getElementById("myTicketTitle");

const offertaTicket = document.getElementById("offerta");

const prezzoBi = 0.21;

const domButton = document.querySelector('#leggiForm');

domButton.addEventListener('click', 
    function (){
        const nomeCognome = nameDom.value;
        const numeroKm = parseInt(kmDom.value);
        const fasciaEta = ageDom.value;

        let prezzo = numeroKm * prezzoBi;
        
        nameTicket.innerHTML = nomeCognome;

        const numeroCasuale = Math.floor((Math.random() * 6)+1);
        carrozza.innerHTML = numeroCasuale;

        const numeroCasualeCp = Math.floor(Math.random() * (100000 - 90000)) + 90000;
        codiceCp.innerHTML = numeroCasualeCp;

        mioBiglietto.classList.remove("d-none");
        mioBigliettoTitolo.classList.remove("d-none");
        
        if(fasciaEta == "minorenne"){
            prezzo = (prezzo - (prezzo / 100 * 20));
            offertaTicket.innerHTML = 'Prezzo Minore';
        } else if( fasciaEta == "over65"){
            prezzo = (prezzo - (prezzo / 100 * 40));
            offertaTicket.innerHTML = 'Prezzo Over 65';
        } else{
            offertaTicket.innerHTML = 'Prezzo Standard';
        };

        prezzoTicket.innerHTML = `${prezzo.toFixed(2)}`;
        
    }
);

const domReset = document.querySelector('#resettaForm');

domReset.addEventListener('click', 
    function() {
        nameDom.value = "";
        kmDom.value = "";
        ageDom.value = "maggiorenne";

        mioBiglietto.classList.add("d-none");
        mioBigliettoTitolo.classList.add("d-none");
    } 
);



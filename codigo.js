console.log('Javascript carregado');

//codigo da pagina airbnb
const requestURL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
const bookings = document.querySelector("#bookings");
const data = [];

async function buscaDados() {
    return await fetch(requestURL)
        .then( async (r) => await r.json())
}

function mostraQuartos(cards) {
    bookings.innerhtml = "";
    cards.map(renderQuartos);
}

function renderQuartos(card) {
    const div = document.createElement("div");
    div.style.width ="18rem";
    div.style.margin = "2rem";
    div.className = 'card';
    div.innerHTML = `
        <img src="${card.photo}" class="card-img-top" alt="card.name"/>
        <div class="card-body">
            <h3 class="card-title"> ${card.name}</h3>
            <p class="card-text">
                Tipo: ${card.property_type}
            </p>
            <p class="card-text">
                Preço: R$ ${card.price},00
            </p>
        </div>
    `;
    bookings.appendChild(div);
}
 
async function main() {
    data =  await buscaDados();
    if(data[0]){
        mostraQuartos(data);
    }
}

main();

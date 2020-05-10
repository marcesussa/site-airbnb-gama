console.log('Javascript carregado');

//codigo da pagina airbnb
var head = document.querySelector('head');
var bookings = document.querySelector('bookings');

var requestURL = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var queroQuartos = request.response;
    mostrarQuartos(queroQuartos);

function mostrarQuartos(jsonObj) {
    var quartos = jsonObj['members'];
        
    for (var i = 0; i < quartos.length; i++) {
        var myCard = document.getElementById('myBookings');
        var myPhoto = document.createElement('img');	
        var myH2 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');
  
        myPhoto.imageContent = quarto[i].photo;
        myPara1.textContent = 'Tipo: ' + quartos[i].tipo;
        myPara2.textContent = 'Nome: ' + quartos[i].nomeLocal;
        myPara3.textContent = 'Preço (R$):' + quartos[i].price;
          
   
        myCard.appendChild(myPhoto);
        myCard.appendChild(myPara1);
        myCard.appendChild(myPara2);
        myCard.appendChild(myPara3);
        myCard.appendChild(myList);
  
        div.appendChild(myBookings);
    }
  }
 }
 
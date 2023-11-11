'use strict';

// array di immagini
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const items = document.querySelector(".items");

//inizio ciclo
for(let i=0; i < images.length; i++){

    //creiamo il div per le slide
const item = document.createElement('div');

//gli assegniamo una classe
item.classList.add('item');

//creiamo l' elemento img
const img = document.createElement('img');

// associamo il percorso file
img.src = `img/${images[i]}`;

//appendiamo l immagine al div contenitore
item.append(img);

//appendiamo le slide nel suo contenitore
items.append(item);
}

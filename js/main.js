'use strict';

// array di immagini
const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

//ci prendiamo dall' html il div items
const items = document.querySelector(".items");

//ci prendiamo dall' html il div prev e next
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

 //posizione di partenza del ciclo
    let currentItem = 0;

//inizio ciclo
for(let i=0; i < images.length; i++){
   

//SLIDE***********************************************
    //creiamo il div per le slide
const item = document.createElement('div');

//gli assegniamo una classe
item.classList.add('item');

//assegniamo la classe active per far vedere l immagine
if(currentItem ===i){
    item.classList.add('active');
}
//creiamo l' elemento img
const img = document.createElement('img');

// associamo il percorso file
img.src = `img/${images[i]}`;

//appendiamo l immagine al div contenitore
item.append(img);

//appendiamo le slide nel suo contenitore
items.append(item);

//SLIDE***************************************************
}
//selezioniamo tutte le slide del contenitore items
const domItem = document.querySelectorAll('.item');

console.log(domItem);


//aggiungiamo eventi on click sulle frecce
prev.addEventListener('click', function(){
    console.log("prev");
    if(currentItem > 0){
        domItem[currentItem].classList.remove('active');

        currentItem--;

        domItem[currentItem].classList.add('active');
    }
})

next.addEventListener('click', function(){
    console.log(currentItem);
    if(currentItem < domItem.length -1){
        domItem[currentItem].classList.remove('active');

        currentItem++;

        domItem[currentItem].classList.add('active');
    }
   
})
// global variable for outfit boxes
var nakedBear = document.querySelector('.main-bear');
var hats = document.querySelector('.hats-selection');
var clothes = document.querySelector('.clothes-selection');
var accessories = document.querySelector('.accessories-selection');
var background = document.querySelector('.background-selection');

// event listener on options selection
hats.addEventListener('click', addHats);
clothes.addEventListener('click', addClothes);
accessories.addEventListener('click', addAccessories);
background.addEventListener('click', addBackground);

// add hats
function addHats(e){
 if(e.target.classList.contains('hat-Options')){
   console.log(1);
 }
}

// add clothes
function addClothes(e){
 if(e.target.classList.contains('clothes-Options')){
   console.log(2);
 }
}

// add accessories
function addAccessories(e){
 if(e.target.classList.contains('accessories-Options')){
   console.log(3);
 }
}

// add background
function addBackground(e){
 if(e.target.classList.contains('background-Options')){
   console.log(4);
 }
}

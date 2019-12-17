var nakedBear = document.querySelector('main-bear');
var hats = document.getElementById('hats-selection');
var clothes = document.getElementById('clothes-selection');
var accessories = document.getElementById('accessories-selection');
var background = document.getElementById('background-selection');
// var bearHats = document.addEventLister('click', addHat())

// event listner on hats selection
hats.addEventListener('click', addHats);
clothes.addEventListener('click', addClothes);
accessories.addEventListener('click', addAccessories);
background.addEventListener('click', addBackground);

function addHats(e){
 if(e.target.classList.contains('favoriteStyled')){
   console.log(1);
 }
}

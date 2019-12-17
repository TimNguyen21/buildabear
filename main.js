var Outfit = require('../buildabear/outfit.js');


window.onload = thisfunctionwehavetomake

// global variable for outfit boxes
var nakedBear = document.querySelector('.main-bear');
var hats = document.querySelector('.hats-selection');
var clothes = document.querySelector('.clothes-selection');
var accessories = document.querySelector('.accessories-selection');
var background = document.querySelector('.background-selection');

// vairable to create unique id for outfit
var uniqueId = function() {
  return 'id-' + Math.random().toString(36).substr(2, 16);
};

// event listener on options selection
hats.addEventListener('click', addHats);
clothes.addEventListener('click', addClothes);
accessories.addEventListener('click', addAccessories);
background.addEventListener('click', addBackground);

// add hats
function addHats(e){
 if(e.target.classList.contains('hat-options-js')){
   if(e.target.classList.contains('top-hat')){
     console.log(1);
  }
 }
}

// add clothes
function addClothes(e){
 if(e.target.classList.contains('clothes-options-js')){
   console.log(2);
 }
}

// add accessories
function addAccessories(e){
 if(e.target.classList.contains('accessories-options-js')){
   console.log(3);
 }
}

// add background
function addBackground(e){
 if(e.target.classList.contains('background-options-js')){
   console.log(4);
 }
}


// Background selector --start--
var mainBearSection = document.querySelector('.main-bear');
var blueBackgroundButton = document.querySelector('.blue-background');
var parkBackgroundButton = document.querySelector('.park-background');
var beachBackgroundButton = document.querySelector('.beach-background');
var spaceBackgroundButton = document.querySelector('.space-background');
var yellowBackgroundButton = document.querySelector('.yellow-background');
var heartBackgroundButton = document.querySelector('.heart-background');

blueBackgroundButton.addEventListener('click', changeBlueBackground);
parkBackgroundButton.addEventListener('click', changeParkBackground);
beachBackgroundButton.addEventListener('click', changeBeachBackground);
spaceBackgroundButton.addEventListener('click', changeSpaceBackground);
yellowBackgroundButton.addEventListener('click', changeYellowBackground);
heartBackgroundButton.addEventListener('click', changeHeartBackground);

function changeBlueBackground() {
  removeBackground();
  mainBearSection.style.backgroundColor = '#00a3af';
}

function changeParkBackground() {
  removeBackground();
  mainBearSection.style.backgroundImage = "url('assets/park.png')";
}

function changeBeachBackground() {
  removeBackground();
  mainBearSection.style.backgroundImage = "url('assets/beach.png')";
}

function changeSpaceBackground() {
  removeBackground();
  mainBearSection.style.backgroundImage = "url('assets/outerspace.png')";
}

function changeYellowBackground() {
  removeBackground();
  mainBearSection.style.backgroundColor = '#dccb18';
}

function changeHeartBackground() {
  removeBackground();
  mainBearSection.style.backgroundImage = "url('assets/hearts.png')";
}

function removeBackground() {
  mainBearSection.style.backgroundImage = 'none';
  mainBearSection.style.backgroundColor = 'none';
}
// Background selector --end--

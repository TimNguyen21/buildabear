
var nakedBear = document.querySelector('.main-bear');
var hats = document.querySelector('.hats-selection');
var clothes = document.querySelector('.clothes-selection');
var accessories = document.querySelector('.accessories-selection');
var background = document.querySelector('.background-selection');
var id = Date.now(id);
var outfit = new Outfit(id, null, [], null);

// event listener on options selection
hats.addEventListener('click', addHats);
clothes.addEventListener('click', addClothes);
accessories.addEventListener('click', addAccessories);
background.addEventListener('click', addBackground);

// add hats
function addHats(e){
  if (e.target.classList.contains('top-hat')) {
    console.log(1);
    outfit.addGarment(0, 'top-hat');
  } else if (e.target.classList.contains('sun-hat')) {
    console.log(2);
    outfit.addGarment(0, 'sun-hat');
  } else if (e.target.classList.contains('bow')) {
    console.log(3);
    outfit.addGarment(0, 'bow');
  } else if (e.target.classList.contains('crown')) {
    console.log(4);
    outfit.addGarment(0, 'crown');
  }
}

// add clothes
function addClothes(e) {
  if (e.target.classList.contains('t-shirt')) {
    console.log(1);
    outfit.addGarment(1, 't-shirt');
  } else if (e.target.classList.contains('dress')) {
    console.log(2);
    outfit.addGarment(1, 'dress');
  } else if (e.target.classList.contains('tuxedo')) {
    console.log(3);
    outfit.addGarment(1, 'tuxedo');
  }
}

// add accessories
function addAccessories(e) {
  if (e.target.classList.contains('necklace')) {
    console.log(1);
    outfit.addGarment(2, 'necklace');
  } else if (e.target.classList.contains('bowtie')) {
    console.log(2);
    outfit.addGarment(2, 'bowtie');
  } else if (e.target.classList.contains('watch')) {
    console.log(3);
    outfit.addGarment(2, 'watch');
  } else if (e.target.classList.contains('monocle')) {
    console.log(4);
    outfit.addGarment(2, 'monocle');
  } else if (e.target.classList.contains('earrings')) {
    console.log(4);
    outfit.addGarment(2, 'earrings');
  }
}

// // add background
// function addBackground(e) {
//   if (e.target.classList.contains('blue-background')) {
//     console.log(1);
//     changeBlueBackground();
//   } else if (e.target.classList.contains('park-background')) {
//     console.log(2);
//     changeParkBackground();
//   } else if (e.target.classList.contains('beach-background')) {
//     console.log(3);
//     changeBeachBackground();
//   } else if (e.target.classList.contains('space-background')) {
//     console.log(4);
//     changeSpaceBackground();
//   } else if (e.target.classList.contains('yellow-background')) {
//     console.log(4);
//     changeYellowBackground();
//   } else if (e.target.classList.contains('heart-background')) {
//     console.log(4);
//     changeHeartBackground();
//   }
// }

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

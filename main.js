var mainBearSection = document.querySelector('.main-bear');
var hats = document.querySelector('.hats-selection');
var clothes = document.querySelector('.clothes-selection');
var accessories = document.querySelector('.accessories-selection');
var background = document.querySelector('.background-selection');
var id = Date.now(id);
var outfit = new Outfit(id, null, [], null);

// event listener on options selection
hats.addEventListener('click', addHats);

hats.addEventListener('click', changeButtonToActive);
// hats.addEventListener('click', function() {
//   changeButtonToActive();
//   console.log('is the change button state working')
//   addHats();
// });

clothes.addEventListener('click', addClothes);
accessories.addEventListener('click', addAccessories);
background.addEventListener('click', addBackground);

function changeButtonToActive(event) {
  if (event.target.classList.contains('hat-options-js')) {
    event.target.closest('.hat-options-js').classList.add('pink-button-active');
    console.log(1);
  }
}

// add hats
function addHats(e){
  if (e.target.classList.contains('top-hat')) {
    outfit.addGarment(0, 'top-hat');
  } else if (e.target.classList.contains('sun-hat')) {
    outfit.addGarment(0, 'sun-hat');
  } else if (e.target.classList.contains('bow')) {
    outfit.addGarment(0, 'bow');
  } else if (e.target.classList.contains('crown')) {
    outfit.addGarment(0, 'crown');
  }
}


// add clothes
function addClothes(e) {
  if (e.target.classList.contains('t-shirt')) {
    outfit.addGarment(1, 't-shirt');
  } else if (e.target.classList.contains('dress')) {
    outfit.addGarment(1, 'dress');
  } else if (e.target.classList.contains('tuxedo')) {
    outfit.addGarment(1, 'tuxedo');
  }
}

// add accessories
function addAccessories(e) {
  if (e.target.classList.contains('necklace')) {
    outfit.addGarment(2, 'necklace');
  } else if (e.target.classList.contains('bowtie')) {
    outfit.addGarment(2, 'bowtie');
  } else if (e.target.classList.contains('watch')) {
    outfit.addGarment(2, 'watch');
  } else if (e.target.classList.contains('monocle')) {
    outfit.addGarment(2, 'monocle');
  } else if (e.target.classList.contains('earrings')) {
    outfit.addGarment(2, 'earrings');
    console.log('Are accessories being added?');
  }
}

// add background
function addBackground(e) {
  if (e.target.classList.contains('background-options-js')) {
    if (e.target.classList.contains('blue-background')) {
      outfit.background = 'blue';
    } else if (e.target.classList.contains('park-background')) {
      outfit.background = 'park';
    } else if (e.target.classList.contains('beach-background')) {
      outfit.background = 'beach';
    } else if (e.target.classList.contains('space-background')) {
      outfit.background = 'space';
    } else if (e.target.classList.contains('yellow-background')) {
      outfit.background = 'yellow';
    } else if (e.target.classList.contains('heart-background')) {
      outfit.background = 'heart';
    }
    changeBackground();
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
function removeBackground() {
  mainBearSection.style.backgroundImage = 'none';
  mainBearSection.style.backgroundColor = 'none';
}

function changeBackground() {
  removeBackground();
  if (outfit.background == 'blue') {
    mainBearSection.style.backgroundColor = '#00a3af';
  } else if (outfit.background == 'park') {
    mainBearSection.style.backgroundImage = "url('assets/park.png')";
  } else if (outfit.background == 'beach') {
    mainBearSection.style.backgroundImage = "url('assets/beach.png')";
  } else if (outfit.background == 'space') {
    mainBearSection.style.backgroundImage = "url('assets/outerspace.png')";
  } else if (outfit.background == 'yellow') {
    mainBearSection.style.backgroundColor = '#dccb18';
  } else if (outfit.background == 'heart') {
    mainBearSection.style.backgroundImage = "url('assets/hearts.png')";
  }
}
// Background selector --end--

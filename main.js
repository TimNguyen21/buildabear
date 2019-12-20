var mainBearSection = document.querySelector('.main-bear');
var hats = document.querySelector('.hats-selection');
var hatsButtons = document.querySelectorAll('.hats-btn');
var clothes = document.querySelector('.clothes-selection');
var accessories = document.querySelector('.accessories-selection');
var background = document.querySelector('.background-selection');
var id = Date.now(id);
var outfit = new Outfit(id, null, [], null);

hats.addEventListener('click', hatSelectorEventHandler);
clothes.addEventListener('click', addClothes);
accessories.addEventListener('click', addAccessories);
background.addEventListener('click', addBackground);

function hatSelectorEventHandler(event) {
  if (event.target.classList.contains('pink-button-active')) {
    removeAllHats();
    removedButtonActive();
  } else {
    changeButtonToActive(event);
    addHats(event);
  }
}

function changeButtonToActive(event) {
  removedButtonActive();
  if (event.target.classList.contains('hats-btn')) {
    event.target.classList.add('pink-button-active');
  }
}

function removedButtonActive(event) {
  for (var i = 0; i < hatsButtons.length; i++) {
    hatsButtons[i].classList.remove('pink-button-active');
  }
}

// hats selction -below-
var topHatImg = document.querySelector('.top-hat-img');
var sunHatImg = document.querySelector('.sun-hat-img');
var bowHatImg = document.querySelector('.bow-hat-img');
var crownHatImg = document.querySelector('.crown-hat-img');

function removeAllHats() {
  topHatImg.classList.add('hidden');
  sunHatImg.classList.add('hidden');
  bowHatImg.classList.add('hidden');
  crownHatImg.classList.add('hidden');
}

// add hats

function addHats(e){
  if (e.target.classList.contains('top-hat')) {
    removeAllHats();
    outfit.addGarment(0, 'top-hat');
    topHatImg.classList.remove('hidden');
  } else if (e.target.classList.contains('sun-hat')) {
    removeAllHats();
    outfit.addGarment(0, 'sun-hat');
    sunHatImg.classList.remove('hidden');
  } else if (e.target.classList.contains('bow')) {
    removeAllHats();
    outfit.addGarment(0, 'bow');
    bowHatImg.classList.remove('hidden');
  } else if (e.target.classList.contains('crown')) {
    removeAllHats();
    outfit.addGarment(0, 'crown');
    crownHatImg.classList.remove('hidden');
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

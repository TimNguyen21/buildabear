
var nakedBear = document.querySelector('.main-bear');
var hats = document.querySelector('.hats-selection');
var clothes = document.querySelector('.clothes-selection');
var accessories = document.querySelector('.accessories-selection');
var background = document.querySelector('.background-selection');
var id = Date.now(id);
var outfit = new Outfit(id, null, [], null);

// event listener on options selection
hats.addEventListener('click', addHats);

// hats.addEventListener('click', changeButtonToActive);
// hats.addEventListener('click', function() {
//   changeButtonToActive();
//   console.log('is the change button state working')
//   addHats();
// });

clothes.addEventListener('click', addClothes);
accessories.addEventListener('click', addAccessories);
background.addEventListener('click', addBackground);

// add hats

function addHats(e) {
  // var lastClicked =
  // if (e.target != e.currentTarget) {
  if (e.target.classList.contains('top-hat')) {
    outfit.addGarment('top-hat');
  } else if (e.target.classList.contains('sun-hat')) {
    outfit.addGarment('sun-hat');
  } else if (e.target.classList.contains('bow')) {
    outfit.addGarment('bow');
  } else if (e.target.classList.contains('crown')) {
    outfit.addGarment('crown');
  }
}

function changeButtonToActive(event) {
  if (event.target.classList.contains('.hat-options-js')) {
    console.log('turning pink button to active');
    event.target.closest('.hat-options-js').classList.add('.pink-button-active');
  }
}

// add clothes
function addClothes(e) {
  if (e.target.classList.contains('t-shirt')) {
    console.log('Are the clothes being added to the array?');
  }
}

// add accessories
function addAccessories(e) {
  if (e.target.classList.contains('necklace')) {
    console.log('Are accessories being added?');
  }
}

// add background
function addBackground(e) {
  if (e.target.classList.contains('background-options-js')) {
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

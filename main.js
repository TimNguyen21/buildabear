var mainBearSection = document.querySelector('.main-bear');
var hats = document.querySelector('.hats-selection');
var hatsButtons = document.querySelectorAll('.hats-btn');
var accessoriesButtons = document.querySelectorAll('.accessories-btn');
var clothesButtons = document.querySelectorAll('.clothes-btn');
var clothes = document.querySelector('.clothes-selection');
var accessories = document.querySelector('.accessories-selection');
var background = document.querySelector('.background-selection');
var id = Date.now(id);
var outfit = new Outfit(id, null, [], null);

hats.addEventListener('click', hatSelectorEventHandler);
clothes.addEventListener('click', clothesSelectorEventHandler);
accessories.addEventListener('click', accessoriesSelectorEventHandler);
background.addEventListener('click', addBackground);

// Hats Event Listener -begin-
function hatSelectorEventHandler(event) {
  if (event.target.classList.contains('pink-button-active')) {
    removeAllHats();
    removedHatButtonActive();
  } else {
    changeHatButtonToActive(event);
    addHats(event);
  }
}

function changeHatButtonToActive(event) {
  removedHatButtonActive();
  if (event.target.classList.contains('hats-btn')) {
    event.target.classList.add('pink-button-active');
  }
}

function removedHatButtonActive(event) {
  for (var i = 0; i < hatsButtons.length; i++) {
    hatsButtons[i].classList.remove('pink-button-active');
  }
}

// Hats Event Listener -end-

// Clothes Event Listener -begin-
function clothesSelectorEventHandler(event) {
  if (event.target.classList.contains('blue-button-active')) {
    removeAllClothes();
    removedClothesButtonActive();
  } else {
    changeClothesButtonToActive(event);
    addClothes(event);
  }
}

function changeClothesButtonToActive(event) {
  removedClothesButtonActive();
  if (event.target.classList.contains('clothes-btn')) {
    event.target.classList.add('blue-button-active');
  }
}

function removedClothesButtonActive(event) {
  for (var i = 0; i < clothesButtons.length; i++) {
    clothesButtons[i].classList.remove('blue-button-active');
  }
}
// Clothes Event Listener -end-

// Accessories Event Listener -begin-
function accessoriesSelectorEventHandler(event) {
  if (event.target.classList.contains('pink-button-active')) {
    removeAllAccessories();
    removedAccessoriesButtonActive();
  } else {
    changeAccessoriesButtonToActive(event);
    addAccessories(event);
  }
}

function changeAccessoriesButtonToActive(event) {
  removedAccessoriesButtonActive();
  if (event.target.classList.contains('accessories-btn')) {
    event.target.classList.add('pink-button-active');
  }
}

function removedAccessoriesButtonActive(event) {
  for (var i = 0; i < accessoriesButtons.length; i++) {
    accessoriesButtons[i].classList.remove('pink-button-active');
  }
}

// Accessories Event Listener -end-


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
function addHats(e) {
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

// clothes selection -below-
var dressImg = document.querySelector('.dress-img');
var vestImg = document.querySelector('.vest-img');

function removeAllClothes() {
  dressImg.classList.add('hidden');
  vestImg.classList.add('hidden');
}

// add clothes
function addClothes(e) {
  if (e.target.classList.contains('vest')) {
    outfit.addGarment(1, 'vest');
    removeAllClothes();
    dressImg.classList.remove('hidden');
  } else if (e.target.classList.contains('dress')) {
    outfit.addGarment(1, 'dress');
    removeAllClothes();
    vestImg.classList.remove('hidden');
  }
}

// accessories selection -below-
var necklaceImg = document.querySelector('.necklace-img');
var bowtieImg = document.querySelector('.bowtie-img');
var watchImg = document.querySelector('.watch-img');
var sunglassesImg = document.querySelector('.sunglasses-img');

function removeAllAccessories() {
  necklaceImg.classList.add('hidden');
  bowtieImg.classList.add('hidden');
  watchImg.classList.add('hidden');
  sunglassesImg.classList.add('hidden');

}

// add accessories
function addAccessories(e) {
  if (e.target.classList.contains('necklace')) {
    removeAllAccessories();
    outfit.addGarment(2, 'necklace');
    necklaceImg.classList.remove('hidden');
  } else if (e.target.classList.contains('bowtie')) {
    removeAllAccessories();
    outfit.addGarment(2, 'bowtie');
    bowtieImg.classList.remove('hidden');
  } else if (e.target.classList.contains('watch')) {
    removeAllAccessories();
    outfit.addGarment(2, 'watch');
    watchImg.classList.remove('hidden');
  } else if (e.target.classList.contains('sunglasses')) {
    removeAllAccessories();
    outfit.addGarment(2, 'sunglasses');
    sunglassesImg.classList.remove('hidden');
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

// save oufit button function --begin--
var saveNewBearInput = document.querySelector('.name-bear-input');
var savedOutfitsSection = document.querySelector('.column3');
var saveNewBearButton = document.querySelector('.name-save-button');

saveNewBearButton.disabled = true;

saveNewBearInput.addEventListener('keyup', enableSaveButton);
saveNewBearButton.addEventListener('click', createNewBearCard);
savedOutfitsSection.addEventListener('click', closeOutCard);

function enableSaveButton() {
  if (saveNewBearInput.value == '') {
    saveNewBearButton.disabled = true;
  } else {
    saveNewBearButton.disabled = false;
  }
}

var randomColorBackground = ['#ee836f', '#dccb18', '#00a3af'];
function chooseRandomColor() {
  var i = Math.floor(Math.random() * 3);
  return randomColorBackground[i];
}

function createNewBearCard() {
  savedOutfitsSection.innerHTML += `<article class="saved-outfit-box" style="background-color:${chooseRandomColor()}"><span>${saveNewBearInput.value}</span><div class="close-x-icon">X</div></article>`
  saveNewBearInput.value = '';
  saveNewBearButton.disabled = true;
  nakedBear();
}
//close-saved-bear-card-when-x-is-pressed

function closeOutCard(event) {
  if (event.target.classList.contains('close-x-icon')) {
    // console.log('hit the delete btn');
    event.target.closest('.saved-outfit-box').remove();
  }
}

// save / delete oufit button function --end--
// save oufit button function --end--

// default naked bear --begin--
function nakedBear() {
  removeBackground();
  removeAllClothes();
  removeAllHats();
  removeAllAccessories();
  defaultGarments();
}
var backgroundButtons = document.querySelectorAll('.background-options-js');

function defaultGarments() {
  for (var i = 0; i < hatsButtons.length; i++) {
    hatsButtons[i].classList.remove('pink-button-active');
  }
  for (var i = 0; i < accessoriesButtons.length; i++) {
    accessoriesButtons[i].classList.remove('pink-button-active');
  }
  for (var i = 0; i < backgroundButtons.length; i++) {
    backgroundButtons[i].classList.remove('blue-button-active');
  }
}
// default naked bear --end--

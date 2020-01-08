var id = Date.now(id);
var outfit = new Outfit(id, null, [], null);
var currentOutfit = '';

//Global Section Variables:
var mainBearSection = document.querySelector('.main-bear');
var saveNewBearInput = document.querySelector('.name-bear-input');
var savedOutfitsSection = document.querySelector('.column3');
var background = document.querySelector('.background-selection');
var hats = document.querySelector('.hats-selection');
var clothes = document.querySelector('.clothes-selection');
var accessories = document.querySelector('.accessories-selection');

//Buttons variables:
var hatsButtons = document.querySelectorAll('.hats-btn');
var accessoriesButtons = document.querySelectorAll('.accessories-btn');
var clothesButtons = document.querySelectorAll('.clothes-btn');
var backgroundButtons = document.querySelectorAll('.background-button');
var saveNewBearButton = document.querySelector('.name-save-button');
var allButtonsOnPage = document.querySelectorAll('button');
saveNewBearButton.disabled = true;

//Images variables:
var topHatImg = document.querySelector('.top-hat-img');
var sunHatImg = document.querySelector('.sun-hat-img');
var bowHatImg = document.querySelector('.bow-hat-img');
var crownHatImg = document.querySelector('.crown-hat-img');
var dressImg = document.querySelector('.dress-img');
var vestImg = document.querySelector('.vest-img');
var necklaceImg = document.querySelector('.necklace-img');
var bowtieImg = document.querySelector('.bowtie-img');
var watchImg = document.querySelector('.watch-img');
var sunglassesImg = document.querySelector('.sunglasses-img');

//Extension Variables:
var randomColorBackground = ['#ee836f', '#dccb18', '#00a3af'];

//Arrays Variables:
var hatsArray = ['top-hat', 'sun-hat', 'bow', 'crown'];
var hatsImgArray = [topHatImg, sunHatImg, bowHatImg, crownHatImg];

//Event Listeners:
window.addEventListener('load', restoreOutfitCards);
hats.addEventListener('click', hatSelectorEventHandler);
clothes.addEventListener('click', clothesSelectorEventHandler);
accessories.addEventListener('click', accessoriesSelectorEventHandler);
background.addEventListener('click', backgroundSelectorEventHandler);
saveNewBearInput.addEventListener('keyup', enableSaveButton);
saveNewBearButton.addEventListener('click', createNewBearCard);
savedOutfitsSection.addEventListener('click', closeOutCard);
savedOutfitsSection.addEventListener('click', editBearCard);

//HATS -START-
function hatSelectorEventHandler(event) {
  if (event.target.classList.contains('pink-button-active')) {
    removeAllHats();
    removedHatButtonActive();
  } else if (event.target.classList.contains('hats-btn')) {
    changeHatButtonToActive(event);
    addHats(event);
  }
}

function addHats(event) {
  for (var i = 0; i < hatsArray.length; i++) {
    if (event.target.classList.contains(hatsArray[i])) {
      removeAllHats();
      outfit.addGarment(0, hatsArray[i]);
      hatsImgArray[i].classList.remove('hidden');
    }
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

function removeAllHats() {
  topHatImg.classList.add('hidden');
  sunHatImg.classList.add('hidden');
  bowHatImg.classList.add('hidden');
  crownHatImg.classList.add('hidden');
}

// HATS -END-

// CLOTHES -START-
function clothesSelectorEventHandler(event) {
  if (event.target.classList.contains('blue-button-active')) {
    removeAllClothes();
    removedClothesButtonActive();
  } else if (event.target.classList.contains('clothes-btn')) {
    changeClothesButtonToActive(event);
    addClothes(event);
  }
}

function addClothes(e) {
  if (e.target.classList.contains('vest')) {
    outfit.addGarment(1, 'vest');
    removeAllClothes();
    vestImg.classList.remove('hidden');
  } else if (e.target.classList.contains('dress')) {
    outfit.addGarment(1, 'dress');
    removeAllClothes();
    dressImg.classList.remove('hidden');
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

function removeAllClothes() {
  dressImg.classList.add('hidden');
  vestImg.classList.add('hidden');
}

// CLOTHES -END-

// ACCESSORIES -START-
function accessoriesSelectorEventHandler(event) {
  if (event.target.classList.contains('pink-button-active')) {
    removeAllAccessories();
    removedAccessoriesButtonActive();
  } else if (event.target.classList.contains('accessories-btn')) {
    changeAccessoriesButtonToActive(event);
    addAccessories(event);
  }
}

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

function removeAllAccessories() {
  necklaceImg.classList.add('hidden');
  bowtieImg.classList.add('hidden');
  watchImg.classList.add('hidden');
  sunglassesImg.classList.add('hidden');
}

// ACCESSORIES -END-

// BACKGROUND -START-
function backgroundSelectorEventHandler(e) {
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

  changeBackground(outfit.background);
  changeBackgroundToggle(event);
}

function changeBackground(background) {
  mainBearSection.style.backgroundImage = 'none';
  if (background == 'blue') {
    mainBearSection.style.backgroundImage = "url('assets/blue.png')";
  } else if (background == 'park') {
    mainBearSection.style.backgroundImage = "url('assets/park.png')";
  } else if (background == 'beach') {
    mainBearSection.style.backgroundImage = "url('assets/beach.png')";
  } else if (background == 'space') {
    mainBearSection.style.backgroundImage = "url('assets/outerspace.png')";
  } else if (background == 'yellow') {
    mainBearSection.style.backgroundImage = "url('assets/yellow.png')";
  } else if (background == 'heart') {
    mainBearSection.style.backgroundImage = "url('assets/hearts.png')";
  }
}

function changeBackgroundToggle(event) {
  if (event.target.classList.contains('blue-button-active')) {
    removedBackgroundButtonActive();
    mainBearSection.style.backgroundImage = 'none';
  } else if (event.target.classList.contains('background-button')) {
    removedBackgroundButtonActive();
    event.target.classList.add('blue-button-active');
  }
}

function removedBackgroundButtonActive(event) {
  for (var i = 0; i < backgroundButtons.length; i++) {
    backgroundButtons[i].classList.remove('blue-button-active');
  }
}

// BACKGROUND -END-

// save oufit button function --begin--
function enableSaveButton() {
  if (saveNewBearInput.value == '') {
    saveNewBearButton.disabled = true;
  } else {
    saveNewBearButton.disabled = false;
  }
}

function chooseRandomColor() {
  var i = Math.floor(Math.random() * 3);
  return randomColorBackground[i];
}

function createNewBearCard() {
  outfit.title = saveNewBearInput.value;
  if (outfit.id == currentOutfit.id) {
    localStorage.setItem(outfit.id, JSON.stringify(outfit));
  } else {
    savedOutfitsSection.innerHTML += `<article data-id="${outfit.id}"class="saved-outfit-box" style="background-color:${chooseRandomColor()}"><span data-id="${outfit.id}">${saveNewBearInput.value}</span><div class="close-x-icon">X</div></article>`
  }
  saveNewBearInput.value = '';
  saveNewBearButton.disabled = true;
  nakedBear();
}

function saveBearOutfit() {
  var bearCardID = outfit.id;
  localStorage.setItem(bearCardID, JSON.stringify(outfit));
}

function restoreOutfitCards() {
  for (var i = 0; i < localStorage.length; i++) {
    var currentOutfit = JSON.parse(localStorage.getItem(localStorage.key(i)));
    var title = currentOutfit.title;
    var outfitCard = `<article data-id="${currentOutfit.id}" class="saved-outfit-box" style="background-color:${chooseRandomColor()}"><span data-id="${currentOutfit.id}">${title}</span><div class="close-x-icon">X</div></article>`;
    savedOutfitsSection.insertAdjacentHTML('beforeend', outfitCard);
  }
}

//close-saved-bear-card-when-x-is-pressed
function closeOutCard(event) {
  if (event.target.classList.contains('close-x-icon'))
    for (var i = 0; i < localStorage.length; i++) {
    var currentOutfit = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (event.target.parentElement.dataset.id == currentOutfit.id) {
      localStorage.removeItem(currentOutfit.id);
    }

    event.target.closest('.saved-outfit-box').remove();
  }
}

// save / delete oufit button function --end--
// save oufit button function --end--

function editBearCard() {
  if (event.target.classList.contains('saved-outfit-box')) {
    saveNewBearButton.disabled = false;
    currentOutfit = JSON.parse(localStorage.getItem(event.target.dataset.id));
    saveNewBearInput.value = currentOutfit.title;
    addStuff(currentOutfit.garments[0], currentOutfit.garments[1],
    currentOutfit.garments[2], currentOutfit.background);
    outfit = new Outfit(currentOutfit.id, currentOutfit.title, currentOutfit.garments, currentOutfit.background);
  }
}

function resetAllClothes() {
  removeAllHats();
  removeAllClothes();
  removeAllAccessories();
  mainBearSection.style.backgroundImage = 'none';
}

function addStuff(hat, clothes, accessory, background) {
  resetAllClothes();
  reloadHats(hat);
  reloadClothes(clothes);
  reloadAccessory(accessory);
  changeBackground(background);
}

function reloadHats(hat) {
  for (var i = 0; i < hatsArray.length; i++) {
    if (hat == hatsArray[i]) {
      hatsImgArray[i].classList.remove('hidden');
    }
  }
}

function reloadClothes(clothes) {
  if (clothes == 'vest') {
    removeAllClothes();
    vestImg.classList.remove('hidden');
  } else if (clothes == 'dress') {
    removeAllClothes();
    dressImg.classList.remove('hidden');
  }
}

function reloadAccessory(accessory) {
  if (accessory == 'necklace') {
    removeAllAccessories();
    necklaceImg.classList.remove('hidden');
  } else if (accessory == 'bowtie') {
    removeAllAccessories();
    bowtieImg.classList.remove('hidden');
  } else if (accessory == 'watch') {
    removeAllAccessories();
    watchImg.classList.remove('hidden');
  } else if (accessory == 'sunglasses') {
    removeAllAccessories();
    sunglassesImg.classList.remove('hidden');
  }
}

// default naked bear --begin--
function nakedBear() {
  saveBearOutfit();
  removeAllClothes();
  removeAllHats();
  removeAllAccessories();
  defaultButtons();
  defaultOutfit();
  mainBearSection.style.backgroundImage = 'none';
}

function defaultButtons() {
  for (var i = 0; i < allButtonsOnPage.length; i++) {
    allButtonsOnPage[i].classList.remove('pink-button-active');
    allButtonsOnPage[i].classList.remove('blue-button-active');
  }
}

// default naked bear --end--

function defaultOutfit() {
  id = Date.now();
  outfit.id = id;
  outfit.name = null;
  outfit.garments = [];
  outfit.background = null;
}

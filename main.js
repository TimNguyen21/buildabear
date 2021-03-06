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
var clothesArray = ['vest', 'dress'];
var clothesImgArray = [vestImg, dressImg];
var accessoriesArray = ['necklace', 'bowtie', 'watch', 'sunglasses'];
var accessoriesImgArray = [necklaceImg, bowtieImg, watchImg, sunglassesImg];
var backgroundArray = ['blue', 'park', 'beach', 'space', 'yellow', 'heart'];
var backgroundImgArray = ["url('assets/blue.png')", "url('assets/park.png')",
"url('assets/beach.png')", "url('assets/outerspace.png')", "url('assets/yellow.png')",
"url('assets/hearts.png')"];

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
  for (var i = 0; i < clothesArray.length; i++) {
    if (e.target.classList.contains(clothesArray[i])) {
      removeAllClothes();
      outfit.addGarment(1, clothesArray[i]);
      clothesImgArray[i].classList.remove('hidden');
    }
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
  for (var i = 0; i < accessoriesArray.length; i++) {
    if (e.target.classList.contains(accessoriesArray[i])) {
      removeAllAccessories();
      outfit.addGarment(2, accessoriesArray[i]);
      accessoriesImgArray[i].classList.remove('hidden');
    }
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

// BACKGROUND -START-
function backgroundSelectorEventHandler(e) {
  for (var i = 0; i < backgroundArray.length; i++) {
    if (event.target.classList.contains(backgroundArray[i])) {
      outfit.background = backgroundArray[i];
    }
  }

  changeBackground(outfit.background);
  changeBackgroundToggle(event);
}

function changeBackground(background) {
  for (var i = 0; i < backgroundArray.length; i++) {
    if (background == backgroundArray[i]) {
      mainBearSection.style.backgroundImage = 'none';
      mainBearSection.style.backgroundImage = backgroundImgArray[i];
    }
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

//Remove card
function closeOutCard(event) {
  if (event.target.classList.contains('close-x-icon'))
    for (var i = 0; i < localStorage.length; i++) {
    var currentOutfit = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (event.target.parentElement.dataset.id == currentOutfit.id) {
      localStorage.removeItem(currentOutfit.id);
    }

    event.target.closest('.saved-outfit-box').remove();
    saveNewBearInput.value = '';
    resetAllClothes();
    defaultOutfit();
    saveNewBearButton.disabled = true;
  }
}

//RELOAD Bear from LocalStorage
function editBearCard() {
  if (event.target.classList.contains('saved-outfit-box')) {
    saveNewBearButton.disabled = false;
    currentOutfit = JSON.parse(localStorage.getItem(event.target.dataset.id));
    saveNewBearInput.value = currentOutfit.title;
    addStuff(currentOutfit.garments[0], currentOutfit.garments[1], currentOutfit.garments[2], currentOutfit.background);
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
  for (var i = 0; i < clothesArray.length; i++) {
    if (clothes == clothesArray[i]) {
      removeAllClothes();
      clothesImgArray[i].classList.remove('hidden');
    }
  }
}

function reloadAccessory(accessory) {
  for (var i = 0; i < accessoriesArray.length; i++) {
    if (accessory == accessoriesArray[i]) {
      removeAllAccessories();
      accessoriesImgArray[i].classList.remove('hidden');
    }
  }
}

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

function defaultOutfit() {
  id = Date.now();
  outfit.id = id;
  outfit.name = null;
  outfit.garments = [];
  outfit.background = null;
}

function restoreOutfitCards() {
  for (var i = 0; i < localStorage.length; i++) {
    var currentOutfit = JSON.parse(localStorage.getItem(localStorage.key(i)));
    var title = currentOutfit.title;
    var outfitCard = `<article data-id="${currentOutfit.id}" class="saved-outfit-box" style="background-color:${chooseRandomColor()}"><span data-id="${currentOutfit.id}">${title}</span><div class="close-x-icon">X</div></article>`;
    savedOutfitsSection.insertAdjacentHTML('beforeend', outfitCard);
  }
}

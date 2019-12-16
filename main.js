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
  mainBearSection.style.backgroundImage = 'none';
  mainBearSection.style.backgroundColor = 'none';
  mainBearSection.style.backgroundColor = 'blue';
}

function changeParkBackground() {
  mainBearSection.style.backgroundImage = 'none';
  mainBearSection.style.backgroundColor = 'none';
  mainBearSection.style.backgroundImage = "url('assets/park.png')";
}

function changeBeachBackground() {
  mainBearSection.style.backgroundImage = 'none';
  mainBearSection.style.backgroundColor = 'none';
  mainBearSection.style.backgroundImage = "url('assets/beach.png')";
}

function changeSpaceBackground() {
  mainBearSection.style.backgroundImage = 'none';
  mainBearSection.style.backgroundColor = 'none';
  mainBearSection.style.backgroundImage = "url('assets/outerspace.png')";
}

function changeYellowBackground() {
  mainBearSection.style.backgroundImage = 'none';
  mainBearSection.style.backgroundColor = 'none';
  mainBearSection.style.backgroundColor = 'yellow';
}

function changeHeartBackground() {
  mainBearSection.style.backgroundImage = 'none';
  mainBearSection.style.backgroundColor = 'none';
  mainBearSection.style.backgroundImage = "url('assets/hearts.png')";
}
// Background selector --end--

// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// Personalized welcome message code
// per vedere dove è stata messa la stringa inserita basta andare sul lembo Application dopo F12

var myButton  = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Inserisci il tuo nome.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('Nome inserito', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
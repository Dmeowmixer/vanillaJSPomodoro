'use strict';
document.getElementById('startButton').addEventListener("click", appendText);
document.getElementById('stopButton').addEventListener("click", removeText);


function appendText(){
  let targetElement = document.getElementsByTagName('div')[0];
  targetElement.setAttribute('id', 'theFirstDiv');
  let newElement = document.createElement('p');
  targetElement.appendChild(newElement);
  document.getElementsByTagName('div')[0].innerHTML = 'Hello World ' + new Date();
}

function removeText(){
  document.getElementById('theFirstDiv').remove();
}

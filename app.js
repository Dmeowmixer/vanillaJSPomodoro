'use strict';
document.getElementById('startButton').addEventListener("click", appendText)

function appendText(){
  let timerText = document.createTextNode(new Date());
  let divTarget = document.getElementById('testDiv');
  divTarget.appendChild(timerText);
}
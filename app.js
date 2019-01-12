'use strict';

window.onload = function(){
  beginTimer();
}

var timerDiv = document.getElementById('timer');
var dateText = document.createElement('p');
var timerText = document.getElementById('timerText');
var interval;
var workTime = 5;
var shortBreakTime = 5;
var longBreakTime = 30;

let workElement = document.createElement('p');

const buttonElements = document.querySelectorAll('#workTimer, #shortBreakTimer, #longBreakTimer');
const elementsArray = [...buttonElements];

function beginCountdown(element){
  if(element.innerHTML > 0){  
    interval = setInterval(function() {
      if(element.innerHTML == 0){
        clearInterval(interval);
        alert('Countdown ended');
      }else{
        element.innerHTML--;
      }
    },1000);
  }
}

function beginTimer(){
  dateText.innerHTML = "The current time is " + new Date();
  timerDiv.appendChild(dateText);
  setTimeout(beginTimer, 1000);
}

elementsArray.forEach(x => {
  x.addEventListener('click', function(ele){
    if(ele.target.getAttribute('ID') == 'workTimer'){
      clearInterval(interval);
      timerText.innerHTML = workTime;
      beginCountdown(timerText);
    }else if(ele.target.getAttribute('ID') == 'shortBreakTimer'){
      clearInterval(interval);
      timerText.innerHTML = shortBreakTime;
      beginCountdown(timerText);
    }else if(ele.target.getAttribute('ID') == 'longBreakTimer'){
      clearInterval(interval);
      timerText.innerHTML = longBreakTime;
      beginCountdown(timerText);
    }
  })
});

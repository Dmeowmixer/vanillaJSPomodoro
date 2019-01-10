'use strict';
window.onload = function(){
  beginTimer();
}
var timerDiv = document.getElementById('timer');
var dateText = document.createElement('p');
var workTime = 5;
var shortBreakTime = 5;
var longBreakTime = 30;

let workElement = document.createElement('p');

const buttonElements = document.querySelectorAll('#workTimer, #shortBreakTimer, #longBreakTimer');
const elementsArray = [...buttonElements];


elementsArray.forEach(x => {
  x.addEventListener('click', function(ele){
    if(ele.target.getAttribute('ID') == 'workTimer'){
      //create a new child element within timerDiv
      //push new child element after dateText into timerDiv
      workElement.innerHTML = workTime;
      timerDiv.appendChild(workElement);
      beginCountdown(workElement);
    }else if(ele.target.getAttribute('ID') == 'shortBreakTimer'){
      workElement.innerHTML = shortBreakTime;
      timerDiv.appendChild(workElement);
      beginCountdown(workElement);
    }else if(ele.target.getAttribute('ID') == 'longBreakTimer'){
      workElement.innerHTML = longBreakTime;
      timerDiv.appendChild(workElement);
      beginCountdown(workElement);
    }
  })
});

// document.getElementById('workTimer').addEventListener('click', startTimer);
// document.getElementById('shortBreakTimer').addEventListener('click', startTimer);
// document.getElementById('longBreakTimer').addEventListener('click', startTimer);

function beginCountdown(element){
  if(element.innerHTML > 0){
    var x = setInterval(function() {
      if(element.innerHTML == 0){
        clearInterval(x);
        alert('Countdown ended');
      }else{
        element.innerHTML--;
      }
    },1000);
  }
}




// document.getElementById('startButton').addEventListener('click', beginTimer);


function beginTimer(){
  dateText.innerHTML = "The current time is " + new Date();
  timerDiv.appendChild(dateText);

  setTimeout(beginTimer, 1000);
}




// document.getElementById('startButton').addEventListener("click", appendText);
// document.getElementById('stopButton').addEventListener("click", removeText);


// function appendText(){
//   let targetElement = document.getElementsByTagName('div')[0];
//   targetElement.setAttribute('id', 'theFirstDiv');
//   let newElement = document.createElement('p');
//   targetElement.appendChild(newElement);
//   document.getElementsByTagName('div')[0].innerHTML = 'Hello World ' + new Date();
// }

// function removeText(){
//   document.getElementById('theFirstDiv').remove();
// }

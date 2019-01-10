'use strict';
window.onload = function(){
  beginTimer();
}
var timerDiv = document.getElementById('timer');
var dateText = document.  createElement('p');

const buttonElements = document.querySelectorAll('#workTimer, #shortBreakTimer, #longBreakTimer');
const elementsArray = [...buttonElements];

elementsArray.forEach(x => {
  x.addEventListener('click', function(ele){
    if(ele.target.getAttribute('ID') == 'workTimer'){
      console.log('selected workTimer');
    }else if(ele.target.getAttribute('ID') == 'shortBreakTimer'){
      console.log('selected shortBreakTimer');
    }else if(ele.target.getAttribute('ID') == 'longBreakTimer'){
      console.log('selected longBreakTimer');
    }
  })
});

// document.getElementById('workTimer').addEventListener('click', startTimer);
// document.getElementById('shortBreakTimer').addEventListener('click', startTimer);
// document.getElementById('longBreakTimer').addEventListener('click', startTimer);

function startTimer(length){
  
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

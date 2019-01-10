'use strict';
window.onload = function(){
  beginTimer();
}
var timerDiv = document.getElementById('timer');
var dateText = document.createElement('p');
var workTime = 5;
var shortBreakTime = 5;
var longBreakTime = 30;

const buttonElements = document.querySelectorAll('#workTimer, #shortBreakTimer, #longBreakTimer');
const elementsArray = [...buttonElements];

elementsArray.forEach(x => {
  x.addEventListener('click', function(ele){
    if(ele.target.getAttribute('ID') == 'workTimer'){
      //create a new child element within timerDiv
      //push new child element after dateText into timerDiv
      let workElement = document.createElement('p');
      workElement.innerHTML = workTime;
      timerDiv.appendChild(workElement);
      beginCountdown(workElement);
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

function beginCountdown(element){
  let ele = element.innerHTML;
  if(ele > 0){
    var x = setInterval(function(){
      if(ele == 0){
        clearInterval(x);
      }else{
        element.innerHTML--
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

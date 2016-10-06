/**
 * Created by user on 04.10.2016.
 */
var hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes')
    seconds = document.querySelector('.seconds'),
    milliseconds = document.querySelector('.milliseconds'),
    start = document.querySelector('.start'),
    pause = document.querySelector('.pause'),
    clear = document.querySelector('.clear');

var ms = 0,
    s = 1,
    m = 1,
    h = 1;


function run() {
  milliseconds.innerHTML = ms;
    ms = ms + 4;
    if(ms == 1000){
      ms = 0;
      seconds.innerHTML = s++;
      if(s == 59){
        s = 1;
        m++;
        minutes.innerHTML = s++;
        if(m == 59){
          m = 1;
          h++
          hours.innerHTML = s++;
        }
      }
    }
  }

start.onclick  = function () {
  timerId  = setInterval(run, 4);
}

pause.onclick = function () {
  clearInterval(timerId);
}

clear.onclick =  function () {
  clearInterval(timerId);
  ms = 0;
  s = 1;
  m = 1;
  h = 1;
  milliseconds.innerHTML = '0';
  seconds.innerHTML = '0';
  minutes.innerHTML = '0';
  hours.innerHTML = '0';
}


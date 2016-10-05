/**
 * Created by user on 04.10.2016.
 */
var hours = document.querySelector('.hours'),
  minutes = document.querySelector('.minutes')
  seconds = document.querySelector('.seconds'),
  milliseconds = document.querySelector('.milliseconds'),
  start = document.querySelector('.start'),
  finish = document.querySelector('.finish');




start.onclick  = function () {
  var ms = 0,
    s = 1,
    m = 1,
    h = 1;

  start.innerHTML = 'Pause';

  timerId  = setInterval(function run() {

    milliseconds.innerHTML = ms;
    ms=ms+4;
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

      start.onclick = function () {
        clearInterval(timerId);
        start.onclick = function () {
          setInterval(run, 4);
        }
      }

  }, 4);





  finish.onclick =  function () {
    clearInterval(timerId);
  }
}

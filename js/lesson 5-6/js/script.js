/**
 * Created by user on 04.10.2016.
 */
var hours = document.querySelector('.hours'),
  minutes = document.querySelector('.minutes')
  time = document.querySelector('.seconds'),
  msTime = document.querySelector('.milliseconds'),
  start = document.querySelector('.start'),
  finish = document.querySelector('.finish');




start.onclick  = function () {
  var ms = 1,
    s = 1,
    m = 1,
    h = 1,
    timer_ms,
    timer_s,
    timer_m;


  timer_ms = setInterval(function () {
    msTime.innerHTML = ms++;
    if(ms == 999){
      ms = 1;
    }
  }, 1)

  timerId  = setInterval(function() {
    msTime.innerHTML = ms++;

    if(ms == 999){
      ms = 1;
      time.innerHTML = s++;

      if(s == 59){
        s = 1;
        m++;
        if(m == 59){
          m = 1;
          h++
        }
      }
    }
  }, 1);





  finish.onclick =  function () {
    clearInterval(timerId);
  }
}

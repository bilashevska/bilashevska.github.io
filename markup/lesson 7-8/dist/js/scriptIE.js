// script for IE

function addClass(obj, cls) {
  var temp, b;

  temp = obj.className.split(' ');

  for(var i = 0; i < temp.length; i++){
    if ( cls === temp[i]) return;
  }

  temp.push(cls);
  obj.className = temp.join(' ');
}

function removeClass(obj, cls) {
  var temp = obj.className.split(' ');

  for (var i = 0; i < temp.length; i++) {
    if (temp[i] == cls) {
      temp.splice(i, 1);
      i--;
    }
  }
  obj.className = temp.join(' ');
}

var sliderSet  = document.querySelectorAll('.slider__controller > div');
console.log(sliderSet.className);
for(var i = 0; i < sliderSet.length; i++) {
  sliderSet[i].attachEvent('onclick', function() {
    console.log(this);
    var active = document.querySelector('.slider__controller .active');
    console.log(this);
    removeClass(active,'active');
    addClass(this,'active');
  });
}

var contentSet  = document.querySelectorAll('.info__controller');
for(var i = 0; i < contentSet.length; i++) {
  contentSet[i].attachEvent('onclick', function() {
    var active = document.querySelector('.info__controller .active');
    removeClass(active,'active');
    addClass(this,'active');
  });
}
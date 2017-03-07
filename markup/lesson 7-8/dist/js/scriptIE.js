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


var slider = document.querySelector('.slider__controller');
var sliderSet = slider.querySelectorAll('.outer');
for(var i = 0; i < sliderSet.length; i++) {
  sliderSet[i].onclick = function () {
    var active = slider.querySelector('.active');
    removeClass(active,'active');
    addClass(this,'active');
  }
}

var content  = document.querySelector('.info__controller');
var contentSet = content.querySelectorAll('.outer');
for(var i = 0; i < contentSet.length; i++) {
  contentSet[i].onclick = function() {
    var active = content.querySelector('.active');
    removeClass(active,'active');
    addClass(this,'active');
  }
}
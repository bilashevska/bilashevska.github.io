var sliderSet  = document.querySelectorAll('.slider__controller > div');

for(var i = 0; i < sliderSet.length; i++) {
	sliderSet[i].addEventListener('click', function() {
		var active = document.querySelector('.slider__controller .active');
		active.classList.remove('active');
		this.classList.add('active');
	});
}

var contentSet  = document.querySelectorAll('.info__controller > div');

for(var i = 0; i < contentSet.length; i++) {
	contentSet[i].addEventListener('click', function() {
		var active = document.querySelector('.info__controller .active');
		active.classList.remove('active');
		this.classList.add('active');
	});
}
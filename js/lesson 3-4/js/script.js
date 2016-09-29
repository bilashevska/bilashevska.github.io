var parentElem = document.body;

var wrapper = document.createElement('div');
var h1 = document.createElement('h1');
var form = document.createElement('form');
var ol = document.createElement('ol');

var li;
var radio;
var button;

parentElem.appendChild(wrapper);
wrapper.appendChild(form);

wrapper = {

  make_h1: function () {
    h1.innerHTML = "Тест по программированию";
    form.appendChild(h1);
    },

    make_list: function ( n ) {
      form.appendChild(ol);

      for( i= 1; i < n+1; i++) {
        li = document.createElement('li');
        li.innerHTML = "Вопрос №" + i;
        ol.appendChild(li);

        li_div = document.createElement('div');
        li.appendChild(li_div);

        for(k = 1; k < 4; k++) {

          radio_label  = document.createElement('label');
          radio_label.setAttribute('for','quest'+i);
          radio_label.style.display = 'block';

          radio = document.createElement('input');
          radio.setAttribute('name', 'quest'+i);
          radio.setAttribute('type', 'radio');

          text = document.createElement ('span');
          text.innerHTML = ('Ответ №' + k);

          radio_label.appendChild(radio);
          radio_label.appendChild(text);

          li_div.appendChild(radio_label);

        }
      }
    },

  make_submit: function () {
    button = document.createElement('button');
    button.innerHTML = "Проверить мои результаты";
    form.appendChild(button);
  }

};

wrapper.make_h1();
wrapper.make_list( 3 );
wrapper.make_submit();

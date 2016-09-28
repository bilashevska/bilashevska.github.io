var parentElem = document.body;

var wrapper = document.createElement('div');
var h1 = document.createElement('h1');
var ol = document.createElement('ol');

var li;
var radio;
var button;

parentElem.appendChild(wrapper);
parentElem.appendChild(ol);

wrapper = {

    make_h1: function () {
        h1.innerHTML = "Тест по программированию";
        parentElem.appendChild(h1);
    },

    make_li: function ( n ) {
        for(i=1; i < n+1; i++){
            li = document.createElement('li');
            li.innerHTML = "Вопрос №" + i;
            ol.appendChild(li);

            for(k=1; k < 4; k++){
                radio_div  = document.createElement('div');
                li_div  = document.createElement('div');

                radio = document.createElement('input');
                radio.setAttribute('name', 'quest');
                radio.setAttribute('type', 'radio');

                text = document.createElement ('span');
                text.innerHTML =('Ответ' + k);

                radio_div.appendChild(radio);
                radio_div.appendChild(text);
                li.appendChild(radio_div);
            }
        }
    },

    make_submit: function () {
        button = document.createElement('button');
        button.innerHTML = "Проверить мои результаты";
        parentElem.appendChild(button);

    }
};

wrapper.make_h1();
wrapper.make_li(3);
wrapper.make_submit();

'use strict';

var key;
var serializeObj;
var returnObj;
var questions = [];
var initialTemplate = [
  {
    id: 'quest1',
    question: 'Вопрос №1',
    answer1: 'Ответ №1',
    answer2: 'Ответ №2',
    answer3: 'Ответ №3',
    correct: '2'
  },
  {
    id: 'quest2',
    question: 'Вопрос №2',
    answer1: 'Ответ №1',
    answer2: 'Ответ №2',
    answer3: 'Ответ №3',
    correct: '3'
  },
  {
    id: 'quest3',
    question: 'Вопрос №3',
    answer1: 'Ответ №1',
    answer2: 'Ответ №2',
    answer3: 'Ответ №3',
    correct: '1'
  }
];

for (var i = 0; i < initialTemplate.length; i++) {
  key = 'question' + 1;
  serializeObj = JSON.stringify(initialTemplate[i]);
  localStorage.setItem(key, serializeObj);
  returnObj = JSON.parse(localStorage.getItem(key));
  questions.push(returnObj);
}

var template = _.template(document.getElementById('table-template').innerHTML);
document.write(template(questions));

var radio;
var result;
var messages = [];
var current;
var msgBlock = $('.msg');

$(".form-button").click(function () {
  event.preventDefault();
  radio = $('input[type = radio]');
  for (var i = 0; i < radio.length; i++) {
    var temp = $(radio[i]);
    if (temp.prop('checked') === true) {
      for (var j = 0; j < questions.length; j++) {
        if (questions[j].id === temp.attr('name')) {
          current = questions[j];
        }
      }
      if (temp.val() === current.correct) {
        result = current.question + ': правильно.';
      } else {
        result = current.question + ': неправильно.'
      }
      messages.push(result);
    }
  }

  msgBlock.append('<ul>');
  if (messages.length == 0) {
    messages[0] = 'Не дано ни одного ответа!'
    msgBlock.append('<p>' + messages[0] + '</p>');
  } else {
    for (var i = 0; i < messages.length; i++) {
      msgBlock.append('<li>' + messages[i] + '</li>')
    }
  }
  msgBlock.append('</ul>');

  $('.overlay').fadeIn(400, function () {
    $('.modal_form')
      .css('display', 'block')
      .animate({opacity: 1, top: '50%'}, 200);
  });
});

$('.modal_close, .overlay').click(function () {
  $('.modal_form')
    .animate({opacity: 0, top: '45%'}, 200, function () {
        $(this).css('display', 'none');
        $('.overlay').fadeOut(400);
      }
    );

  messages.splice(0, messages.length);
  msgBlock.empty();
  document.getElementById('form').reset();
  $(".form-button").removeAttr('disabled', true);
})



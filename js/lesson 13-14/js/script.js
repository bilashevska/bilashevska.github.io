'use strict';

var key;
var serObj;
var returnObj;
var questions=[];
var setQuestions = [
   {
    id:'quest1',
    title: 'Вопрос №1',
    answer1: 'Ответ №1',
    answer2: 'Ответ №2',
    answer3: 'Ответ №3',
    correct: '2'

  },
  {
    id:'quest2',
    title: 'Вопрос №2',
    answer1: 'Ответ №1',
    answer2: 'Ответ №2',
    answer3: 'Ответ №3',
    correct: '3'
  },
  {
    id:'quest3',
    title: 'Вопрос №3',
    answer1: 'Ответ №1',
    answer2: 'Ответ №2',
    answer3: 'Ответ №3',
    correct: '1'
  }
];

for (var i=0;i < setQuestions.length; i++){
  key = 'question'+1;
  serObj = JSON.stringify(setQuestions[i]);
  localStorage.setItem(key, serObj);
  returnObj = JSON.parse(localStorage.getItem(key));
  questions.push(returnObj);
}


var template = _.template(document.getElementById('table-template').innerHTML);
document.write(template(questions));

var rad;
var result;
var messages = [];
var current = questions[i];
var m = $('.msg');

$(".form-button").click(function(){
  $(".form-button").attr('disabled', true);
  rad = $('input[type = radio]') ;
  for( var i = 0; i < rad.length; i++){
    var temp = $(rad[i]);
    if(temp.prop('checked') === true){
      for( var j = 0; j < questions.length; j++){
        if(questions[j].id === temp.attr('name')){
          current = questions[j];
        }
      }
      if(temp.val() === current.correct){
        result = current.title + ': правильно.';
      } else {
        result = current.title + ': неправильно.'
      }
      messages.push(result);
    }
  }

  m.append('<ul>');
  if(messages.length == 0){
    messages[0] = 'Не дано ни одного ответа!'
    m.append('<p>' + messages[0] + '</p>');
  } else {
    for(var i = 0; i < messages.length; i++){
      m.append('<li>' + messages[i] + '</li>')
    }
  }
  m.append('</ul>');
  event.preventDefault();
  $('.modal_form')
  .css('display', 'block')
  .animate({opacity: 1, top: '50%'}, 200);
});

$('.modal_close').click( function(){
  $('.modal_form')
    .animate({opacity: 0, top: '45%'}, 200,
      function(){
        $(this).css('display', 'none');
      }
    );

  messages.splice(0,messages.length);
  m.empty();
  document.getElementById('form').reset();
  $(".form-button").removeAttr('disabled', true);
})



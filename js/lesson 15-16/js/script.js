var current;
var key;
var questionCounter = 0;
var radio;
var returnObj;
var result;
var serializeObj;
var initialTemplate = [];
var messages = [];
var questions = [];
var msgBlock = $('.msg');

//поиск гифок
var startSearch = document.querySelector('.start-search');
startSearch.onclick = function (e) {
  e.preventDefault();

  var request = $('.gifs-request').val();

  if(request == ""){
    alert("Поле поиска пустое!")
  } else {
    var xhr = new XMLHttpRequest();

    request = request.split(" ").join("+");
    xhr.open('GET', ("http://api.giphy.com/v1/gifs/search?q="+request+"&api_key=dc6zaTOxFJmzC&limit=10"), true);
    xhr.onload = function () {
      var s = xhr.responseText;
      var gifs = JSON.parse(s);
      var gifBlock = document.querySelector('.gifs-result');

      gifs = gifs.data;
      for(var i = 0;i < gifs.length; i++){
        var div = document.createElement('div');
        gifBlock.appendChild(div);
      }

      var gifBlockDiv = document.querySelectorAll('.gifs-result div');
      for(var i = 0;i < gifs.length; i++){
        var temp = gifs[i].images.fixed_width.url;
        gifBlockDiv[i].style.backgroundImage = 'url('+temp+")";
      }
    }
    xhr.onerror = function () {
      console.log(xhr.status);
    }
    xhr.send();

    $(".gifs-result").css("display", "flex");
  }

}

//создание вопросов для теста
//конструктор вопроса
function test(number, question, answer1,answer2, answer3, correct) {
  this.id = 'quest'+number;
  this.question = question;
  this.answer1 = answer1;
  this.answer2 = answer2;
  this.answer3 = answer3;
  this.correct = correct;
}

//добавить вопрос
var makeSubmit = document.querySelector('.make-submit');
makeSubmit.onclick =function (event) {
  var temp;
  event.preventDefault();

  questionCounter++;
  document.querySelector('.make-question h1 span').innerText = questionCounter;

  temp = new test($("input[id='number']").val(),$("input[id='question']").val(),
    $("input[id='answer1']").val(),$("input[id='answer2']").val(),$("input[id='answer3']").val(),
    $("input[id='correct']").val());

  initialTemplate.push(temp);
  document.querySelector('.make-question').reset();
}

//начать тест
$('.start-test').click(function (event) {
  event.preventDefault();

  $(".wrapper").remove();
  questions = [];

  for (var i = 0; i < initialTemplate.length; i++) {
    key = 'question' + 1;
    serializeObj = JSON.stringify(initialTemplate[i]);
    localStorage.setItem(key, serializeObj);
    returnObj = JSON.parse(localStorage.getItem(key));
    questions.push(returnObj);
}

  var template = _.template(document.getElementById('table-template').innerHTML);
  $(template(questions)).appendTo($("body"));

  $("button.form-button").click(function (event) {
    event.preventDefault();
    radio = $('input[type = radio]');
    console.log(radio);

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
          result = current.question + ': неправильно.';
        }
        messages.push(result);
        console.log(messages);
      }
    }

    var msgBlock = $('.msg');
    msgBlock.append('<ul class="result">');
    if (messages.length == 0) {
      messages[0] = 'Не дано ни одного ответа!'
      $(".result").append('<p>' + messages[0] + '</p>');
    } else {
      for (var i = 0; i < messages.length; i++) {
        msgBlock.append('<li>' + messages[i] + '</li>')
      }
    }
    msgBlock.append('</ul>');

    $('.overlay').fadeIn(400, function () {
      $('.modal_form')
        .css('display', 'block')
        .animate({opacity: 1, top: '60%'}, 200);
    });
  });

  $('.modal_close, .overlay').click(function (event) {
    messages = [];
    $('.modal_form')
      .animate({opacity: 0, top: '45%'}, 200, function () {
          $(this).css('display', 'none');
          $('.overlay').fadeOut(400);
        }
      );
    messages.splice(0, messages.length);
    $(".msg").empty();
    document.getElementById('form').reset();
    $(".form-button").removeAttr('disabled', true);
  });
})

$(".make-question input").hover(
  function (e) {
    e.preventDefault();

    $('.tooltip').hide();
    $('.tooltip').remove();

    $('<div class="tooltip"></div>').insertAfter($(this));
    $('.tooltip').text($(this).attr('data-title'));
  },
  function (e) {
    e.preventDefault();

    $('.tooltip').hide();
    $('.tooltip').remove();
  }
);










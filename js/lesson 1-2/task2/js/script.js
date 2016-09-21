'use strict';
var usersNames=[],
    userName;

function pullingArray () {
  var arr=[];

  for (var i = 0; i < 5; i++) {
    arr.push(prompt('Введите имя ' + (i + 1) + ' пользователя', ''));
  }

  return arr;
}

function logIn(name, arr) {
  var flag;

  for (var i = 0; i < 5; i++) {
    flag=name.localeCompare(arr[i]);
    if(flag==0) {
      break;
    }
  }
  if (flag==0) {
    alert(name+", Вы успешно вошли");
  } else {
    alert('К сожалению, такого пользователя несуществует');
  }
}

usersNames = pullingArray();
userName = prompt('Введите свой логин', '');

logIn(userName, usersNames);
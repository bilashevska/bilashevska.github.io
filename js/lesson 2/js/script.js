var usersNames=[];

function pullingArray () {
  var arr=[];

  for (var i = 0; i < 5; i++) 
    arr.push(prompt('Введите имя '+(i+1)+' пользователя', ''))
  return arr;
}

function logIn(name, arr) {
  var flag;

  for (var i = 0; i < 5; i++) 
    name.localeCompare(arr[i])) ; 
  if (flag==0) 
  	alert(name+", Вы успешно вошли");
	else 
	alert('К сожалению, такого пользователя несуществует')
}

userName = prompt('Введите свой логин', '')
usersNames = pullingArray();
logIn('ivan', usersNames);
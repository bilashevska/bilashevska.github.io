/**
 * Created by user on 20.10.2016.
 */
$(function() {
$('.jcarousel').jcarousel();
});

function getSRC(str) {
  return ("img/avatar/"+str+".png")
}

template =_.template(document.getElementById('table-template').innerHTML);

var users = [
  {name: "Вася", age: 10, avatar:"milk"},
  {name: "Петя", age: 15, avatar:"cherries"},
  {name: "Женя", age: 20, avatar:"apple"},
  {name: "Маша", age: 25, avatar:"banana"},
  {name: "Даша", age: 30, avatar:"tomato"},
];

document.write(template(users));


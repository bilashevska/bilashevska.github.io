/**
 * Created by bilashevska on 08.11.2016.
 */
sumInterface();
secondTask();
correctPrice();
infiniteLoop();
getDec1();
getDec2();
fib();
randomToMax();
randomMinToMax();
randomIntMinToMax();


function sumInterface() {
  var a, b, c;

  a = +prompt('Task 1. Enter A', '');
  b = +prompt('Task 1. Enter B', '');
  c = a+b;

  alert("Task 1. A + B = " + c);
}

function secondTask() {
  alert('Task 2. Because, number interprets by machine in such way '+(6.35.toFixed(20)));
}

function correctPrice() {
  var firstPrice, secondPrice, totalPrice;

  firstPrice = +prompt('Task 3. Enter first price', '');
  secondPrice = +prompt('Task 3. Enter second price', '');
  totalPrice = firstPrice+secondPrice;
  alert('Task 3. Total price is ' + totalPrice.toFixed(2)+'$');
}

function infiniteLoop() {
  alert('Task 4. Because, 0.2 = ' + 0.2.toFixed(20) );
  
  //Learn's explanation
  // var i = 0;
  // while (i < 11) {
  //   i += 0.2;
  //   if (i > 9.8 && i < 10.2) alert( i );
  // }
}

function  getDec1() {
  var a,b;
  a = +prompt('Task 5: first version. Enter A', '');
  b= +a.toFixed(0);

  alert('Task 5: first version. Result of getDec is ' + (b-a) + " but incorrect(");
}

function  getDec2() {
  var a,b;
  a = prompt('Task 5: second version. Enter the same A', '');
  if(a[0] == '-'){
    b= '-0';
  } else {
    b= '0';
  }

  for(i = 0; i< a.length; i++){
    if(a[i] == '.'){
      for(j = i; j< a.length; j++){
        b+=a[j];
      }
    }
  }

  alert('Task 5: second version. Correct result of getDec is ' + b);
}

function fib() {
  var fi, result1, result2;
  n = +prompt('Task 6.Enter n', "")

  function fib(n) {
    var a = 1,
      b = 0,
      x;
    for (i = 0; i < n; i++) {
      x = a + b;
      a = b
      b = x;
    }
    return b;
  }

  result1 = fib(n);

  fi = (1+ Math.sqrt(5))/2;
  result2 = Math.pow(fi, n)/(Math.sqrt(5));

  alert("Task 6. Results:"+result1+' ' +' '+ result2);
}

function randomToMax()  {
  var max;
  max = +prompt('Task 7. Enter the max value:', '');
  alert("Task 7: "+Math.random()*max);
}


function randomMinToMax(){
  var min, max;
  min = +prompt('Task 8. Enter the min value:', '');
  max = +prompt('Task 8. Enter the max value:', '');
  alert("Task 8: "+(Math.random()*(max-min)+min));
}

function randomIntMinToMax(min, max){
  var min, max;
  min = +prompt('Task 9. Enter the min value:', '');
  max = +prompt('Task 9. Enter the max value:', '');
  alert("Task 9: "+Math.floor(Math.random()*(max-min+1)+min));
}
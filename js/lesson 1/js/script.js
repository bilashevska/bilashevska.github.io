var a = prompt('Введите основание степени', '');
var n = prompt('Введите число степени', '');

function pow(a, n) {
  var result = 1;

  if (a==0) {
  	if (n==0) return NaN; else return 0;
  }  else {
  	if (n==0) return 1;
  	else {
  		for (var i = 0; i < Math.abs(n); i++) 
        result *= a;
    	if (n<0) result = (1/result); 
  	}
  }
 return result;
}

console.log( pow(a,n) );
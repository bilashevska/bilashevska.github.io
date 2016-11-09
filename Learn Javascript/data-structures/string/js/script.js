/**
 * Created by bilashevska on 10.11.2016.
 */
ucFirst('zenia');
checkSpam('ViaGRa');
truncate('vodafon',6);
extractCurrencyValue('$65');

function ucFirst(str) {
  var str, result;

  result = str[0].toUpperCase() + str.substring(1);
  alert('Task 1. Name: ' + result)
}

function checkSpam(str) {
  var result;

  result = str.toLowerCase();
  if(result.indexOf('viagra') != -1){
    alert('Task 2.Found viagra-type spam: ')
  };
  if(result.indexOf('xxx') != -1){
    alert('Task 2.Found xxx-type spam: ')
  };
}

function truncate(str, maxlength) {
  var result;

  if(str.length > maxlength){
    result = str.substr(0,maxlength-3)+'...';
    alert('Task 3. Trucated value is  ' + result)
  } else
    alert('Task 3. Everything is OK: ' + str);
}

function extractCurrencyValue(str) {
  var result = '';

  for(i = 0; i < str.length; i++) {
    if(isNaN(+str[i]) == false){
      result = result + str[i];
    }
  }
  alert('Task 4. Currency value is ' + result);

}
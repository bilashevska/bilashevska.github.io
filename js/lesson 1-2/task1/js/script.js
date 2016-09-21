var a,
    n;

a=prompt('Введите основание степени', '');
while( (a.localeCompare('')==0) || (isNaN(parseInt(a))) ){
    alert("Поле пустое или заполнено некорректно, попытайтесь ещё!");
    a=prompt('Введите основание степени еще раз', '');
}
n = prompt('Введите число степени', '');
while( (n.localeCompare('')==0) || (isNaN(parseInt(n))) ){
    alert("Поле пустое или заполнено некорректно, попытайтесь ещё!");
    n=prompt('Введите основание степени еще раз', '');
}

function pow(a, n) {
    var result = 1;

    if (a==0) {

        if (n==0) {
            return NaN;
        } else {
            return 0;
        }

    }  else {

        if (n==0) {
            return 1;
        } else {
            for (var i = 0; i < Math.abs(n); i++)
                result *= a;
            if (n<0) {
                result = (1/result);
            }
        }

    }

    return result;
}

console.log( pow(a,n) );
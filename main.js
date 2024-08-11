let num = +prompt('Введите число');


if(isNaN(num) || num === 0) {
    alert('Число не может быть NaN и не может быть 0');
}else {
    let st = +prompt('Введите степень');

    if(isNaN(st) || st === 0) {
    st = 2;
}

let rslt = 1

for(let i = 0; i < st; i++) {
    rslt = rslt * num;
}
alert(num + ' в степени ' + st + ' равен ' + rslt);
}



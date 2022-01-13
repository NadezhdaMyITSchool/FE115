//Задача 1
for(i = 1; i < 50; i++) {console.log(i);}
for(i = 35; i >= 8; i--) {console.log(i);}

//Задача 2
i = 89
while(i >= 11) {document.write(i + `<br>`); i--;}

//Задача 3
let sum = 0;
for(i = 0; i <= 100; i++) {
    sum = sum + i;
}   console.log(sum);


//Задача 4
let sum4 = 0;
for(i = 1; i <= 5; i++) {
    sum4 = sum4 + i;
    console.log(sum4);
}   
//Задача 5
for(i = 8; i <= 56; i++) {
    if(i%2 != 0) continue;
    document.write(i + '<br>');
}
i = 8;
while(i <= 56) {
    if(i%2 == 0) document.write(i + '<br>');
    i++;
}
//Задача 6
document.write('Таблица умножения<br>');
for(i = 2; i <= 10; i++) {
    for(j = 2; j <= 10; j++) {
        document.write(`${i}*${j} = ${i*j} <br>`);
    }
}

//Задача 7
let n = 1000, num = 0;
do {
    n = n / 2;
    num++;
} while(n >= 50);
    console.log(n);
    console.log(num);


//Задача 8
let a, sum8 = 0;
i = 0;
while(a != '0' || a != '') {
    a = +prompt('Введите число');
    if(isNaN(a)) {alert('Ошибка ввода'); continue;}
    i++; 
    sum8 = +sum8 + a;
}
console.log('Сумма чисел: ' + sum8);
console.log('Среднее арифметическое: ' + sum8 / i);


//Задача 9
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57', min, max, arr;
arr = str.split(' ');
max = arr[0];
for(i = 0; i < arr.length; i++) {
    if(arr[i] > max) {max = arr[i];}
}
console.log('Максимальное число: ' + max);
min = arr[0];
for(i = 0; i < arr.length; i++) {
    if(arr[i] < min) {min = arr[i];}
}
console.log('Минимальное число: ' + min);
//Задача 10

let n_ = 3456789876,
nStr = String(n_), amount = 0;
for(i = 0; i < nStr.length; i++) {
    document.write(`${nStr[i]}<br>`);
    amount = amount + +nStr[i];
}
document.write('Сумма цифр: ' + amount + `<br>`);
let nArr = Array.from(nStr);
nArr.reverse();
document.write('Обратный порядок: ' + nArr);

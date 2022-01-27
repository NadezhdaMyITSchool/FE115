// 1. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.
function makeArray(len,value) {
let newArr = [];
for(i = 0; i < len; i++) {
    value = prompt('Введите любое число');
    newArr.push(value);
}
return console.log(newArr);
}
makeArray(prompt('Введите длину массива'));

// 2. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.
function isEven(a) {
    if(a%2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(5));

// 3. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
let intArr = [23,4,3,42,6,6,5,7,8,9,14];
let newIntArr = intArr.filter(function(num) {
    return isEven(num);
}
)
console.log('Только четные числа - ' + newIntArr);

// 4. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
// циклы):
    
//     ```
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
//     ```

//     Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//     параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//     кроме пробела, то пирамида должна быть нарисована этим символом,
//     например:
    
//     ```
//     *
//     **
//     ***
//     ****
//     *****
//     ******
//     *******
//     ********
//     *********
//     ```
function buildPyramid(n){
  for(let i = 1; i <= n; i++){
    let str = '';
    for(let j = 0; j < i; j++){
      str+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
    };
    console.log(str+'\n')
  }
};
let symbol = prompt('Можно ввести любой символ');
buildPyramid(prompt('Введите число строк'));

// 5. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.

let arrFive = [4, 6, 87, 2, 17, 1, 3];
function func(i){
    console.log(arrFive[i++]);
    if(i < arrFive.length){
        func(i);
    }
}
func(0);

// 6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр

function getDigitsSum(n) {
    let sum = 0;
    let str = String(n);
    for(let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
let n = +prompt('Введите целое число');
console.log('Сумма цифр целого числа - ' + getDigitsSum(n));

// 7. Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи

function getDigitsSum(n) {
    let sum = 0;
    let str = String(n);
    for(let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}

let years13 = [];
function getYears() {
for(i = 1; i <= 2022; i++) {
    if(getDigitsSum(i) == 13) {
        years13.push(i);
    }
}
return years13;
}
console.log(getYears());

// 8. Напишите функцию makeString(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

let str8 = 'beatae est doloribus animi ad atque saepe eum beatae';
const s = +prompt('Введите порядковый номер буквы');
let count = s;
let arrStr = str8.split('');
function makeString() {
for(i = 0; i < arrStr.length; i++){
    if(i == count-1) {
    count = count + s;
    arrStr[i] = arrStr[i].toUpperCase();  
}
}
return arrStr.join('');
}
console.log(makeString());


// 9. Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе
function getDigitsQuant(n) {
    let str = String(n);
    return console.log('Количество цифр введенного числа - ' + str.length);
}
getDigitsQuant(prompt('Введите число любой длины'));

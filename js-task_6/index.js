
//1. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.
let start = +prompt('Введите с какого числа начинается массив');
let finish = +prompt('Введите каким числом заканчивается массив');
function getArr(start, finish) {
    var arr = [];
    for(var i = start; i <= finish; i++)
        arr.push(i);
    return arr;
}
console.log(getArr(start, finish));


//2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.
let a = 4;
let isEven = function(num) {
    return num % 2 == 0;
};
isEven(a);


//3. Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел.Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
let arr31 = [1,2,3,4,5,6,7]
let arrEven = function(arr) {
    return arr.filter(isEven)
} 
console.log(arrEven(arr31));




//4. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):

function createPyr(numb, symb) {

    numb = prompt('Введите количество рядов');
        for (var i = 1; i <= numb; i++) {
            for (var j = 1; j <= i; j++) {
                document.write(i);
            }
            document.write('<br>');
        }
    
}

createPyr( );
//

//Функция может вызывать саму себя. Три способа такого вызова:1)по имени функции; 2)arguments.callee; 3) переменной, которая ссылается на функцию

//5. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.

let arr = [1,2,3,-34,0]

function func(i){
    console.log(arr[i++]);
    if(i<arr.length){
        func(i);
    }
}
func(0);


//6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр
let digit = +prompt('введите число');
let getDigitsSum = function(num) {
    let sum = 0;
    let str = String(num);
    for(let i = 0; i < str.length; i++)
    sum += Number(str[i]);
    return sum;
}
console.log(getDigitsSum(digit));


//7. Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи


let allYears = function() {

let years = [];
    
for (let i = 1; i <= 2022; i++) {
    if (getDigitsSum(i) == 13) {
        years.push(i);
      }
    }
    return years;
}
console.log(allYears());



//8. Напишите функцию makeString(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
let n = 3;
let makeString = (string, n) => {
    let i = 0;
    let result = '';
    while (i < string.length) {
      let numb = string[i];
      if ((i + 1) % n === 0) {
        result = `${result}${numb.toUpperCase()}`;
      } else {
        result = `${result}${numb}`;
      }
      i++;
    }
  
    return result;
  };
console.log(makeString('мама мыла раму', n));



//9. Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе
let number = 4392810;
let getKol = function(num) {
    return num.toString().length;
}

console.log(getKol(number));



















//https://github.com/artemybagaev/js_training/blob/master/functions.html

//https://www.cyberforum.ru/javascript-beginners/thread2316741.html
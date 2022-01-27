

/*не решены:
4 - пирамида
8 - с переводом в регистр(не работает)*/


//Задание 1. Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.

console.log('            ЗАДАЧА 1');

let arr = [];

function createArray() {
  
    while (true) {
  
      let number = prompt("Введите число", 0);
  
      if (number === "" || number === null || number === false) break;
  
      arr.push(+number);
    }
}

function showArray() {
    console.log(arr);
}


createArray();
showArray();

//Задание 2. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.

console.log('            ЗАДАЧА 2');

function isEven(x) {
    if (x % 2 == 0) return true;
    else return false;
}

console.log(isEven(3));
console.log(isEven(24));

//Задание 3. Напишите ф-цию, в которую передается массив с целыми числами.Верните новый массив, где останутся лежать только четные из этих чисел.Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

console.log('            ЗАДАЧА 3');


function findEven (arr3) {
    let newArr3 = [];

    for (let i = 0; i <= arr3.length; i++) {
    if (isEven(arr3[i]) == true) {newArr3.push(arr3[i])} 
    else continue;
    }

    return newArr3;
}

console.log(findEven([2,6,7,9,11,88,92,100,53,61]));

//Задание 4. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные циклы):
    
// ```
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// ```

// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.параметр, непредусмотренный ф-цией по умолчанию - один любой символ,кроме пробела, то пирамида должна быть нарисована этим символом,например:

// ```
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// ```

console.log('            ЗАДАЧА 4');


//Задание 5. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.

console.log('            ЗАДАЧА 5');

//Рекурсия - вызов функции из нее самой напрямую или через другие функции 

function Recurtion(arr5) {
    console.log(arr5[0]);
    arr5.splice(0,1);

    if(arr5.length > 0) {
        Recurtion(arr5);
    }
}

Recurtion([5,7,3,7,3,0,2,7]);


//Задание 6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр 

console.log('            ЗАДАЧА 6');

function getDigitsSum(digit) {
    let sum = 0;
    digit = String(digit);

    for(let i =0; i < digit.length; i++) {
    sum += Number(digit[i]);
    }
    return sum;
}
    
console.log(getDigitsSum(124));

//Задание 7. Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи

console.log('            ЗАДАЧА 7');

let arr7 = [];
for(let i = 1; i < 2022; i++) {
    if(getDigitsSum(i) == 13) {
    arr7.push(i);
    }
}
console.log(arr7);

//Задание 8.Напишите функцию makeString(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

console.log('            ЗАДАЧА 8');

function makeString(str, n) {
    for (let i = 0; i < str.length; i++) {
        if((i + 1) % n == 0) {
            str[i].toUpperCase();
        }
    }
    return str;
}
    
console.log(makeString('привет',2));


// function makeString(l, num) {
//     l = l.split(''); 
//     for (let i = 0; i < l.length; i++) {
//         l[i] = String(l[i]);
//     if ((l[i] + 1) % num === 0) {
//         l[i].toUpperCase();
//       } else continue
//     }
//     console.log(l);
// }

// makeString('привет',2);


//Задание 9.Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе

console.log('            ЗАДАЧА 9');

function findNumbers(k) {
    k = String(k);
    let num = 0;

    for(let i =0; i < k.length; i++) {
        num = num + 1;
        }
    return num;                             
}

console.log(findNumbers(12345));
console.log(findNumbers(111));
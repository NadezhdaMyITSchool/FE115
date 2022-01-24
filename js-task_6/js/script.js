// 1. Напишите две функции: первая ф-ция должна возвращать массив с
//  числовыми значениями, диапазон которых должен вводиться пользователем
//  с клавиатуры; вторая – выводить полученный массив.
let massiveData = function (from, to) {
 let error = 'Введите диапазон массива!';
 if ((from !== undefined && from !== null && typeof from !== 'boolean' && from !== '' && from !== ' ') &&
  (to !== undefined && to !== null && typeof to !== 'boolean' && to !== '' && to !== ' ')) {
  from = parseInt(from);
  to = parseInt(to);
  if (!isNaN(from) && !isNaN(to)) {
   let newArr = [];
   if (from < to) {
    for (let i = from; i <= to; i++) {
     newArr.push(i);
    }

    return newArr;
   } else {
    error = 'Конечное значение диапозона массива не может быть меньше начального значения!';
   }
  } else {
   error = 'Значение диапозона массива должно быть целым числом!';
  }
 }

 alert(error);
}

let showMassiveData = function () {
 let result = massiveData(from, to)

 if (result && result.length > 0) {
  alert(result);
 }

 return result;
}

let from = prompt('Введите начальное значение массива:');
let to = prompt('Введите конечное значение массива:');
console.log(showMassiveData());

// 2. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

function isEven(number) {
 let error = 'Введеное значение не является числом!';
 if (number !== undefined && number !== null && typeof number !== 'boolean'
  && number !== '' && number !== ' ' && !isNaN(number)) {

  return number % 2 === 0; // эквивалент записи number % 2 === 0 ? true : false;
 }

 alert(error);
}

console.log(isEven(4));
console.log(isEven(5));
console.log(isEven());
console.log(isEven('6'));
console.log(isEven(''));
console.log(isEven('hvgjhjhg'));
console.log(isEven(null));
console.log(isEven(' '));

// 3. Напишите ф-цию, в которую передается массив с целыми числами.
//  Верните новый массив, где останутся лежать только четные из этих чисел.
//  Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
const arr1 = [3, 6, 76, 8, 33, 0, -10, 77];
// const arr1 = [13, 61, 7, 81, 33, -101, 77];
// const arr1 = [];

let result = function (numbers) {
 let evenArr = [];

 if (numbers.length > 0) {
  numbers.forEach(item => {
   if (isEven(item)) {
    evenArr.push(item);
   }
  })
 }

 return evenArr;
}

console.log(result(arr1));

// 4. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
// циклы):
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
//  параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
//  кроме пробела, то пирамида должна быть нарисована этим символом,
//  например:

function pyramid(n) {
 for (let i = 1; i <= n; i++) {
  let m = '';
  for (let j = 0; j < i; j++) {
   m += symbol === undefined || symbol.length - 1 || symbol === ' ' ? i : symbol;
  }
  console.log(m + '\n')
 }
}
let symbol = prompt('Введите символ:');
pyramid(prompt('Введите высоту пирамиды:'));

// 5. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.
function printArray(array) {
 if (array.length > 0) {
  console.log(array[i]);
  i++;
  if (i < array.length) printArray(array);
 }
}

let i = 0;
printArray([1, 89, 7, -45, 9, 6, 66]);

// 6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр
function getDigitsSum(digit) {
 let error = 'Введеное значение не является числом!';

 if (digit !== undefined && digit !== null && typeof digit !== 'boolean'
  && digit !== '' && digit !== ' ' && !isNaN(digit)) {
  let dataArray = Array.from(digit.toString(), Number);

  return dataArray.reduce((previousValue, currentValue) => previousValue + currentValue);
 }

 alert(error);
}

console.log(getDigitsSum(101010));
console.log(getDigitsSum());
console.log(getDigitsSum('6'));
console.log(getDigitsSum(''));
console.log(getDigitsSum('hvgjhjhg'));
console.log(getDigitsSum(null));
console.log(getDigitsSum(' '));

// 7. Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи
let years = function (from, to) {
 let arr2 = [];
 if ((from !== undefined && from !== null && typeof from !== 'boolean' && from !== '' && from !== ' ' && !isNaN(from)) &&
  (to !== undefined && to !== null && typeof to !== 'boolean' && to !== '' && to !== ' ' && !isNaN(to))) {
  for (let i = 1; i <= 2022; i++) {
   if (getDigitsSum(i) === 13) {
    arr2.push(i);
   }
  }
 }

 return arr2;
}

console.log(years(1,2022));
// console.log(years(0));
// console.log(years('dvbzhsdjhm'));

// 8. Напишите функцию makeString(), которая принимает на вход строку и возвращает её копию, у которой
// каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
function makeString(str, elem) {
 let error = 'Функция работает только со строками!';
 if (str !== undefined && str !== null && typeof str !== 'boolean' && isNaN(str)) {
  if (elem > 0) {
   let copyStr = str.slice();
   let strToArray = Array.from(copyStr);
   let text = strToArray.map((item, index) => (index % elem === 0 && index !== 0) ? item.toUpperCase() : item);

   return text.join('');
  } else {
   error = 'Значение элемента должно быть больше 0!';
  }
 }

 alert(error);
}

console.log(makeString('test test test kfhvjshdvkjs', 3));
// console.log(makeString('test test test kfhvjshdvkjs', 0));
// console.log(makeString('11111', 7));
// console.log(makeString(3333, 4));

// 9. Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе
function countDigits(number) {
 let error = 'Введеное значение не является числом!';

 if (number !== undefined && number !== null && typeof number !== 'boolean'
  && number !== '' && number !== ' ' && !isNaN(number)) {

  return number.toString().length;
 }

 alert(error);
}

console.log(countDigits(101010));
// console.log(countDigits());
// console.log(countDigits('6'));
// console.log(countDigits(''));
// console.log(countDigits('hvgjhjhg'));
// console.log(countDigits(null));
// console.log(countDigits(' '));
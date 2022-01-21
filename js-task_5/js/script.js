// 1. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].
const arr = [1, 2, 3, 4, 5];
const arrNew = arr.splice(3, 2);
console.log(arrNew);

// 2. Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши
const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
// fruits.forEach((item, i) => {
//  if (item === "Apple") {
//   fruits[i] = "Pear";
//  }
// });
// console.log(fruits);

let fruitsMap = fruits.map(item => item === 'Apple' ? 'Pear' : item);
console.log(fruitsMap);

// 3. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// Решить через Reduce и forEach
const arr1 = [1, 2, 5, 10, 15];
let sum = 0;
let count = 0;
arr1.forEach(item => {
 if (sum < 10) {
  sum += item;
  count++;
 }
});
console.log('Сумма через forEach ' + count + ' элементов массива равна ' + sum);

let num = 1;
arr1.reduce((previousValue, currentValue) => {
 if (previousValue > 10) {
  console.log('Сумма через reduce ' + num + ' элементов массива равна ' + previousValue);
  return num;
 } else {
  num++;
  return previousValue + currentValue;
 }
});

// 4. Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"].
// Сделать каждую первую букву заглавной, используя методы перебора массива
const names = ["rachel", "joe", "ben", "ross", "marcel"];
let namesMap = names.map(item => item[0].toUpperCase() + item.substring(1));
console.log(namesMap);

// 5. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
const arr3 = [1, 2, 50, 10, 15];
const arr4 = [];
arr3.forEach(item => {
 arr4.push(Math.pow(item, 2));
});
console.log(arr4);

// 6. Дан массив с числами. Оставьте в нем только отрицательные числа.
const arr5 = [-1, -2, 50, -10, 15, 0, 100, 10, -80];
const newArr = arr5.filter(item => item < 0);
console.log(newArr);

// 7. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
const arr6 = ['qqqqqqqq', 'www', 'ert', 'tttttttt', 'yy', 'u', 'iiiiiiiiiiiii'];
const newArrString = arr6.filter(elem => elem.length > 5);
console.log(newArrString);

// 8. Напишите код, который определяет сумму и произведение значений массива
const arr10 = [1, 3, 5, 78, 9, 45, 3, 10];
let arraySum = arr10.reduce((previousValue, currentValue) =>  previousValue + currentValue);
console.log('Сумма всех элементов массива равна ' + arraySum);
let arrayMultiply = arr10.reduce((previousValue, currentValue) =>  previousValue * currentValue);
console.log('Произведение всех элементов массива равна ' + arrayMultiply);

// 9. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел
const arr7 = [-1, -2, 50, -10, 15, 0, 100, 10, -80];
let arr8 = [];
const newArrPositive = arr7.filter(item => item > 0);
if (newArrPositive.length > 0) {
 arr8 = newArrPositive.map(item => Math.pow(item, 2));
}
// if (newArrPositive.length > 0) {
//  newArrPositive.forEach(item => {
//   arr8.push(Math.pow(item, 2));
//  });
// }
console.log(arr8);

// 10. Дан массив с числами. Найдите сумму этих чисел через reduce
const arr9 = [-1, -2, 50, -10, 15, 0, 100, 10, 80];
let result = arr9.reduce((previousValue, currentValue) =>  previousValue + currentValue);
console.log('Сумма элементов массива равна ' + result);

// 11. Изучить методы fill(), includes(), flatMap(), some(), every(), flat(), findIndex() и
// написать по одному примера использования данных функций с комментариями
const arr11 = [1, 1, 4, 5, 3, 5, 6];
const arr14 = [1, 1, 4, 5, 3, 5, 6];
const arr12 = ["fff", "test", "zzzzzz"];
const arr13 = [1, 2, [3, 4, [5, 6]]];
console.log(arr11.fill(0, 2)); // [1, 1, 0, 0, 0, 0, 0]

console.log(arr14.includes(10)); // false
console.log(arr14.includes(4)); //true

console.log(arr14.flatMap(item => item * 10)); //[10, 10, 40, 50, 30, 50, 60]

console.log(arr12.some(item => item === 'test')); // true
console.log(arr12.some(item => item === 'tes')); // false

console.log(arr14.every(item => item > 10)); // false
console.log(arr14.every(item => item < 10)); // true

console.log(arr13.flat(2)); // [1, 2, 3, 4, 5, 6]

console.log(arr14.findIndex(item => item > 14)); // -1
console.log(arr14.findIndex(item => item > 4)); // 3

// 12. Написать функцию, которой передаем, имя, фамилия и возраст, и она возвращает строку
"Привет, Иван Петров с возрастом 17 лет"
let clientData = function (name, surname, age) {
 let error = 'Имя, фамилия и возраст пользователя должны быть заполнены!';
 if (name && surname && age) {
  if (Number(age) > 0) {
   return `Привет, ${name} ${surname} с возрастом ${age} лет.`
  } else {
   error = 'Возраст должен быть числом!'
  }
 }
 return error;
}
console.log(clientData('name', 'test', 56));
// console.log(clientData('name', 'test', '56'));
// console.log(clientData('name', 'test', ''));
// console.log(clientData('name', 'test', ' '));
// console.log(clientData('name', 'test', -56));
// console.log(clientData('name', 'test', 0));
// console.log(clientData('name', 'test'));

// 13. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.
let mathOperation = function (a, b, c) {
 let error = 'Параметры должны быть заполнены!';
 if ((a !== undefined && a !== null && typeof a !== 'boolean')
  && (b !== undefined && b !== null && typeof b !== 'boolean')
  && (c !== undefined && c !== null && typeof c !== 'boolean')) {
  if (Number(c) !== 0) {
   return (Number(a) - Number(b)) / Number(c);
  } else {
   error = 'Деление на ноль невозможно!';
  }
 }
 return error;
}
console.log(mathOperation(5, 2, 10));
// console.log(mathOperation(5, 2, 0));
// console.log(mathOperation('5', 2, '0'));
// console.log(mathOperation('0', 2, '10'));
// console.log(mathOperation(0, 2, '10'));
// console.log(mathOperation('', '2', ''));
// console.log(mathOperation(-10, 2, '10'));
// console.log(mathOperation(5, 9));
// console.log(mathOperation(5, null, 9));
// console.log(mathOperation(true, 5, 9));

// 14. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
let degree = function (number, degree = 2) {
 let error = 'Введите число!';
 if (number !== undefined && number !== null && typeof number !== 'boolean' && number !== '' && number !== ' ') {
  if (!isNaN(Number(number))) {
   return Math.pow(Number(number), degree);
  } else {
   error = 'Строка не является числом!';
  }
 }

 return error;
}

console.log(degree(2));
console.log(degree(2, 3));
// console.log(degree(0));
// console.log(degree("0"));
// console.log(degree());
// console.log(degree(null));
// console.log(degree("null"));
// console.log(degree(true));
// console.log(degree("2"));
// console.log(degree(""));
// console.log(degree(" "));
// console.log(degree("gvdsfbdfb"));

// 15. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
let minMaxValue = function (a, b, sort = 'min') {
 let error = 'Введите числа!';
 if ((a !== undefined && a !== null) && (b !== undefined && b !== null)) {
  if (!isNaN(Number(a)) && !isNaN(Number(b))) {
   if (sort === 'max') {
    return Math.max(a, b);
   } else {
    return Math.min(a, b);
   }
  } else {
   error = 'Строка не является числом!';
  }
 }

 return error;
}
console.log(minMaxValue(2, 3));
// console.log(minMaxValue("2", "3"));
// console.log(minMaxValue("2", 0));
// console.log(minMaxValue("2", "0"));
// console.log(minMaxValue("hvjhbh2", "3"));
console.log(minMaxValue(2, 3, 'max'));
// console.log(minMaxValue("2", "0", 'max'));
// console.log(minMaxValue("hvjhbh2", "3", 'max'));

// 16. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток
// (Доброе утро\день\вечер\ночи Иван). Через new Date()
let greetings = function (name) {
 let message = 'Имя пользователя не должно быть пустым!';
 if (name) {
  let now = new Date();
  let hour = now.getHours();
  let dayPart = '';

  if (hour <= 6) {
   dayPart = 'Доброй ночи';
  } else if (hour <= 12) {
   dayPart = 'Доброе утро';
  } else if (hour <= 18) {
   dayPart = 'Добрый день';
  } else {
   dayPart = 'Добрый вечер';
  }

  return `${dayPart} ${String(name)}!`;
 }
 return message;
}

console.log(greetings('Test'));
// console.log(greetings(''));
// console.log(greetings());
// console.log(greetings(565765));
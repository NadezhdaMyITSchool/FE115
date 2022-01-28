// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.
let str1 = 'aaa@bbb@ccc';
console.log(str1.replace(/@/gi, '!'));

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.
// let dateNow = new Date();
// dateNow.setDate(31);
// dateNow.setMonth(11);
// dateNow.setFullYear(2025);

let dateNow = new Date('2025-12-31');
let options = {
 year: 'numeric',
 month: 'numeric',
 day: 'numeric',
 timezone: 'UTC'
};
console.log(dateNow.toLocaleString("el", options));

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).
let str3 = 'Я учу javascript!';
// let regexp = /учу/i;
let regexp = /javascript/i;
let searchString = str3.match(regexp);
let stringIndex = searchString.index;
let stringLength = searchString[0].length;

console.log(str3.substr(stringIndex, stringLength));
console.log(str3.substring(stringIndex, stringIndex + stringLength));
console.log(str3.slice(stringIndex, stringIndex + stringLength));

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов.
// Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
 sum += Math.pow(arr[i], 3);
}
// console.log(sum);
console.log(Math.sqrt(sum));

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
//  равных соответственно 3 и 5, 6 и 1.
// let a = 3;
// let b = 5;
let a = 6;
let b = 1;
let c = Math.abs(a - b);
console.log(c);

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
//  Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).
function getFormat(num) {
 if (num > 0 && num < 10) {
  return '0' + num;
 }

 return num;
}

let currentDate = new Date();
let date = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${getFormat(currentDate.getDate())}.${getFormat(currentDate.getMonth() + 1)}.${currentDate.getFullYear()}`;
console.log(date);

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая  найдет строки aba, abba, abbba
// по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
let str4 = 'aa aba abba abbba abca abea abbbbba';
let regexpAB = /ab+a/gi;
console.log(str4.match(regexpAB));

// 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате
//  (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false.
// Используйте регулярные выражения.
let phoneVerification = function (phone) {
 let rexPhoneExp = /^(\+)([-()(\s*)]?\d[-(\s*)]?){10,14}?/;

 return rexPhoneExp.test(phone.trim());
}

console.log(phoneVerification('+375(29)1122333'));
console.log(phoneVerification("+375 29 11 22 33"));
console.log(phoneVerification("+375-29-11-22-33"));
console.log(phoneVerification('+375 (29) 1122333'));
console.log(phoneVerification('+ 375 (29) 1122333'));
console.log(phoneVerification(' + 375 (29) 1122333'));
console.log('++++++++++++++++++++++++++++++');
console.log(phoneVerification("8(029)112233"));
console.log(phoneVerification("8-(029)112233"));
console.log(phoneVerification("+375 fbjdk 112233"));
console.log(phoneVerification("8 (jdfjkvd)112233"));
console.log(phoneVerification("8 (029) 11 22 33"));

//  9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
////  - весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки;
//  - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и
//  единственными в имени;
//  - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.
//  Функция должна возвращать true или false. Используйте регулярные выражения.
let emailVerification = function (email) {
 let rexExp = /^([a-zA-Z]{2})([a-zA-Z0-9_\.\-])+@[a-z]+\.([A-Za-z]{2,11})/;

 return rexExp.test(email.trim());
}

console.log(emailVerification('test@test.com'));
console.log(emailVerification('te.st@test.com'));
console.log(emailVerification('tesYYYYt@test.com'));
console.log(emailVerification('tesYYYYt@test.com'));
console.log(emailVerification('tesYYYY.t@test.com'));
console.log(emailVerification('te33s-t@test.com'));
console.log(emailVerification('te33s_t@test.com'));
console.log('++++++++++++++++++++++++++++++++++++++');
console.log(emailVerification('yt@test.com'));
console.log(emailVerification('66@test.com'));
console.log(emailVerification('6f @test.com'));
console.log(emailVerification('44te33st@test.com'));
console.log(emailVerification('ваиваив@test.com'));
console.log(emailVerification('44te33$&st@test.com'));
console.log(emailVerification('te33s_t@tes9t.com'));
console.log(emailVerification('44te33st@te_st.com'));
console.log(emailVerification('44te33st@test.c'));
console.log(emailVerification('44te33st@test.comyyyyttttttttttttttjjjjjjjjjjjjjjjjjjjjjjjjjjjjttttttttttttt'));

//  10. Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел, который поможет составить слово из этой Grid таблицы, например:
//  Создайте единый массив из Grid таблицы (можно при помощи метода .flat()) и по нему составьте слово пользуясь картой чисел, чтобы в результате получилось, например:
//  Результат функции должен вернуть строку
function getWord(grid, indices) {
 let t1 = grid.flat();
 let newArr = [];
 for (let i = 0; i < indices.length; i++) {
  newArr.push(t1[indices[i] - 1]);
 }

 return newArr.join('');
}

let arr2 = [['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']];
console.log(getWord(arr2, [1, 3, 5, 8]));
console.log(getWord(arr2, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(getWord([['h', 'e', 'l', 'l'], ['o', 'c', 'o', 'd'], ['e', 'w', 'a', 'r'], ['r', 'i', 'o', 'r']], [5, 7, 9, 3, 6, 6, 8, 8, 16, 13]));

//  11. Здесь вам в аргументах даны 2 массива:
//  Нужно преобразовать каждый массив удалив в нем повторяющиеся числа.
//  После чего склеить эти два массива, отсортировать и вернуть как результат
function testit(a, b) {
 let filteredMassiveA = a.filter((item, index) => (a.indexOf(item) === index));
 let filteredMassiveB = b.filter((item, index) => (b.indexOf(item) === index));
 let massive = filteredMassiveA.concat(filteredMassiveB);

 return massive.sort(function (a, b) {
  return a - b;
 });
}

console.log(testit([0], [1]));
console.log(testit([1, 2], [3, 4]));
console.log(testit([1], [2, 3, 4]));
console.log(testit([1, 2, 3], [4]));
console.log(testit([1, 2], [1, 2]));
console.log(testit([1, 2, 20, 8], [1, 2, 1]));
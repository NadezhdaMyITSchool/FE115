// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

let str1 = 'aaa@bbb@ccc';
console.log(str1.replace(/@/g, '!'));

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

let data = '2025-12-31';
let arrData = data.split('-');
let newData = arrData[2] +'/' + arrData[1] + '/' + arrData[0];
console.log(newData);

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

let str3 = 'Я учу javascript!';
// 1 - substr

console.log(str3.substr(2, 14));

// 2 - substring

console.log(str3.substring(2, 16));

// 3 - slice

console.log(str3.slice(2, 16));

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for(i=1; i<arr4.length; i++){
sum += Math.pow(arr4[i],3);
}
console.log('Квадратный корень из суммы кубов - ' + Math.sqrt(sum));

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

function func(a,b) {
	let c = a - b;
	return Math.abs(c);
}
console.log(func(3,5));
console.log(func(6,1));

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).
let date = new Date();
function getZero(n){
	if (n > 0 && n < 10) { 
		return '0' + n;
	} else {
		return n;
	}
}
console.log(getZero(date.getHours()) + ':' + getZero(date.getMinutes()) + ':' + getZero(date.getSeconds()) + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/ab+a/g));
// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

function ValidPhone(phone) {
    let re = /^\+[\d]{1,4}\ \([\d]{2,3}\)\ [\d]{2,4}-[\d]{2,3}-[\d]{2,3}$/;
    let valid = re.test(phone);
        if (valid) return alert('Номер телефона введен правильно!');
        else return alert('Номер телефона введен неправильно!');
}
ValidPhone(prompt('Введите номер телефона:'));

// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
//     - весь адрес не должен содержать русские буквы и спецсимволы, кроме
//     одной «собачки», знака подчеркивания, дефиса и точки;
//     - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
//     имя может содержать только буквы, цифры, но не быть первыми и
//     единственными в имени;
//     - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
//     не может быть длиной менее 2 и более 11 символов.
//     Функция должна возвращать true или false. Используйте регулярные
//     выражения.
function validEmail(email) {
let re = /^[\w]{1}[\w-\.]{2,}@[\w-]{2,11}\.[a-z]{2,4}$/i;
let valid = re.test(email);
if (valid) return alert('E-mail введен правильно!');
    else return alert('E-mail введен неправильно!');
}
validEmail(prompt('Введите e-mail:'))

// 10. Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел, который поможет составить слово из этой Grid таблицы, например: 

//     Создайте единый массив из Grid таблицы (можно при помощи метода .flat()) и по нему составьте слово пользуясь картой чисел, чтобы в результате получилось, например:
//     Результат функции должен вернуть строку
function gridIndex(grid, indices) {
let arrFlat = grid.flat();
let newArr = [];
for (i=0; i < indices.length; i++) {
	newArr.push(arrFlat[indices[i] - 1]);
}
return newArr.join('');
}
console.log(gridIndex([['m', 'y', 'e'],['x', 'a', 'm'],['p', 'l', 'e']], [1, 3, 5, 8]));

// 11. Здесь вам в аргументах даны 2 массива: 
//     Нужно преобразовать каждый массив удалив в нем повторяющиеся числа.
//     После чего склеить эти два массива, отсортировать и вернуть как результат

function testit(a,b){
    a = a.filter(function(elem, index) {
         return a.indexOf(elem) == index;
    });
    b = b.filter(function(elem, index) {
        return b.indexOf(elem) == index;
    });

        let c = a.concat(b);
        return c.sort(function(a, b) {
        return a - b;
    });
}

console.log(testit([2,5,5,7], [1,0,0,4,6,2,2]))
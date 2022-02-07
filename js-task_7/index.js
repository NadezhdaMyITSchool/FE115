// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

let str1 = 'aaa@bbb@ccc';
console.log(str1.replace(/@/g,'!'));

// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.

let date = '2025-12-31';
let dateNew = date.split('-');
let dateResult = dateNew[2] + '/' + dateNew[1] + '/' + dateNew[0];
console.log(dateResult);


// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).
    
let str3 = 'Я учу javascript!';
console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));
console.log(str3.substr(2, 3));
console.log(str3.substr(6, 10));
console.log(str3.slice(2, 5));
console.log(str3.slice(6, 16));

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr4 = [4, 2, 5, 19, 13, 0, 10];
let newArr = 0;
for(let i = 0; i < arr4.length; i++) {
    newArr += Math.pow(arr4[i], 3);
}
console.log(Math.sqrt(newArr));

// 5. Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

function invert (a, b) {
    c = a - b;
        if(c < 0) {
            c *= -1;
        }
    return c;
}
console.log(invert(3,5));

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

let date6 = new Date();
let fullDate = addZero(date6.getDate()) + '.' + addZero(date6.getMonth() + 1) + '.' + date6.getFullYear();
let hours = addZero(date6.getHours()) + ':' + addZero(date6.getMinutes()) + ':' + addZero(date6.getSeconds());
 
function addZero (num) {
    if (num <= 9) {
      return num = '0' + num;  
    } else {
        return num;
    }
}
 
console.log(hours + ' ' + fullDate);

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
let str7 = 'aa aba abba abbba abca abea'.replace(/ab + a/g,'!');
let reg7=/ab{1,}a/gi; 
console.log(str7.match(reg7));


// 8. Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.
let phone = '+375291234567';
let regexp = /[+][0-9]{2,5}[0-9]{2,4}[0-9]{5,10}/gi;
console.log(regexp.test(phone));


// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
//     - весь адрес не должен содержать русские буквы и спецсимволы, кроме
//     одной «собачки», знака подчеркивания, дефиса и точки;
//     - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
//     имя может содержать только буквы, цифры, но не быть первыми и
//     единственными в имени;
//     - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
//     не может быть длиной менее 2 и более 11 символов.
   
//     Функция должна возвращать true или false. Используйте регулярные
//     выражения.
let email = 'test@gmail.com';
let regexpEm = /([a-z0-9]){2}@[0-9a-z].[a-z]{2,11}/gi;
console.log(regexpEm.test(email));


// 10. Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел, который поможет составить слово из этой Grid таблицы

function gridIndex(grid, indices) {
    grid = grid.flat()
    return indices.map(num => num = grid[num-1]).join("")
}



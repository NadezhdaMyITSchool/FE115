//1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.
let str1 = 'aaa@bbb@ccc';
console.log(str1.replace(/@/g, '!'));


//2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.
let date = '2025-12-31';
// console.log(date.replace(/-/g, '/'));  //2025/12/31

let arr2 = date.split('-');
let newDate = arr2[2] + '/' + arr2[1] + '/' + arr2[0];
console.log(newDate);



//3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).
let str3 = 'Я учу javascript!';
console.log(str3.substring(0, 1));  //substring(start, [end])
console.log(str3.substr(0, 1));     //substr(start, [length]) какое кол-во начиная со start
console.log(str3.slice(0, 1));      //slice(start, [end])  - идентичен substring(start, [end])



//4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr4 = [4, 2, 0, 10];
let sum = 0;
for (let i=0; i < arr4.length; i++) {
    sum+=Math.pow(arr4[i],3)
}
let result = Math.sqrt(sum);
console.log(result);  


//5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b,равных соответственно 3 и 5, 6 и 1.

let a = 3;
let b = 5;
let c = Math.abs(a-b);   //Math.abs() возвращает абсолютное значение числа
console.log(c);


//6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.Для решения этой задачи напишите функцию, которая будет добавлять 0 днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014)
let dateNow = new Date();

let dateZero = function(number) {
    if(number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}
console.log(dateZero(dateNow.getHours()) + ':' + dateZero(dateNow.getMinutes()) + ':' + dateZero(dateNow.getSeconds()) + ' ' + dateZero(dateNow.getDate()) + '.' + dateZero(dateNow.getMonth() + 1) + '.' + dateNow.getFullYear());



//7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.
let str7 = 'aa aba abba abbba abca abea';
console.log(str7.match(/ab+a/g)); //  ['aba', 'abba', 'abbba']
console.log(str7.match(/ab{1,}a/gi)); //  ['aba', 'abba', 'abbba']

// console.log(str7.replace(/ab+a/, '!')); //  aa ! abba abbba abca abea
// console.log(str7.replace(/ab*a/, '!')); //  ! aba abba abbba abca abea
// console.log(str7.replace(/ab?a/, '!'));  // ! aba abba abbba abca abea

// console.log(str7.replace(/ab*a/g, '!')); //  ! ! ! ! abca abea
// console.log(str7.replace(/ab?a/g, '!'));  // ! ! abba abbba abca abea

// console.log(str7.replace(/(ab)+/g, '!')); //  aa !a !ba !bba !ca !ea
// console.log(str7.replace(/ab.a/g, '!')); //  aa aba ! abbba ! !
// console.log(str7.replace(/a..a/g, '!'));  // !ba ! abbba ! !
// console.log(str7.replace(/a.b/g, '!'));  // aa aba !a !ba abca abea



//8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.
let phone = '+375-29-3344498';
// let regexp = /^\+?([0-9]{2,4})?[()-.]?([0-9]{2,3})?[()-.]?([0-9]{5,7})$/gi;
// console.log(regexp.test(phone));  


let chekNumber = function (number) {
    let regexp = /^\+?([0-9]{2,4})?[()-.]?([0-9]{2,3})?[()-.]?([0-9]{5,7})$/gi;
    let chek = regexp.test(number); 
    if (chek) {
        return true;
    }
    else{return false;} 
}
console.log(chekNumber(phone));
//? - означает, что предшествующий ему символ может присутствовать или отсутствовать в строке.
//"^" , чтобы обозначить начало строки, "$" обозначает конец строки.  Запустив регулярное выражение с помощью "^" и не закончив его "$" , вы сопоставляете строки, которые начинаются с последовательности, соответствующей вашему регулярному выражению, но строки могут иметь что-то еще, затягивающее соответствующую последовательность.



//9 Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
// ++- весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// +++- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
//++- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов.
let email = 'alEx_19-87@gm.com';

let chekEmail = function (email) {
    let regexp = /^(([A-Za-z]{1}[-0-9A-z\.]{1,})@([-0-9A-Za-z]{2,11}\.)[-A-Za-z]{2,11})$/gi;
    let chek = regexp.test(email); 
    if (chek) {
        return true;
    }
    else{return false;} 
}
console.log(chekEmail(email));



//10. Вам дана Grid таблица состоящая из массивов, в которых лежат буквы, а также массив с картой чисел, который поможет составить слово из этой Grid таблицы.

let arr10 = [['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']];
console.log(arr10);
let number = [3, 4, 9];
let arr10New = arr10.flat();
console.log(arr10New);

// let word = function(arr1,arr2) {
//     let words = [];
//     if (arr1[i]==arr2[j]) {
//         words.push(arr1[i])
//     }
//     return words;
// }
// console.log(word(arr10New,number ));

// function gridIndex(grid, index) {

// }





//11 Здесь вам в аргументах даны 2 массива: Нужно преобразовать каждый массив удалив в нем повторяющиеся числа. После чего склеить эти два массива, отсортировать и вернуть как результат

let arr11 = [5, 2, 2,25, 3, 1, 0, 4, 5, 3, 10];
// let arr111 = Array.from(new Set(arr11));  //new Set(arr)- убирает одинаковые элементы
//  arr111.sort(function(d, z) {
//      return d-z
//  })
//  console.log(arr111)
let arr12 = [7,100, -4, 6, 8, 6, 9, 100, 7, -4, 9];
// let arr112 = Array.from(new Set(arr12));
// // console.log(...new Set(arr11));

// let d = arr111.concat(arr112);
// console.log(d)

// let d = new Set(arr11).concat(new Set(arr12));
// console.log(d)

function testit(a,b) {
    let result = Array.from(new Set(a)).concat(Array.from(new Set(b)));
    return (
        result.sort(function(d, z) {  //сортирует по возрастанию
            return d-z
        }))
}
console.log(testit(arr11,arr12));



























//https://habr.com/ru/post/545150/  Регулярные выражения
//https://ru.stackoverflow.com/questions/571772/%D0%A0%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8-email
// '/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u'

// ^( - параметр что маска начинается с начала текста
//     (
//         (  - этот блок отвечает за логин латиницей
//             [0-9A-Za-z]{1} - 1й символ только цифра или буква
//             [-0-9A-z\.]{1,} - в середине минимум один символ (буква, цифра, _, -, .) (не менее 1 символа)
//             [0-9A-Za-z]{1} - последний символ только цифра или буква
//         )
//         | - параметр "или/или" выбирает блок "латиница" или "кирилица"
//         (  - этот блок отвечает за логин кирилицей
//             [0-9А-Яа-я]{1} - 1й символ только цифра или буква
//             [-0-9А-я\.]{1,} - в середине минимум один символ (буква, цифра, _, -, .) (не менее 1 символа)
//             [0-9А-Яа-я]{1} - последний символ только цифра или буква
//         )
//     )
//     @ - обазятельное наличие значка разделяющего логин от домена
//     (
//         [-0-9A-Za-z]{1,} - блок может состоять из "-", цифр и букв (не менее 1 символа)
//         \. - наличие точки в конце блока
//     ){1,2} - допускается от 1 до 2 блоков по вышеукащанной маске (mail. , ru.mail.)
//     [-A-Za-z]{2,} - блок описывайющий домен вехнего уровня (ru, com, net, aero etc) (не менее 2 символов)
// )$ - параметр что маска заканчивается в конце текста
// /u - параметр позволяющий работать с кирилицей
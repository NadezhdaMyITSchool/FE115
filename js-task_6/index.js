// 1. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.


// let checkArray = function(start,end) {
//     if (start === end) {
//         return false
//     } else {
//         return true
//     }
// }

// let makeArray = function(start,end) {
//     let max=end, min=start;
//     let arr = [];
//     if (checkArray(start, end)) {
//         if (start >end) {
//             max = start;
//             min = end;
//         }
//         for (i = min; i<=max; i++) {
//             arr.push(i);
//         }
//         return arr
//     } else {
//         return 'Введите корректное значение'
//     }
// }

// let printArray = function(arr) {
//     console.log(arr)
// }
// let start = +prompt('Введите старт массива');
// let end = +prompt('Введите конец массива');
// printArray(makeArray(start, end));
// 2. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

// function isEven(a) {
//         if (a % 2 == 0) 
//                 return true;
//         else
//                 return false;
// }


// console.log(isEven(1022));

// 3. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

// function createArr3(array3) {
//      let newArr3  = array3.filter(isEven);
//      return newArr3;

// }

// console.log(createArr3([1, 7, 1024, 20, 30, 50, 35]));

// //Напишите ф-цию, которая рисует следующую пирамидку. Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом,например



// function buildPyramid(n) {
//     for(let i = 1; i<=n; i++){
//         let str = '';
//         for(let j = 0; j < i; j++) {
//             if (symbol == undefined || symbol == false || symbol == '') {
//                 str+= i;
//             } else {
//                 str+= symbol;
//             }
//         };
//         console.log(str+'\n')
//     }
// };
// let symbol = prompt('Можно ввести любой символ');
// buildPyramid(prompt('Введите число строк'));






// // 5. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.
// function createArr5(arr) {
// 	console.log(arr[i]);
// 	i++;

//     if (i < arr.length) createArr5(arr);
// }

// let i = 0;
// createArr5([2,4,6,7]);


// 6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр

// function getDigitsSum(digit) {
//     let sum = 0;
//     let str = String(digit);
//     for(let i = 0; i < str.length; i++) sum += Number(str[i]);
//     return sum;
//   }

// console.log(getDigitsSum(1895523));

// 7. Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи

// let arr7 = [];

// function yearSum() {
//   for (let i = 1; i <= 2022; i++) { 

//     if (getDigitsSum(i) == 13) { 
//       arr7.push(i);
//     }
//   }
//   return arr7;
// }
// console.log(yearSum());

// 8. Напишите функцию makeString(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.

// const makeString = (string, n) => {
//     let i = 0;
//     let result = '';
//     while (i < string.length) {
//       let numb = string[i];
//       if ((i + 1) % n === 0) {
//         result = `${result}${numb.toUpperCase()}`;
//       } else {
//         result = `${result}${numb}`;
//       }
//       i++;
//     }
  
//     return result;
//   };
// console.log(makeString('строка строка строка', 5));

// function makeString(string, numbletterTop) {
//     let arr8 = string.split('');
//     for (i = numbletterTop - 1; i < arr8.length; i = i + numbletterTop) {
//         arr8[i] = arr8[i].toUpperCase()
//     }
//     console.log(arr8);
//     return arr8.join('')
// }
// console.log(makeString("toptoptop", 3))


// //9. Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе

// function getLength(num) {
//      return num.toString().length;
//  }

//  console.log(getLength(74937567));

//1. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.


// function getRandom (max) {
//   

// }
// console.log(getRandom());



// 2. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

console.log('Задание 2!')


function isEven(num) {
    if(num % 2 == 0) {
        return true
    } else {
        return false
    }

}
console.log(isEven(5));


// //3. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.
console.log('Задание 3!')


function evenArr(arr) {
let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            newArr.push(arr[i]);    
     }
  }
  return newArr;
}

 console.log(evenArr([2, 4, 3, 5, 8, 10, 23, 54]));



//  4. Напишите ф-цию, которая рисует пирамидку (исп. вложенные
//     циклы)

let size = prompt('Введите размер');


    for (let i = 1; i <= size; i++) {
        let flag = '';
        for (var j = 1; j <= i; j++) {
            flag = flag + i;
            
        }
        document.write(flag + '<br>');
    }
   

// 5. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.
console.log('Задание 5!')


function func(arr) {
	console.log((arr[0]));
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}
func([1, 8, 2, 4, 3, 7, 6]);


// 6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр
console.log('Задание 6!')


function getDigitsSum(num) {
    let digit = String(num);
    let sum = 0;
    for(let i = 0; i < digit.length; i++) {
        sum += Number(digit[i]);
    }
    return sum;
}
console.log(getDigitsSum(23));

// 7. Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи

console.log('Задание 7!');
let year = [];
    for(let i = 1; i <= 2022; i++) {
        if(getDigitsSum(i) == 13) {
            year.push(i)
            
        }
    }
    console.log(year);


// 8. Напишите функцию makeString(), которая принимает на вход строку и возвращает её копию, у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.




// 9. Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе


console.log('Задание 9!');

function getDigitAmount(number) {


    return number.toString().length;
}
console.log(getDigitAmount(23254));


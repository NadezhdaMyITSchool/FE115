// 1. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].

let arrNum = [1, 2, 3, 4, 5];
let arrNumB = arrNum.slice(3,5);
console.log(arrNumB);

// 2. Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши

let fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let newFruits = fruits.map(function(fruit) {
        return fruit.replace("Apple", "Pear"); 
}
)
console.log(newFruits);

// 3. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Решить через Reduce и forEach
let array = [1,2,3,4,5,6,7,8];
let count = 0, sum = 0, flag = false;
array.forEach(
    item => {
        sum = sum + item;
        if (flag == false) count++;
        if (sum > 10) flag = true;
    }
)
console.log(count);
//Вариант 2
let array2 = [1, 2, 3, 0, 4, 5, 6];
let num2 = 1;
let result2 = array2.reduce(function(sum, elem) {
	if (sum > 10) {
		console.log(num2);
		return;
	} else {
		num2++;
		return sum + elem;
	}
}); 
// 4. Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"]. Сделать каждую первую букву заглавной, используя методы перебора массива
let names = ["rachel", "joe", "ben", "ross", "marcel"];
let namesUp = names.map(function(name) {
    return name[0].toUpperCase() + name.slice(1);
}
)
console.log(namesUp);

// 5. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. 
let justArr = [1, 2, 3, 4, 5, 6, 7];
let squareArr = justArr.map(function(elem) {
	return elem * elem;
});
console.log(squareArr);  

// 6. Дан массив с числами. Оставьте в нем только отрицательные числа.
let arrAll = [1, -1, 3, 2, -6, -2, 1, -2];

let negativeArr = arrAll.filter(function(number) {
  return number < 0;
});

console.log( negativeArr);

// 7. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arrStr = ['aaaa', 'bbbbbbbbbbb', 'ccccccccc', 'ddd', 'eeee', 'f', 'ggggggg'];
function findElem(item){return item.length > 5};
let newArr = arrStr.filter(findElem);
console.log(newArr);  

// 8. Напишите код, который определяет сумму и произведение значений массива
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8];
let sumResult = arr8.reduce(function(previous, current) {
    return previous + current;
  });
let mult = arr8.reduce(function(previous, current) {
    return previous * current;
  });
  console.log('Cумма - ' + sumResult + '  Произедение - ' + mult);

// 9. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел
let arrNumbers = [-2, -1, 3, 2, 5, -2, 1, -2];

function func(elem){return elem > 0};
let arrPositive = arrNumbers.filter(func);

let squareNumbers = arrPositive.map(function(elem) {
	return Math.sqrt(elem);
});
console.log('Квадратный корень из положительных чисел массива: ' + squareNumbers); 

// 10. Дан массив с числами. Найдите сумму этих чисел через reduce
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let plus = arr10.reduce(function(prev, curr) {
    return prev + curr;
  });
console.log("Сумма чисел массива - " + plus);

// 11. Изучить методы fill(), includes(), flatMap(), some(), every(), flat(), findIndex() и написать по одному примера использования данных функций с комментариями  
// .fill()
let arrFill = [1,2,3,5,8];
arrFill.fill(4,3); // заполняет массив четверками, начиная з индекса 3
console.log(arrFill);
// .includes()
let seasons = ['winter', 'spring', 'summer', 'autumn'];
console.log(seasons.includes('summer')); //возвращает true, т.к. элемент присутствует в массиве

// .flatMap()
let arrExample = [1, 2, 3, 4, 5];
console.log(arrExample.flatMap(x => [x * 2])); //метод преобразует массив через map и поднимает на 1 уровень вложенности с помощью flat

// Методы .every(), .some()
let arrSomeEvery = [1, -1, 2, -2, 3];
function isPositive(number) {
  return number > 0;
}
console.log(arrSomeEvery.every(isPositive) ); // false, не все положительные
console.log(arrSomeEvery.some(isPositive) ); // true, есть одно положительное
// .findIndex()

// 12. Написать функцию, которой передаем, имя, фамилия и возраст, и она возвращает строку "Привет, Иван Петров с возрастом 17 лет"
function hello(name, surname, age) {
    return "Привет, " + name + " " + surname + " с возрастом " + age + " лет";
}
console.log(hello("Иван", "Петров", 17));

// 13. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.
function solveThree(a,b,c) {
    return (a - b) / c;
}
console.log(solveThree(9,6,3));

// 14. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
let cube, square;
function changeNumber(a) {
    cube = a * a * a;
    square = a * a;
}
changeNumber(5);
console.log('куб числа - ' + cube + ', квадрат числа - ' + square)

// 15. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
console.log(min(2,5));
function max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(4,8));

// 16. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван). Через new Date()



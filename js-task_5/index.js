//1. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(3, 5));

//2. Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши

let arr2 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
arr2.splice(2, 1, "Pear");
arr2.splice(4, 1, "Pear");
console.log(arr2);

//3. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Решить через Reduce и forEach


//5. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. 

let arr5 = [1, 2, 3, 4, 5];
let newArr5 = [];
arr5.forEach(function(elem) {
	newArr5.push(elem * elem);
});
console.log(newArr5);

//6. Дан массив с числами. Оставьте в нем только отрицательные числа.

let arr6 = [1, -1, 2, -2, 3, -3];
function createArray(elem){return elem < 0};
let newArr6 = arr6.filter(createArray);
console.log(newArr6); 

//9. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел


let arr9 = [120, -1, 20, -2, 32, -3];
function createArray9(elem){return elem > 0};
let newArr9 = arr9.filter(createArray9);
console.log(newArr9); 
let result9 = newArr9.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result9); 


//12. Написать функцию, которой передаем, имя, фамилия и возраст, и она возвращает строку "Привет, Иван Петров с возрастом 17 лет" 

function helloUser(name, surname, age) {
    return 'Привет, ' + name + surname + ' с возрастом ' + age + ' лет!';
};

let string12 = helloUser( 'Иван ', 'Петров ', 17);
console.log(string12);

//13. Сделайте функцию, которая отнимает от первого числа второе и делит на
//третье. Числа передаются параметром.

function calculate(a, b, c) {
    return (a - b) / c;
}

let result13 = calculate(55, 5, 2);
console.log(result13);

//14. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

function calculate14(a) {
    return [a * a * a, a *a];
};

let result14 = calculate14(2);
console.log(result14);

//15. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

function min(a, b) {
    return a < b ? a : b;
}

let resultMin = min(25, 125);
console.log(resultMin);

function max(a, b) {
    return a > b ? a : b;
}

let resultMax = max(25, 125);
console.log(resultMax);

//16. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван). Через new Date(


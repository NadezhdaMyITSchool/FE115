/*1.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].8*/
/*let arr = [1, 2, 3, 4, 5];
arr2 = arr.slice(3, 5);
console.log( arr2)

let arr3 =[6,7,8]
arr2 = arr3.unshift(4,5)
console.log(arr3)*/

/*2.Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши*/

let fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
 fruits [2] =("Pear")
 fruits [4] =("Pear")
console.log (fruits)

/*array = [1, 2, 3, 4, 5, 5, 6];  
//3.Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let count=0, sum=0, flag = false;
array.forEach( item  => { 
    sum = sum + item;
    if (flag == false) count++ ;
    if (sum > 10) flag = true;
})
console.log(sum);
console.log(flag)

console.log(count)*/

/*4.Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"]. Сделать каждую первую букву заглавной, используя методы перебора массива*/

let words = ["rachel", "joe", "ben", "ross", "marcel"];
for (let word of words) {
    word = word.charAt(0).toUpperCase() + word.substr(1);
    console.log(word);
}

/*5.Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.*/
/*let arrNum = [1,2,3,4,5];
 let newArr = [];
arrNum.forEach(function (item) {
    newArr.push(item * item);
    
})
console.log(newArr)*/

/*6.Дан массив с числами. Оставьте в нем только отрицательные числа.*/
/*array = [1, -2, 3, -4, 5, -6 , 7];
function negative (elem) { return elem < 0};
let Newarr = array.filter(negative);
console.log(Newarr)*/

/*7 Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.*/
/*let array = ["1", "2", "3", "4", "5", "6", "7"];
function string (item) { return item > 5};
let arrNew = array.filter(string);
console.log(arrNew)*/

/*8Напишите код, который определяет сумму и произведение значений массива*/

/*let arrSum =[1, 2, 3, 4, 5];
let arrayNew = [];
let arrayNew2 =[];
arrSum.forEach(function (item) {
    arrayNew.push(item + item);
    arrayNew2.push(item * item);
    
})
console.log(arrayNew)
console.log(arrayNew2)*/

/* 9. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел*/

let arrMos=[1, -2, 3, -4, 5, 6, -7, 8, 9];
let newArr = []
function positiv (item) { return item > 0};
let arrNew = arrMos.filter(positiv);
console.log(arrNew)
console.log(arrNew.map(item => Math.sqrt(item)));
    


/*10.Дан массив с числами. Найдите сумму этих чисел через reduce*/
array = [1, 2, 3, 4, 5, 6 , 7];
let result = array.reduce (function (sum, current) {
    return sum + current;
    
},0);
console.log(result)

/*Изучить методы fill(), includes(), flatMap(), some(), every(), flat(), findIndex() и написать по одному примера использования данных функций с комментариями*/
// МЕТОД fill(value, start, end)
/*Метод fill() заполняет все элементы массива статическим значением.
Можно указать индекс для начала и окончания fill(). По умолчанию он изменяет весь массив.*/
let salary= [100, 200, 300, 400];
salary.fill(800,2,4); 

console.log(salary)
//МЕТОД includes(searchElement, fromIndex )
/*метод includes()проверяет содержит ли массив искомый элемент. В случае нахождения элемента метод возвращает логическое значение true, в обратном случае false. а не числовое значение (индекс элемента, или -1, если элемент не найден).*/
var x = [1, 2, 3, "a", "b", "c"]; // инициализируем переменную, содержащую массив

x.includes( "a" ); // возвращаемое значение true
x.includes( "d" ); // возвращаемое значение false (значение не найдено в массиве)
x.includes( "b", 3 ); // возвращаемое значение true
x.includes( 2, 2 ); // возвращаемое значение false (значение не найдено в массиве)
x.includes( 2, 1 ); // возвращаемое значение true
x.includes( "a", -2 ); // возвращаемое значение false (значение не найдено в массиве)
x.includes( "a", -3 ); // возвращаемое значение true

//МЕТОД flatMap()  duplicate, которая принимает значение и возвращает массив из двух элементов, каждый из которых повторяет значение. 
//[2, 3, 4].flatMap(duplicate); 
// [2, 2, 3, 3, 4, 4]

//МЕТОД some() позволяет проверить соответствует ли по крайней мере один элемент в массиве условию, заданному в передаваемой функции.
let arr = [-1, -2, -3, 4];

let check = arr.some(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(check);

//МЕТОД every() проверяет элементы массива в соответствии с переданной функцией. Эта функция передается параметром метода и выполняется для каждого элемента массива.
/*let arr = [1, 2, 3, 4, 5];

let check = arr.every(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(check);*/

//МЕТОД flat()позволяет работать с вложенными массивами. 
let arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

/* findIndex() возвращает значение индекса элемента в массиве, который соответствует условию в переданной функции, или -1, если ни один элемент не удовлетворяет условию в переданной функции.*/

/*let arr = [2, 4, 6, 8, 9, 10, 11, 12];
function isOdd(i) {
  return i % 2 !== 0;
}
alert(arr.findIndex(isOdd));*/



//12.Написать функцию, которой передаем, имя, фамилия и возраст, и она возвращает строку "Привет, Иван Петров с возрастом 17 лет" 



function getName() {
    let name = prompt('Как вас зовут?')
    let firstName = prompt('Твоя фамилия?')
     let age = prompt( 'Сколько тебе лет?')
   alert("Привет, " + name + firstName + " c возрастом " + age + " лет ")

}
getName()

/*13.Сделайте функцию, которая отнимает от первого числа второе и делит на
третье. Числа передаются параметром.*/

function sum(a, b, c) {
    return (a - b) / c;
}

let d = sum(20, 15 , 10);
console.log(d)

//14 Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.
function cube(a, b, c) {
	return a * b * c
}

let f = cube (40, 10 , 20);
console.log(f)

cube()
//15. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
//16. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван). Через new Date()
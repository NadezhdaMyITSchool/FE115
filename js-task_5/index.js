// 1. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(3);
console.log(arr2);


// 2. Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши

let arrFruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
arrFruits.splice(2, 1, "Pear");
arrFruits.splice(4, 1, "Pear");
console.log(arrFruits);


// 3. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Решить через Reduce и forEach
array = [1, 2, 3, 4, 5, 5, 6];
let count=0, sum=0, flag = false;
array.forEach( item  => { 
    sum = sum + item;
    if (flag == false) count++ ;
    if (sum > 10) flag = true;
})
console.log(count);



// 4. Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"]. Сделать каждую первую букву заглавной, используя методы перебора массива
let arrName = ["rachel", "joe", "ben", "ross", "marcel"];
    res = [];
    for (let i = 0; i < arrName.length; i++){
        arrName[i] = arrName[i].charAt(0).toUpperCase() + arrName[i].slice(1);
        res += arrName[i].split('-'); 
    }
console.log(res);

// 5. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
let arrNum = [2, 3, 4, 5, 6];
let result = arrNum.map(x => x * x);
console.log(result);

// 6. Дан массив с числами. Оставьте в нем только отрицательные числа.
let arrNum6 = [-2, -4, -5, 3, 4, 5, -10, 1];
let arrMin = arrNum6.filter( item => item < 0);
console.log(arrMin);


// 7. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let str = ["Rice", "Potato", "Pasta", "Bean"];
function five(elem){return elem.length > 5};
let newStr = str.filter(five);
console.log(newStr);  


// 8. Напишите код, который определяет сумму и произведение значений массива

let arrNum8 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrNum8.reduce( (itemLeft, itemRight) => itemLeft + itemRight))
console.log(arrNum8.reduce( (itemLeft, itemRight) => itemLeft * itemRight))

//9. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел

let arrNum9 = [-2, 3, -4, 5, -6, 7, -8, 9, 10];
let arr9 = arrNum9.filter( item => item > 0);
console.log(arr9);
arr9.map(Math.sqrt).forEach(function(num) {
    console.log(num); 
  });



//10. Дан массив с числами. Найдите сумму этих чисел через reduce
let arrNum10 = [2, 3, 4, 8, 6, 7, 8, 9, 10];
let arr10 = arrNum10.reduce( ( itemLeft, itemRight) => itemLeft + itemRight);
console.log(arr10);


//11. Изучить методы fill(), includes(), flatMap(), some(), every(), flat(), findIndex() и написать по одному примера использования данных функций с комментариями 
let arrF = [2, 5, 7, 'a', 'b', 'c'];
console.log(arrF.fill('d', 2, 4)); // метод fill() заполняет все элементы массива одним значением, изменяя существующий  массив, а не возвращая новый.При 
//необходимости указываем стартовый инедекс и конечный. В данном примере элементы массива от 2 индекса до 4 заменяются на 'd'.
let arrI = [2, 6, 1, 'd', 'f', 'g'];
arr.includes(5) // true
arr.includes(8) // false
arr.includes('a') //false
arr.includes('f') // true 
//Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.В качестве второго условия можно указать индекс, если индекс больше
// длины массива, то поиск не будет произведен.
arr.includes('g', 6) //false


let arrM = [2, 3, 4, 8, 6, 7, 8, 9, 10];
console.log(arrM.flatMap(x => x * 2)); // Возводим в квадрат с помощью flatMap.Метод flatMap() сначала применяет функцию к каждому элементу, 
//                                        а затем преобразует полученный результат в плоскую структуру и помещает в новый массив

    

let arrS = [10, 20, 30, 90,];
console.log(arrS.some( currentValue => currentValue > 100 ));
console.log(arrS.some( currentValue => currentValue < 100 ));// позволяет проверить соответствует ли по крайней мере один элемент в массиве условию, заданному в передаваемой функции.
// В первом случае выдаст fals т.к в массиве нет элементов больше 100, во втором true т.к есть элементы меньше 100

let arrE = [0, 2, 3, 4, 2];
console.log(arrE.every(currentValue => currentValue > 0)); //false не все элементы больше 0
console.log(arrE.every(currentValue => currentValue >= 0)); //true все элементы большие либо равны 0
// Метод every похож на метод some, но в случае every соотвествовать условию должен каждый  элемент массива.


let arrFl = [1, [2, [3]]];
console.log(arrFl.flat(2)); // Достает вложенные массивы и выводит их на 1 уровень.
console.log(arrFl.flat(Infinity)); // Если глубина вложенности не известна можно достать вложенные массивы при помощи Infinity.
console.log(arrFl.flat()); // Дефолтный уровень - 1.

let arrInd = [1, 2, 3, 4, 5];
console.log(arrInd.findIndex( currentValue => currentValue == 4)) // Будет возвращена 3, т.к 4 находится в массиве под 3 инедксом.
console.log(arrInd.findIndex( currentValue => currentValue == 9)) // Возвращает -1, т.к в массиве нет элемента соответствующего условию.


// 12. Написать функцию, которой передаем, имя, фамилия и возраст, и она возвращает строку "Привет, Иван Петров с возрастом 17 лет"

function initial(name, lastName, age, space) {
    /*let name = 'Иван ';
    let lastName = 'Петров ';
    let age = 17;
    let message = 'Привет, ' + name + lastName + 'c возрастом ' + age + ' лет';
    console.log(message);*/
    return 'Привет, ' + name + space + lastName  + ' с возрастом ' + age + ' лет'
}
console.log(initial('Иван', 'Петров', '17', ' '));

// 13. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.
function math(a, b, c){
    return (a - b) / c
}
console.log(math(20, 8, 2));

// 14. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

let cube = function (a) {
    a = Math.pow(3, 3);
    // a = a * a * a;
    return a; 
}
console.log(cube());

let squ = function (b) {
    b = b * b;
    return b;
}
console.log(squ(2))


// 15. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.


let min = function (a, b) {
    if(a < b){
        return a;
    } else {
        return b;
    }
}
console.log(min(2, 8));

let max = function (a, b) {
    if(a > b){
        return a;
    } else {
        return b;
    }
}
console.log(max(2, 8));

// 16. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван). Через new Date()


let time = new Date('January 23, 2022 03:24:00');
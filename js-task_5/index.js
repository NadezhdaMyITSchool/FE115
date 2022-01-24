
                                                                //не решены 4 и 16(не работает)


//Задание 1. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].

console.log('            ЗАДАЧА 1');

let arr = [1, 2, 3, 4, 5];
let arr2 = arr.slice(3,5);

console.log(arr2);


//Задание 2. Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши

console.log('            ЗАДАЧА 2');

let arr2_1 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
for (let i = 0; i <= arr.length; i++ ) {
    if (arr2_1[i] == "Apple" ) arr2_1[i] = "Pear";
    else continue;
}

console.log(arr2_1);

//Задание 3. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Решить через Reduce и forEach

console.log('            ЗАДАЧА 3');

                            /*Вариант 1. через цикл и PUSH 

let sum = 0;
let arr3 = [1,2,3,4,5,6,7,8,9,9,10];
let arr3_2 = [];

for (let i = 0; i <= arr.length; i++ ) {
    sum+=arr3[i];
    if(sum<10) {
        arr3_2.push(arr3[i]);
    }
}

let result = arr3_2.length + 1;
console.log(result);*/

                            //Вариант 2. через forEach

let arr3 = [1,4,2,7,9,12,11];
let arr3_2 = [];

console.log('Исходный массив  ' + arr3);

arr3.forEach(function(item) {
	arr3_2.push(item + item < 10);              //??? можно ли через forEach сделать так, чтобы добавляло элемент, а не true false ???
});

let num = 1;
for (let i = 0; i <= arr3_2.length; i++ ) {
    if(arr3_2[i] == true) {
        num = num + 1;
    } else continue
}

console.log(' количество чисел из массива, сумма которых больше 10 =  ' + num );


                                //Вариант 3. через REDUCE

/*let arr3 = [1,4,2,7,9,12,11];
let num = 1;
let result = arr3.reduce(function(sum, item) {
	if (sum > 10) {
		console.log(num);
		return;
	} else {
		num++;
		return sum + item;
	}
});*/



//Задание 4. Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"]. Сделать каждую первую букву заглавной, используя методы перебора массива

console.log('            ЗАДАЧА 4');


//Задание 5. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.

console.log('            ЗАДАЧА 5');

let arr5 = [1,4,7,9,12,11];
let arr5_2 = [];

console.log('Исходный массив  ' + arr5);

arr5.forEach(function(item) {
	arr5_2.push(item * item);
});

console.log(' массив квадратов  ' + arr5_2);


//Задание 6. Дан массив с числами. Оставьте в нем только отрицательные числа.

console.log('            ЗАДАЧА 6');

let arr6 = [1,-4,-7,9,12,-11];
let arr6_2 = arr6.filter(item => item < 0)

console.log(arr6_2);

//Задание 7. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

console.log('            ЗАДАЧА 7');

let arr7 = ['Однажды', 'в','студеную', 'зимнюю', 'пору', 'Я', 'из', 'лесу', 'вышел','был'];

function FilterArr7(item){return item.length < 5};
let arr7_2 = arr7.filter(FilterArr7);
console.log(arr7_2);



/*let arr7_2 = [];

arr7.forEach(function(item) {
	arr7_2.push(item.length > 5);                       ??? можно ли через forEach сделать так, чтобы добавляло элемент, а не true false ???
});

console.log(arr7_2)*/


//Задание 8. Напишите код, который определяет сумму и произведение значений массива

console.log('            ЗАДАЧА 8');

let arr8 = [2,4,6,8,5];
let arrSum = arr8.reduce((itemLeft, itemRight) => itemLeft + itemRight);
let arrProizv = arr8.reduce((itemLeft, itemRight) => itemLeft * itemRight);

console.log('Первоначальный массив = ' + arr8);
console.log('Сумма = ' + arrSum);
console.log('Произведение= ' + arrProizv);

//Задание 9. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел

console.log('            ЗАДАЧА 9');

let arr9 = [1,-4,-7,9,12,-11];
let arr9_2 = arr9.filter(item => item > 0);
let arr9_3 = [];

arr9_2.forEach(function(item) {
	arr9_3.push(Math.pow(item, 1/2));
});


console.log('Исходный массив  ' + arr9);
console.log('массив положительных чисел  ' + arr9_2);
console.log('массив корней  ' + arr9_3);


//Задание 10. Дан массив с числами. Найдите сумму этих чисел через reduce

console.log('            ЗАДАЧА 10');

let arr10 = [1,3,6,8,5];
let arrSum10 = arr10.reduce((itemLeft, itemRight) => itemLeft + itemRight);
console.log('Первоначальный массив = ' + arr10);
console.log('Сумма = ' + arrSum10);


//Задание 11. Изучить методы fill(), includes(), flatMap(), some(), every(), flat(), findIndex() и написать по одному примера использования данных функций с комментариями   

                        //МЕТОД FILL
//позволяет заполнить все элементы массива одним значением, при необходимости задавая значение начального индекса с которого начинается заполнение и конечное значение индекса, которым заканчивается заполнение.

// изменяет существующий массив, а не возвращает новый.

//СИНТАКСИС array.fill( value, start(индекс. необяз.), end(индекс. необяз.) )

let arrFill = [1, 2, 3, "a", "b", "c"];

arrFill.fill( 0 ); // возвращаемое значение [0, 0, 0, 0, 0, 0]
arrFill.fill( "z", 2, 4 ); // возвращаемое значение [1, 2, "z", "z", "b", "c"] - второй по индексу включительно, четвертый(end) - нет

                        console.log('МЕТОД INCLUDES')

//includes делает проверку на наличие элемента.Необходимо задать параметр для includes, и он проведет поиск элемента по массиву.

let arrIncludes = ['football', 'archery', 'judo']; 
let result = arrIncludes.includes('football');
console.log(result); // true

                        //МЕТОД flatMap

//сначала применяет функцию map к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив.

                //пример 1

let arrFlatMap = [1, 2, 3, 4];

arrFlatMap.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arrFlatMap.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// выравнивается только один уровень
arrFlatMap.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

                            //пример 2

let arrFlatMap2 = ["it's Sunny in", "", "California"];

arrFlatMap2.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arrFlatMap2.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]

                        console.log('МЕТОД some');

//проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

//например проверить, является ли какой-либо элемент массива четным

let arrSome = [1, 2, 3, 4, 5];

// checks whether an element is even
let even = (item) => item % 2 === 0;

console.log(arrSome.some(even));
// expected output: true

                        console.log('МЕТОД every');

// проверяет, удовлетворяют ли ВСЕ элементы массива условию, заданному в передаваемой функции.

function isBigEnough(item, index, array) {
    return item >= 10;
  }

  let arrEvery1 = [12, 5, 8, 130, 44];
  let arrEvery2 = [12, 54, 18, 130, 44];

  console.log(arrEvery1.every(isBigEnough));   // false
  console.log(arrEvery2.every(isBigEnough)); //true

                        console.log('МЕТОД flat')

// позволяет работать с вложенными массивами. Метод Array.prototype.flat() достаёт вложенные массивы и переносит их на уровень, который определяет разработчик. Дефолтный уровень — 1.

//Если глубина вложенности неизвестна, достать вложенные массивы можно с помощью аргумента Infinity. В этом случае метод рекурсивно обходит массив и достает все вложенные элементы независимо от глубины.

let arrFlat = [1,2,3,4, ['Абрикос','Персик','Арбуз', [true,true,false,false]]];
console.log('Изначальный массив с вложенностью  ' + arrFlat);

console.log('Массив после преобразований  ' + arrFlat.flat(Infinity));

                        //МЕТОД findIndex

//Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.

//метод find(), который возвращает значение найденного в массиве элемента вместо его индекса.

let arrFindIndex = [1, -2, 3, -4]; // инициализируем переменную, содержащую массив числовых значений 

arrFindIndex.findIndex( // находим индекс необходимого элемента в массиве
  function checkNumber( currentValue ) {
    return currentValue == 3; // проверяем является ли текущее значение равное трем
  } // если условие выполняется, то возвращаем индекс этого элемента, если достигнут конец массива, то -1
);// возвращаемое значение 2

// аналогично с использованием стрелочной функции
arrFindIndex.findIndex( currentValue => currentValue == 3 ); // возвращаемое значение  2
arrFindIndex.findIndex( currentValue => currentValue == -3 ); // возвращаемое значение -1



//Задание 12.  Написать функцию, которой передаем, имя, фамилия и возраст, и она возвращает строку "Привет, Иван Петров с возрастом 17 лет" 

console.log('            ЗАДАЧА 12');

function checkPerson(name,surname,age) {
    return 'Привет,  ' + name + '     ' + surname + '  с возрастом  ' + age + '  лет';
}

console.log (checkPerson('Паша','Иванов',23));


//Задание 13. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.

console.log('            ЗАДАЧА 13');

function calcThree(a,b,c) {
    return console.log(result = (a - b)/c);
}

console.log (calcThree(10,2,4));
console.log (calcThree(40,20,5)); //                         ???после каждого результата пишет undefined????


//Задание 14. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

console.log('            ЗАДАЧА 14');

function calcSqrt(k) {
    let result1 = Math.pow(k, 2);
    let result2 = Math.pow(k, 3);
    return console.log('Квадрат числа:  ' + result1 + '  Куб числа:  ' +  result2);
}

console.log(calcSqrt(3));
console.log(calcSqrt(5));
console.log(calcSqrt(10));

//Задание 15. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.

console.log('            ЗАДАЧА 15');

function max(a,b) {
    if (a > b) {
        return console.log(a + ' больше  '+ b)
    } else {
        return console.log(b + ' больше  '+ a)
    }
}

function min(a,b) {
    if (a < b) {
        return console.log(a + ' меньше  '+ b)
    } else {
        return console.log(b + ' меньше  '+ a)
    } 
}

console.log(max(3,6));
console.log(max(20,6));
console.log(min(3,6));
console.log(max(23,6));

//Задание 16. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван). Через new Date()


function Hello(name) {
    let day = new Date(); 
    let hour = day.getHours(); 
    if (hour >= 5 && hour < 12) console.log('Доброе утро' + name) ; 
    else { 
        if (hour >= 12 && hour < 18) console.log('Доброе утро' + name); 
        else { 
                if (hour >= 18 && hour < 24) console.log('Доброе утро' + name); 
                else { 
                    if (hour >= 0 && hour < 5) console.log('Доброе утро' + name); 
                     } 
            } 
    } 
}

console.log(Hello('  Андрей  '));

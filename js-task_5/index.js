//1. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].

let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.slice(3, 5));

//2. Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши

let arr2 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
arr2.splice(2, 1, "Pear");
arr2.splice(4, 1, "Pear");
console.log(arr2);

//3. Дан массив с числами Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Решить через Reduce и forEach

let arr3 = [1, 9, 2, 2, 3, 1, 2, 8];
let num3 = 1;
let result3 = arr3.reduce(function(sum, item) {
    if (sum > 10) {
        console.log(num3);
        return;
    } else {
        num3 ++;
        return sum + item;
    }
});

let arr3_3 = [5, 6, 3, 8];
let count=0, sum=0, flag = false;
arr3_3.forEach( item  => { 
    sum = sum + item;
    if (flag == false) count++ ;
    if (sum > 10) flag = true;
})

console.log('чтобы в сумме получилось больше 10ти, нужно сложить ' + count + ' чисел');

// 4. Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"]. Сделать каждую первую букву заглавной, используя методы перебора массива

let arr4 = ["rachel", "joe", "ben", "ross", "marcel"];
let friends = arr4.map(word => {
    let newWord = word[0].toUpperCase() + word.slice(1);
    return newWord;
  });

  console.log(friends);


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

//7. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arr7 = ['word', 'wordword', 'wordwordword', 'word'];
function calcLength(item) {
    return item.length > 5;
}

let newArr7 = arr7.filter(calcLength);
console.log(newArr7);

// 8. Напишите код, который определяет сумму и произведение значений массива

let arr8 = [1, 2, 3, 4, 5];
let sum8 = arr8.reduce(function(itemLeft, itemRight) {
    return itemLeft + itemRight;
})

let multiply8 = arr8.reduce(function(itemLeft, itemRight) {
    return itemLeft * itemRight;
})

console.log('Сумма значений массива : ' + sum8 + ' Произведение значений массива : ' + multiply8);

//9. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел


let arr9 = [120, -1, 20, -2, 32, -3];
function createArray9(elem){return elem > 0};
let newArr9 = arr9.filter(createArray9);
console.log(newArr9); 
let result9 = newArr9.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result9); 

// 10. Дан массив с числами. Найдите сумму этих чисел через reduce

let arr10 = [5, 6, 8, 255, 6];
let result10 = arr10.reduce(function(sum, item) {
    return sum + item;
});
console.log(result10);


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

//16. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван). Через new Date()

let hour = (new Date()).getHours();

function hello(name) {
    if (hour > 23 || hour < 7) {
         console.log('Доброй ночи, ' + name);
    } else if (hour > 6 && hour < 12) {
         console.log('Доброе утро, ' + name);
    } else if (hour > 11 && hour < 19) {
        console.log('Добрый день, ' + name);
    } else {
        console.log('Добрый вечер, ' + name);
    }
}

hello('Иван');

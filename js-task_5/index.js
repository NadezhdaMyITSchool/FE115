// Задача 1

let arr1 = [1, 2, 3, 4, 5],
    arrNew = [];
    arrNew = arr1.slice(3,5);
    console.log(arrNew);

// Задача 2

let arr2 = ["Banana", "Orange", "Apple", "Mango", "Apple"],
    arrOf = [];
arr2.forEach(item => {
    if (item === "Apple") {
        arrOf.push("Pear"); }
    else {
    arrOf.push(item);}
    }
    );
    console.log('Задача 2: ' + arrOf);
//     if (item === "Apple") {
//       return item = "Pear"}
//     });
// console.log(arr2);

// for (i=0; i<=arr2.length; i++) {
//     if (arr2[i] === "Apple") {
//         arr2[i] = "Pear";
//     } else continue;
// }
// console.log(arr2);

// Задача 3
let arr3 = [6, 2, 1, 7, 15]
let count = 0, summ = 0, flag = false;
arr3.forEach(item => {
    summ = summ + item;
    if (flag == false) count++;
    if (summ > 10) flag = true;
})
console.log('Задача 3: ' + count);

// Задача 4 !!!!!!!!!!!

// let arr4 = ["rachel", "joe", "ben", "ross", "marcel"];
// arr4.forEach(item => item(0).toUpperCase() + arr4.slice(1));
// console.log(arr4);

// Задача 5

let arr5 = [10, 7, 5, 12, 3],
    arrPow = [];
    arrPow = arr5.map(item => Math.pow(item, 2));
    console.log('Задача 5: ' + arrPow);

// Задача 6

let arr6 = [10, 7, -5, 12, -3],
    arrOtr = [];
    arrOtr = arr6.filter (item => {
      if (item < 0) { return item}
    });
    console.log('Задача 6: ' + arrOtr);

// for (i=0; i<=arr6.length; i++) { 
//     if(arr6[i]<0) {
//         arrOtr.push(arr6[i]);
//     }
//     else continue;
// }
// console.log(arrOtr);

// Задача 7

let arr7 = ['apple', 'pear', 'orange', 'exemple', 'word', 'present'];
let result = arr7.filter(arr7 => arr7.length > 5);
console.log('Задача 7: ' + result);

// Задача 8

let arr8 = [6, 2, 1, 7, 15];
let sum = arr8.reduce((prev, curr) => prev + curr);
let product = arr8.reduce((prev, curr) => prev * curr);

console.log (" Сумма : "+sum +"    " + "Произведение : " + product);

// Задача 9 ??
let arr9 = [144, -121, 9, 16, -25];
let pol = arr9.map(arr9 => arr9 > 0);
let arrpSqrt = arr9.map(item => Math.sqrt(item));
console.log('Задача 9: ' + arrpSqrt);


// Задача 10

let arr10 = [17, 5, 1, 12, 3, 9, 6, 20]
let prod = arr10.reduce((prev, curr) => prev + curr);
console.log('Задача 10: ' + prod );


// Задача 11
let arr11 = [1, 12, 10, 8, 99, 36];

// Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.

// arr11.fill(9);
// console.log('Метод fill: ' + arr11 );


// Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.

// console.log('Метод includes: ' + arr11.includes(2));

//Метод flatMap() сначала применяет функцию к каждому элементу, а затем преобразует полученный результат в плоскую структуру и помещает в новый массив. Это идентично map функции, с последующим применением функции flat с параметром depth ( глубина ) равным 1, но flatMap часто бывает полезным, так как работает немного более эффективно.

// arr11.flatMap(x => [x * 2]);
// console.log('Метод flatMap: ' + arr11 );


//Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

// function isBiggerThan10(element, index, array) {
//     return element > 10;
//   }
//   console.log('Метод some: ' + arr11.some(isBiggerThan10));

//Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

function isBiggerThan10(element, index, array) {
        return element >= 10;
      }
      console.log('Метод every: ' + arr11.every(isBiggerThan10));

//Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.



// Задача 12

function str (name, surname, age) {
    document.write(`Привет, ${name} ${surname} с возрастом ${age} лет`);
}
str('Oksana', 'Plakhotskaya', 28);

// Задача 13

let ti;
function fn (a, b, c) {
     ti = (a-b)/c;
}
fn(100, 50, 2);
console.log (ti);

// Задача 14
let kub, kv;
function numb (a) {
     kub = Math.pow(a, 3);
     kv = Math.pow(a, 2);
}
numb(2);
console.log ('Задача 14: kub ' + kub, ' kv ' + kv);

// Задача 15


function max (a, b) {
    if (a>b) {
        console.log('max: ' + a, 'min:' + b);
    } else if(a<b) { console.log('max: ' + b, 'min:' + a);}

}
max(25, 10);

// Задача 16

let name1;
function hello (name1) {
    let date = new Date(),
    h = date.getHours();
    console.log(h);
    switch (h) {
        case 6:
        case 7:
        case 8: 
        case 9:
        case 10:
        case 11:
        case 12:
          console.log('Доброе утро'  + name1);
          break;
        case 13:
        case 14:
        case 15: 
        case 16:
        case 17:
        case 18:
          console.log('Добрый день ' + name1);
          break;
        case 19:
        case 20:
        case 21: 
        case 22:
        case 23:
          console.log('Добрый вечер ' +  name1);
          break;
          case 6:
        case 24:
        case 1: 
        case 2:
        case 3:
        case 4:
        case 5:
            console.log('Доброй ночи ' + name1);
            break;
    }
}
hello('Oksana');

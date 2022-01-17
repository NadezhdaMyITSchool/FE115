//Блок JS 1, не решено 6-10, баги во 2

//Задача 2

console.log('Задача 2');

let a1 = 5 % 3;
let a2 = 3 % 5;
let a3 = 5 + '3'; 
//let a4 = '5' – 3;
let a5 = 75 + 'кг';
let a6 = 785 * 653;
let a7 = 100 / 25;
let a8 = 0 * 0;
let a9 = 0 / 2;
let a10 = 89 / 0;
let a11 = 98 + 2;
//let a12 = 5 – 98;
let a13 = (8 + 56 * 4) / 5;
let a14 = (9 - 12) * 7 / (5 + 2);
let a15 = +"123";
let a16 = 1 || 0;
let a17 = false || true;
let a18 = true > 0;

console.log("переменная a1=  " + a1 + "  тип переменной a1   " + typeof a1);
console.log("переменная a2=  " + a2 + "  тип переменной a2   " + typeof a2);
console.log("переменная a3=  " + a3 + "  тип переменной a3   " + typeof a3);
//console.log("переменная a4=  " + a4 + "тип переменной a4   " + typeof a4);
console.log("переменная a5=  " + a5 + "  тип переменной a5   " + typeof a5);
console.log("переменная a6=" + a6 + "  тип переменной a6   " + typeof a6);
console.log("переменная a7=  " + a7 +"  тип переменной a7   " + typeof a7);
console.log("переменная a8=  " + a8 +"  тип переменной a8   " + typeof a8);
console.log("переменная a9" + a9 + "  тип переменной a9   " + typeof a9);
console.log("переменная a10" + a10 + "  тип переменной a10   " + typeof a10);
console.log("переменная a11 = " + a11+ "  тип переменной a11   " + typeof a11);
//console.log("переменная a12=  " + a12 + "  тип переменной a12   " + typeof a12);
console.log("переменная a13=  " + a13 + "  тип переменной a13   " + typeof a13);
console.log("переменная a14=  " + a14 + "  тип переменной a14   " + typeof a14);
console.log("переменная a15=  " + a15 + "  тип переменной a15   " + typeof a15);
console.log("переменная a16=  " + a16 + "  тип переменной a16   " + typeof a16);
console.log("переменная a17=  " + a17 + "  тип переменной a17   " + typeof a17);
console.log("переменная a18=  " + a18 + "  тип переменной a18   " + typeof a18);

//Задача 3
//Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром основания равным значению переменной a7 из задания 2, результат поместите в переменную VCilindra

console.log('Задача 3');

let h = 10; //м
let D = a7;


let VCilindra = (3.14 * Math.pow(D,2)) / (4 * h);

console.log(VCilindra + "м");

//Задача 4. Найдите площадь круга (SKruga) с радиусом 5см (r)

console.log('Задача 4');

let r = 5; //см
let SKruga = 3.14 * Math.pow(r,2);

console.log(SKruga + "cм");

//Задача 5
//Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см(h)

console.log('Задача 5');

let a = 5; //см
let b = 7; //см
let h5 = 10; //см

let STrap = 0.5 * h5 * (a+b);

console.log(STrap + "cм");

//Задача 6. Pешите уравнения (найдите неизвестный x), где a = 8, b = 3: a+2(x-b)=16  ;  b(x+15)=a+6x;   x+2x+ax+bx=23780


//Задача 7

//let name = prompt('Введите имя')

function greet(name) {
    return `Hello, ${name} how are you doing today?`;
  } 

//Задача 9
let l = prompt('Введите длинну');
let l = prompt('Введите ширину');
const areaOrPerimeter = function(l , w) {
    return `Периметр треугольника = `, l*w ;
  };

//Задача 10
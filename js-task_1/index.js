//Задача 2
let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;
a1 = 5 % 3;
a2 = 3 % 5;
a3 = 5 + '3';
a4 = '5'-3;
a5 = 75 + 'кг';
a6 = 785 * 653;
a7 = 100 / 25;
a8 = 0 * 0;
a9 = 0 / 2;
a10 = 89 / 0;
a11 = 98 + 2;
a12 = 5-98;
a13 = (8 + 56 * 4) / 5;
a14 = (9 - 12) * 7 / (5 + 2);
a15 = +"123";
a16 = 1 || 0;
a17 = false || true;
a18 = true > 0.
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
console.log(typeof a1,typeof a2,typeof a3,typeof a4,typeof a5,typeof a6,typeof a7,typeof a8,typeof a9,typeof a10,typeof a11,typeof a12,typeof a13,typeof a14,typeof a15,typeof a16,typeof a17,typeof a18);

    //Задача 3

let VCilindra,
    h = 10;

    VCilindra = a7*h;
    console.log('Задача 3 Ответ:', VCilindra);

//Задача 4
let SKruga,
    r = 5;
    p = 3.14

    SKruga = p * Math.pow(r, 2);
    console.log('Задача 4 Ответ:', SKruga);

    

    //Задача 5

    let STrap,
        a = 5,
        b = 7;

        STrap = ((a+b)/2)*h;  
        console.log('Задача 5 Ответ:', STrap);
  

    //Задача 6
    let x;
        a = 8, 
        b = 3;
        x = (16+2*b-a)/2;
        // x = (a-15*b)/(b-6);
        // x = 23780/(3+a+b)
        console.log('Задача 6 Ответ:', x);


//Задача 8

function greet(name){
    console.log( `"Hello, ${name}, how are you doing today?"`);
 }
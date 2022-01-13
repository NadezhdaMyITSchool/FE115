//Задача 1
/*for (i=1; i<=50; i++) {
    console.log(i)  
}
i=1;
while (i<=50) {
    console.log(i);
    i++
}*/
/*do {
    console.log(i);
    i++;
} while (i<=50)
*/

/*for (i=35; i>=8; i--) {
    console.log(i)  
}*/

/*for (i=35; i>=8; i--) {
    console.log(i)  
}
i=35;
while (i>=8) {
    console.log(i);
    i--
}*/

/*i=35;
do {
    console.log(i);
    i--;
} while (i>=8)
*/



//Задача 2
/*i=89;
while (i>=11) {
    document.write(i + "<br>");
    i--;
}*/



//Задача 3
/*let sum = 0;
for (i=0; i<=100; i++) {
    sum +=i;  //sum=sum+i
}
console.log(sum);*/



//Задача 4
/*let sum=0;
for (i=1; i<=5; i++) {
    sum +=i;
    console.log("В числе " + i + "сумма чисел равна " + sum);
}*/



//Задача 5
/*for(i=8; i<=56; i++) {
    if (i % 2 !=0) continue;
    document.write(i+"<br>")
}*/

/*i=8;
while (i<=56) {
    if (i % 2 ==0) document.write(i+"<br>");
    i++;
}*/




//Задача 6

/*for (i=2; i<=10; i++) {
    for (j=2; j<=10; j++) {
        document.write(`${i} * ${j} = ${i*j}  <br>`);
        console.log(i + " * " + j + " = " + (i*j));
    }
}*/


//Задача 7
//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?  Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

/*let n = 1000,
    num = 0;
while (n > 50) {
    n/=2;
    num++;
}
document.write(`Результат деления ${n} <br> Количество итераций ${num}`);*/



//Задача 8
/*let sum = 0;
let q = 0;
while (true) {
    let n = +prompt('Введите число');
    if (isNaN(n)) {
        alert('Ошибка ввода!');
        continue;
    }
    if (!n || n ==0) break;
    sum += n;
    q = sum/n;
    
}alert('Сумма ' + sum + ' Ср.арифмет ' + q);

console.log('Сумма ' + sum + ' Ср.арифмет ' + q);*/




//Задача 9
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
const arr = str.split(' ');
console.log(`Min: ${Math.min(...arr)}, Max: ${Math.max(...arr)}`)



//Задача 10



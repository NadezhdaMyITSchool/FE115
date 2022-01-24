//Задача 1


//Задача 2
i = 89;
while (i >= 11)  {
    document.write(i + '<br>');
    i--;
}
//Задача 3
let summ = 0;
for (let i=0; i<=100; i++) {
    summ = summ + i;
}
console.log('Сумма чисел от 0 до 100 равна: '+ summ);

//Задача 4 
let summ4 = 0;
for (let i=0; i<=5; i++) {
    summ4 = summ4 + i;
    console.log(summ4);
}

//Задача 5

for (i=8; i<=56; i++) {
    if (i%2 == 0) document.write(i + '<br>');
    i++
}

i=8;
while(i<=56) {
    if (i%2 == 0) document.write(i + '<br>');
    i++
}

//Задача 6

for (i=2; i<=10; i++) {
    for (j=2; j<=10; j++) {
        document.write(`${i}*${j} = ${i*j} <br>`)
    }
}

//Задача 7
n=1000,
i=0;
while (n >= 50)
{
    n = n/2;
    i = i + 1;
}
console.log(i);
console.log(n);


//Задача 8
num = prompt('ВВедите число')
while (num != 0 || num != false) {
    num = prompt('ВВедите число');
    num += num;

}
console.log(num);

//Задача 9

str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57', arr9, min,max;
arr9 = str.split(' ');
max = arr9[0];
for(i=0; i < arr9.length; i++) {
    if(arr9[i]>max) {max = arr9[i]}
}
console.log('Max numb:' + max);

for(i=0; i < arr9.length; i++) {
    if(arr9[i] < min) {min = arr9[i]}
}
console.log('Min numb:' + min);

//Задача 10



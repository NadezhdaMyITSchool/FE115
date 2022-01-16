//Задача 1


//Задача 2


//Задача 3


//Задача 4

//Задача 5


//Задача 6


//Задача 7
let n = 1000 , num = 0;
do {
    n = n / 2;
    num++
    
} while (n > 50);
    

console.log(n, num);

//Задача 8

let i = 0,
    j = 0,
    cn;
        
    while ((cn = prompt("Введите число", 0)) !== "0" && cn != null) {
        ++i;
        j += +cn;
        if( isNaN(cn) ) {
            alert("Это не число, перезагрузите страницу");
            break;
        }
    }

    alert("\nЧисел введено: " + i + "\nСумма чисел: " + j
         + "\nСреднее арифметическое: " + (j / i));

//Задача 9


let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let cur='', min, max;
for (let i = 0; i < str.length; i++) {
  cur += str[i];
  if (+str[i] && !+str[i+1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:', min, 'Max:', max)





  
//Задача 10




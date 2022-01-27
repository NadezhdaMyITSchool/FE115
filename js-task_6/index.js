//Задача 1
/*Напишите две функции: первая ф-ция должна возвращать массив с
числовыми значениями, диапазон которых должен вводиться пользователем
с клавиатуры; вторая – выводить полученный массив.*/






/* 2 задача Сделайте функцию isEven() (even - это четный), которая параметром
принимает целое число и проверяет: четное оно или нет. Если четное - пусть
функция возвращает true, если нечетное — false.*/
 /*function isEven(num) {

      return num % 2 == 0;
     }
    
     console.log(isEven(5));
     console.log(isEven(6));*/


/*3. Напишите ф-цию, в которую передается массив с целыми числами.
Верните новый массив, где останутся лежать только четные из этих чисел.
Для этого используйте вспомогательную функцию isEven из предыдущей
задачи.*/

function isEven(arr){
    
    let res = [];
    for(let i=0; i<arr.length; i++){
        arr[i] % 2 == 0 ? res.push(arr[i]) : '';
    }
    return res;
}
console.log(isEven([2, 5, 10,15,17,26, 14,]));

/*4.Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
    циклы)*/
    //let symbol = prompt('символ');
   /* function arr4(n){
      for(let i = 1; i <= n; i++){
        let m = '';
        for(let j = 0; j < i; j++){
          m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
        };
        console.log(m+'\n')
      }
    };
    arr4(prompt('число'))*/

    /*5. Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.*/
    let i = 0;
    let out =[];
    function  f1() {
        i++
        out += i + ' ';
        if (i >= 30)return;
          f1();
        
    }

    f1();
    console.log(out)

    /*6. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр*/
  function getDigitsSum(num) {
    let res = (num);
    let sum = [];
    for (let i = 0;  i < res.length; i++) {
     
     
    }
    return  sum += Number(res[i]);
  }
  console.log(getDigitsSum(456));
/* 7Найдите все года от 1 до 2022, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи*/
  
  /*function getDigitsSum(num) {
       let res = String(num);
      let sum = 0;
       for (let i = 0; i < res.length; i++) {
         sum += Number(res[i]);
      }
       return sum;
    }
    
     let years = [];
    
     for (let i = 1; i <= 2022; i++) {
       if (getDigitsSum(i) == 13) {
         years.push(i);
       }
     }
    
     console.log(years);*/


     //9. Создайте функцию, которая принимает в качестве параметра целое число и возвращает количество цифр в этом числе
let number = 4392810;
let getNum = function(num) {
    return num.toString().length;
}

console.log(getNum(number));
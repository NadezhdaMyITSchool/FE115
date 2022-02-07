//Задача 1

// let str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!')); 

//Задача 2

// let date = 2025-12-31;
// console.log('2025-12-31'.replace(/-/g, '/'));


//Задача 3

// str = 'Я учу javascript!';
// console.log(str.substr(2, 3)); //substr(откуда отрезать, сколько отрезать)
// console.log(str.substring(2, 5)); //substring(откуда отрезать, докуда отрезать)
// console.log(str.slice(2, 5)); //slice(откуда отрезать, докуда отрезать)
// console.log(str.substr(6, 10));
// console.log(str.substring(6, 16)); 
// console.log(str.slice(6, 16));

//Задача 4 ?

// let arr4 = [4, 2, 5, 19, 13, 0, 10],
//     sum = 0;
// for (let i=0; i<=arr4.length; i++) {
//     sum += Math.pow(+arr4[i],3); 
// }
// console.log (sum);
// let arrNew = Math.sqrt(sum);
// console.log (arrNew);

//Задача 5

// let a=3, b=5;
// let c = Math.abs(a-b);
// console.log (c);

//Задача 6

// let dateNow = new Date();

// function formatTime(time) {
//     let hh, min, sec;
//     hh = time.getHours();
//     min = time.getMinutes();
//     sec = time.getSeconds();

//     return hh + ':' + min + ':' + sec;

// }
// function formatDate(date) {

//     let dd, mm, yy;
//     dd = date.getDate();
//     if (dd < 10) dd = '0' + dd;
  
//     mm = date.getMonth() + 1;
//     if (mm < 10) mm = '0' + mm;
  
//     yy = date.getFullYear();
  
//     return dd + '.' + mm + '.' + yy;
//   }

// console.log(formatTime(dateNow) + ' ' + formatDate(dateNow) ); 

//Задача 7

// let str = 'aa aba abba abbba abca abea';
// console.log(str.match(/ab+a/g));

//Задача 8

// function phone(ph){
//     let regexp = /(375)[0-9]{2}[0-9]{7}/gi;
//     return regexp.test(ph);
// }
// let ph = prompt('Введите телефон', 375447896587); 
// console.log(phone(ph))

//Задача 9

//  function mail(ml){
//         let regexp = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/gi;
//         return regexp.test(ml);
//     }
//     let ml= prompt('Введите email', 'test1@mail.com'); 
//     console.log(mail(ml))

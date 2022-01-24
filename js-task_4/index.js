// Задание 1

// let numb = [1, 2, 3, 4, 5];
// for (let i=0; i <= numb.length; i++) {
//   console.log(numb[i]);
//   }

// Задание 2

// let array = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// for (let i = 0; i < array.length; i++) {
//   if (-10 < array[i] || array[i] < -3) {
//     console.log(array[i]);
//   }
//     else {
//         console.log('Таких чисел нет');
//     }
// }

// Задание 3

  // let arr3 = [];
  // for (i=23; i <= 57; i++) {
  //   arr3.push(i);
  // }
  // console.log(arr3);
//let i = 23;
//while (i<=57) {
//  arr3.push(i);
//  i++
// }
// console.log(arr3);
// let result = 0;
// for (let i=0; i <= arr3.length; i++) {
//   result = result + arr3[i];
// }
// console.log('Задание 3:' + result);

//Задание 4

// let arr4 = ['10', '20', '30', '50', '235', '3000'];
// for (let i=0; i < arr4.length; i++) {
// }

//Задание 5

// let arr5 = ['ПН', 'ВТ','СР', 'ЧТ','ПТ', 'СБ', 'ВС'];
// for (let i=0; i<arr5.length; i++) {
//   if (arr5[i]=='СБ'||arr5[i]=='ВС') {
//     document.write(`<b> ${arr5[i]} <b>`);
//   } 
//   else {
//     document.write(` ${arr5[i]} `);
//   }
// }

//Задание 6

// let arr6 = [10, 18, 28, 3, 5, 78];
// arr6.push(20);
// let lastel = arr6[arr6.length - 1];
// console.log(lastel);
// console.log(arr6);

//Задание 7

//let arr7 = [];
//let num = prompt('Введите число'); 
//while (num != null|| num != NuN) {
//  arr7.push(num);
//  numb = prompt('Введите число'); 
//}
//arr7.sort(function(a, b) {
//  return a - b;
//});
//console.log(arr7);



//Задание 8

// let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
// arr8.reverse();
// console.log(arr8);

// let i = arr8.length-1;
// while (i>=0) {
//   console.log(arr8[i]);
//   i--;
// }

//Задание 9

// let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
// let b = 0;
// for (i=0; i<arr9.length; i++) {
//   if (arr9[i]===undefined) {
//     b++;
//   }
// }
// console.log(b);

//Задание 10

let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];
let first = arr10.indexOf(0);
let last = arr10.lastIndexOf(0);
let summ = 0;
for (i=first+1; i<= last; i++) {
  summ += arr10[i];
}
console.log('Задание 10:' + summ);


//Задание 11

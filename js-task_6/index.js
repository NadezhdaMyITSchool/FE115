// Задача 1

// let a, b;
// a = prompt('Введите число a:');
// b = prompt('Введите число b:');
// function array (a, b) {
//     let arr1 = [], i;
//     for (i=a; i<=b; i++) {
//        arr1.push(i);
//     }
// }
// let arr = array(a, b);
// console.log(arr);

// function print() {
//    document.write(arr);
// }
// print();

// Задача 2 +

// function isEven(c) {
// // c = prompt('Введите число c:');
// c%2 == 0 ? return true : return false;
// }
// isEven(9);

function isEven(number) {
   return number % 2 === 0 ? "true" : "false"
}
console.log(isEven(3));
console.log(isEven(2));

// Задача 3



// Задача 4 +

// let symbol = prompt('символ');
// function pyramid(n){
//   for(let i = 1; i <= n; i++){
//     let m = '';
//     for(let j = 0; j < i; j++){
//       m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
//     };
//     console.log(m+'\n')
//   }
// };
// pyramid(prompt('число'))

// Задача 5

let arr = [34, 56, 12, 3, 7, 96, 36];
function func(arr, i) {
  if (i == arr.length) {
    return;
  }
  console.log(arr[i]);
  func(arr, i + 1);
}
func(arr, 0);

// Задача 6

function getDigitsSum (d) {

}
function getDigitsSum(num) {
   let sum = 0;
   let str = String(num);
   for(let i = 0; i < str.length; i++) sum += Number(str[i]);
   return sum;
 }
 let num=+prompt("Введите число");
 console.log(' Задача 6:  ' + getDigitsSum(num));

// Задача 7


// Задача 8


// Задача 9
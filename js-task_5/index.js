/*1.Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].8*/
/*let arr = [1, 2, 3, 4, 5];
arr2 = arr.slice(3, 5);
console.log( arr2)

let arr3 =[6,7,8]
arr2 = arr3.unshift(4,5)
console.log(arr3)*/

/*2.Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши*/

let fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
 fruits [2] =("Pear")
 fruits [4] =("Pear")
console.log (fruits)

/*array = [1, 2, 3, 4, 5, 5, 6];  
//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

let count=0, sum=0, flag = false;
array.forEach( item  => { 
    sum = sum + item;
    if (flag == false) count++ ;
    if (sum > 10) flag = true;
})
console.log(sum);
console.log(flag)

console.log(count)*/

/*4.Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"]. Сделать каждую первую букву заглавной, используя методы перебора массива*/

let words = ["rachel", "joe", "ben", "ross", "marcel"];
for (let word of words) {
    word = word.charAt(0).toUpperCase() + word.substr(1);
    console.log(word);
}

/*5.Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.*/
let arrNum = [1,2,3,4,5];
 let newArr = [];
arrNum.forEach(function (elem) {
    newArr.push(elem * elem);
    
})
console.log(newArr)

/*6.Дан массив с числами. Оставьте в нем только отрицательные числа.*/
array = [1, -2, 3, -4, 5, -6 , 7];
function negative (elem) { return elem < 0};
let Newarr = array.filter(negative);
console.log(Newarr)
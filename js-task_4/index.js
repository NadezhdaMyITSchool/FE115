// Задание 1
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i<=arr.length - 1; i++) {
    console.log(arr[i]);
}


// Задание 2   НУЖНО ЛИ ELSE?????
let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (i = 0; i<=arr1.length - 1; i++) {
    if (arr1[i] < 0 && arr1[i] > -10 && arr1[i] < -3) {
        console.log(arr1[i]);
    }
}



// Задание 3
let arr2 = [];
let start = 23;
let finish = 57;
let arr3 =[];

//создание через for
for (i = start; i<=finish; i++)  
 {
    arr2.push(i);
}

//создание через while
let a = start -1;   
while (a<finish)  {
    a++;
    arr3.push(a);
}

console.log(arr2);
console.log(arr3);


let sum = 0;  //сумма элементов массива
for (i=0; i< arr2.length; i++) {
    sum +=arr2[i]
}
console.log(sum);




//Задание 4
let arr5 = [ '10', '20', '30', '21', '11', '50', '235', '3000' ];

for (let i = 0; i < arr5.length; i++) {
  if(String(arr5[i]).startsWith('1') || String(arr5[i]).startsWith('2') || String(arr5[i]).startsWith('5')) {
    document.write(`${arr5[i]} <br>`);
  }
  }
  



//Задание 5
let arr6 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
for (let i = 0; i<=arr6.length - 1; i++) {
    if (i>4) {
        document.write('<b>' + arr6[i] + '</b>' + ' ');
    } else {
        document.write(arr6[i] + ' ');
    }
}

///что в выводе????
/*let arr7 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
 
        for (let i = 0; i < arr7.length; i++) {
            if (i > 4) {
                document.body.insertAdjacentHTML('beforeend', '<b>' + arr7[i] + '</b>' + ' ');
            } else {
                document.body.insertAdjacentHTML('beforeend', arr7[i] + ' ');
            }
        }*/



//Задание 6
let num = [1, 2, 3, 4, 6];

console.log(num);

//push - Метод добавления нового элемента в конец массива

num.push('Привет');
console.log(num);
console.log(num[num.length-1]);



//Задание 7
let arr10 = [];
for(let i=0; ;i++) {
    arr10[i]= prompt('введите', );
    if (!(arr10[i])) break;    
}

console.log(arr10);

//убирает 0 , а если отмена то не работает???????????
let arrNew = arr10.filter(function (el) {
    return el != false ;
    //return el !=null;
});
console.log(arrNew);

arrNew.sort();
console.log(arrNew);




//Задание 8
let arr4 = [12, false, 'Текст', 4, 2, -5, 0];

console.log(arr4);
arr4.reverse();
console.log(arr4);


/// как с помощью while вывести обратный массив
let b = arr4.length - 1; 
while (b>=0) {
    console.log(arr4[b]);
    b--;
}




//Задание 9
let arr8 = [5, 9, 21, , , 9, 78, , , , 6];
console.log(arr8);
console.log(arr8.length);

let arr9 = arr8.filter(function(item) {
    return typeof item != ' ';
});
console.log(arr9);
console.log(arr8.length-arr9.length)



//Задание 10


//Задание 11

let q = 0,
  j = 0;
let h = prompt('h??');
/*let space = "",
  star = "";*/

while (q < h) {
  space = "";
  star = "";
  for (j = 0; j < h - q; j++) space += " ";
  for (j = 0; j < 2 * q + 1; j++) star += "^";
  console.log(space + star);
  q++;
}



 //выведет[23, 21, 19.17,15] ??????????????????
/*let result1 = [];
let start1 = 23;

for (start1; start1>=0; start1--)
 {
    result1.push(start1--);
}

console.log(result1);*/


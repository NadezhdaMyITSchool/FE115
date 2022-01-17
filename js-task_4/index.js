// Задание 1
let arr1 = [1, 2, 3, 4, 5];
for(i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}


// Задание 2
let arr2 = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7];
for(i = 0; i < arr2.length; i++) {
    if (arr2[i] > -10 && arr2[i] < -3) {
        console.log(arr2[i]);
    }
}
// Задание 3
let arr3 = [];
for(i = 23; i <= 57; i++) {
    arr3.push(i);
}
console.log(arr3);

let a = 23, arr3_ = [];
while(a <=57) {
    arr3_.push(a++);
}
console.log(arr3_);

let result = 0;
for(i = 0; i < arr3.length; i++) {
    result = result + +arr3[i];
}
console.log(result);

//Задание 4
let arr4 = ['10', '20', '30', '50', '235', '3000'];
for(i = 0; i < arr4.length; i++) {
    if(arr4[i].startsWith("1") || arr4[i].startsWith("2") || arr4[i].startsWith("5")) {
        console.log(arr4[i]);
    }
}

//Задание 5
arr5 = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];
for(i = 0; i < 7; i++) {
    if(i == 5 || i == 6) {
        document.write(`<b>` + arr5[i] + `</b>` + ` `)
    }
    else {
        document.write(arr5[i] + ` `);
    }

}

//Задание 6
let words = ['земля', 'небо', 'огонь', 'вода'];
words.push('ветер');
console.log(words[words.length - 1]);

//Задание 7
let numbers, numbersArr = [];
while(numbers != '') {
numbers = +prompt('Введите число: ');
numbersArr.push(numbers);
}
console.log(numbersArr);
numbersArr.sort();
console.log(numbersArr);

//Задание 8
let difArr = [12, false, 'Текст', 4, 2, -5, 0];
difArr.reverse();
console.log(difArr);

difArr = [12, false, 'Текст', 4, 2, -5, 0];
let m = 0, n = difArr.length - 1;
while(m < n) {
    let temp = difArr[m];
    difArr[m] = difArr[n];
    difArr[n] = temp;
    m++;
    n--;
}
console.log(difArr);

//Задание 9
let wholeArr = [5, 9, 21, , , 9, 78, , , , 6],
    undef = 0;
for(i = 0; i < wholeArr.length; i++) {
    if(wholeArr[i] == undefined) {
    undef++;
    }
}
console.log(undef);

//Задание 10
let tenArr = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2], 
    sumEl = 0;
let zeroFirst = tenArr.indexOf(0);
if(zeroFirst == -1) {
    //почему выводит 0 в любом случае?
    console.log(0);
}
else {
for(i = zeroFirst; i < tenArr.length; i++) {
if(tenArr[i] != 0) {
    sumEl = sumEl + +tenArr[i];
}
else {
    console.log(sumEl);
}
}
}

//Задание 11

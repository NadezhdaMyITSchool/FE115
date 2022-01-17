// Задание 1
let num = [1, 2, 3, 4, 5];
for(let i = 0; i <= 4; i++) {
    document.write(num[i] + '<br>');
}



// Задание 2

 let num2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    let negativeArr = num2.filter((elem) => elem > -10 && elem < -3);
    document.write(negativeArr + '<br>');
     
    

// Задание 3
let start = 23;
let end = [];
while(start <= 57) {
    end.push(start++);
}

let result = +'';
for(i = 0; i < end.length; i++) {
   result += end[i] ; 
}
console.log(end);
document.write('<br>' + end, start);
alert(result)


//Задание 4

let mas = ['10', '20', '30', '50', '235', '3000'];
mas.forEach((item) => {
    if (item.startsWith('1') || item.startsWith('2') || item.startsWith('5')) {
      document.write('<br>' + item);
    }
  });


//Задание 5

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < week.length; i++) {
    if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
        document.write('<br>' + '<b>' + week[i] + '</b>' + ' ');
    } else {
        document.write('<br>' + week[i] + ' ');
    }
 
}

//Задание 6

let arr = [1, 2, 3, 4, 5, 6];
    arr[arr.length] = (7);
    document.write('<br>' + arr[6]);

//Задание 7

let msg = prompt('Введите числа через пробел');
let sum = msg.split(' ');

if (msg == '') {
    alert('Не корректно!');
}else {
    sum.sort(function compareNumbers(a, b) {
    return a - b;
  });
    document.write('<br>' + sum);
}


    
//Задание 8


let arr8 = [12, false, 'Текст', 4, 2, -5, 0]

//Задание 9

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let empties = arr9.length - arr9.filter(function(){ 
    return true }).length;
document.write('<br>' + empties);

//Задание 10

arr10 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
function between(arr10)
        {
            let result = 0, start = false, sum = 0;
            for (let i = 0; i < arr10.length; i++)
            {
                let n = arr10[i];
                if (n == 0 && !start) { start = true; continue; }
                if (n == 0) result = sum;
                else if (start) sum += n;
            }
            return result;
        }
 document.write('<br>' + between(arr10));
//Задание 11

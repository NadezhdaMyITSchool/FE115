//Задача 7

function basicOp(operation, value1, value2)
{
  if(operation == '+')return value1 + value2;
  if(operation == '-')return value1 - value2;
  if(operation == '*')return value1 * value2;
  if(operation == '/')return value1 / value2;
}

let value1 = 4;
let value2 = 5;
let sum = basicOp('+', value1, value2);
let minus = basicOp('-', value1, value2);
let multiplication = basicOp('*', value1, value2);
let split = basicOp('/', value1, value2);
console.log(sum);
console.log(minus);
console.log(multiplication);
console.log(split);


//Задача 8

function bonusTime(salary, bonus) {
   if (bonus == true) return salary*10
   else return salary;
}

let salary = 5,
bonus = false;
let cash = bonusTime(salary, bonus);
console.log(cash);



//Задача 9
function getGrade (s1, s2, s3) {
    if (((s1+s2+s3)/3)>=90) return "A";
    if (((s1+s2+s3)/3)>=80) return "B";
    if (((s1+s2+s3)/3)>=70) return "C";
    if (((s1+s2+s3)/3)>=60) return "D";
    if (((s1+s2+s3)/3)<60) return "F";
}
let s1 =65;
let s2 =40;
let s3 =70;
let grade = getGrade (s1, s2, s3);
console.log(grade);

function basicOp(operation, value1, value2)
{
  if (operation == '+') return value1 + value2;
  else if (operation == '-') return value1 - value2;
  else if (operation == '*') return value1 * value2;
  else {
    return value1 / value2;
  }
}

function bonusTime(salary, bonus) {
    if (bonus == true) {
      salary = salary * 10; return "£" + salary;
    } else {
      return salary = "£" + salary;
    }
 }
 alert(bonusTime(22));

 /*function bonusTime(salary, bonus) {
    if (Number.isInteger(salary)) {
      salary = salary * 10; return "£" + salary;
    } else {
      return salary = "£" + salary;
    }
 }
 alert(bonusTime(22.5));*/

function getGrade (s1, s2, s3) {
    
}

// Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. Выведите на экран фразу:
//  «Меня зовут %Имя%. Мне %Возраст% лет.
//  Я проживаю в городе %Город% и работаю в компании %Компания%.
// Мои контактные данные:
//  %Телефон%, %Почта%.».

let name = prompt('Your name');
let age = prompt('Your age');
let city = prompt('Your city');
let company = prompt('Your company');
let phone = prompt('Your phone');
let email = prompt('Your email');

alert(`Меня зовут ${name}. Мне ${age} лет.
Я проживаю в городе ${city} и работаю в компании ${company}.
Мои контактные данные: ${phone}, ${email}.`);

// Определите по введенному возрасту (исп. значение из задания 1) год рождения. Выведите на экран
if (age.length > 0 && !isNaN(parseInt(age))) {
 let now = new Date();
 let year = now.getFullYear() - age;
 alert(`${name} poдился в ${year} году.`);
}


//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
let number = '123345';
let sum1 = +number[0] + +number[1] + +number[2];
let sum2 = +number[3] + +number[4] + +number[5];
if (sum1 === sum2) {
 console.log("Yes");
} else {
 console.log("No");
}

// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let currentNamber = -3;
if (currentNamber > 0) {
 console.log("Верно");
} else {
 console.log("Неверно");
}

// Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат.
let a = 10;
let b = 2;
console.log('сумма: ' + (a + b) + ', ' + 'разность: ' + (a - b) + ', ' + 'произведение: ' + (a * b) + ', ' + 'деление: ' + (a / b));
if (a + b > 1) {
 console.log(Math.pow(a + b, 2));
}

// Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.
if ((a > 5 && a < 11) || (b >= 6 && b < 14)) {
 console.log("Верно");
} else {
 console.log("Неверно");
}

// Ваша задача - создать функцию, выполняющую четыре основные математические операции. Функция должна принимать
// три аргумента - операцию(string), значение1(number), значение2(number).
// Функция должна возвращать результат чисел после применения выбранной операции.
let math = function (operation, num1, num2) {
 let result = 0;
 switch (operation) {
  case '+':
   result = num1 + num2;
   break;
  case '-':
   result = num1 - num2;
   break;
  case '*':
   result = num1 * num2;
   break;
  case '/':
   result = num1 / num2;
   break;
 }

 return result;
}

console.log(math('+', 4, 7));

// 8.
let bonusTime = function (salary, bonus) {
 if (bonus) {
  salary = salary * 10;
 }

 return '£' + salary;
}

console.log(bonusTime(4, false));

// 9.
let sum = function (s1, s2, s3) {
 let result = 'F';
 let sum = (s1 + s2 + s3) / 3;
 if (sum >= 90 && sum <= 100) {
  result = 'A';
 } else if (sum >= 80 && sum < 90) {
  result = 'B';
 } else if (sum >= 70 && sum < 80) {
  result = 'C';
 } else if (sum >= 60 && sum < 70) {
  result = 'D';
 }

 return result;
}
console.log(sum(70, 70, 100));
//Задача 1

let name = prompt('Введите ваше имя');
    age = prompt('Введите ваш возраст');
    city = prompt('Введите город');
    phone = prompt('Введите телефон');
    email = prompt('Введите почту');
    company = prompt('Введите название компании');
    document.write(` «Меня зовут ${name}. Мне ${age} лет. <br>
    Я проживаю в городе ${city} и работаю в компании %Компания%.
    Мои контактные данные:
    ${ phone}, ${company}.».`)

// Задача 2

let year = 2022 - +age;
document.write(`«${name} родился в${year} году.».`)


//Задача 3

let a3 = '123456';
    sum1 = +a3[0] + +a3[1] + +a3[2];
    sum2 = +a3[3] + +a3[4] + +a3[5];
if (sum1 == sum2) {
    console.log('Yes');
} else {
    console.log('No');
}

// Задача 4

let a4 = 1;
(a4 > 0) ? console.log('Yes') : console.log('No');

// Задача 5

let a = 10,
    b = 2,
    sum, diff, prod, priv, kv;
    sum = a + b;
    diff = a - b;
    prod = a * b;
    priv = a / b;
    if (sum > 1) {
        kv = Math.pow(sum, 2); 
    } else {console.log('Сумма меньше 1');}

    console.log(sum, diff, prod, priv, kv);


//Задача 6

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Yes')
} else {
    console.log('No');
}

//Задача 7

function basicOp(operation, value1, value2)
{
 if (operation == '+') return  value1 + value2;
 if (operation == '-') return  value1 - value2;
 if (operation == '*') return  value1 * value2;
 if (operation == '/') return  value1 / value2;
}

//Задача 8

function bonusTime(salary, bonus) {
    if (bonus == true) {
      return '£' + salary*10;
    }
      else {
         return '£' + salary;
      }
    }

//Задача 9

(function getGrade (s1, s2, s3) {
    let mark = (s1 + s2 + s3)/3;
      if (mark >= 90 && mark <= 100) {return 'A';}
      else if (mark >= 80 && mark <= 90) { return 'B';}
      else if (mark >= 70 && mark <= 80) { return 'C'; }
      else if (mark >= 60 && mark <= 70) { return 'D'; }
      else { return 'D'; }
    })

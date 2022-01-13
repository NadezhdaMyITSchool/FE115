//Задача 1
/*let name = prompt('Введите имя'),
    age = prompt('Введите возраст'),
    city = prompt('Введите город'),
    phone = prompt('Введите номер телефона'),
    email = prompt('Введите email'),
    company = prompt('Введите компанию');

document.write(`Меня зовут ${name}. Мне ${age} лет. <br> Я проживаю в городе ${city} и работаю в компании ${company}. <br> Мои контактные данные:${phone}, ${email}.`);*/

// Задача 2
/*let year = 2022;
let birthdayYear = year - age;
console.log(`${name} родился в ${birthdayYear} году.`);*/

//Задача 3
let a = '123456';
let sum1 = +a[0] + +a[1] + +a[2];  //+ переделвает в числовое
let sum2 = +a[3] + +a[4] + +a[5];
console.log(sum1,sum2);

if (sum1 == sum2) {
    console.log('да');
} 
else  {console.log('нет')
}


// Задача 4
let a1 = 1;
let a2 = 0;
let a3 = -3;
if (a1 > 0) {
    console.log('верно');
} 
else  {console.log('не верно')
}

if (a2 > 0) {
    console.log('верно');
} 
else  {console.log('не верно')
}

if (a3 > 0) {
    console.log('верно');
} 
else  {console.log('не верно')
}

// Задача 5
let a4 = 10,
    b = 2;
console.log("Сумма " + (a4 + b) + ", разность " + (a4 - b) + ", произведение " + (a4 * b) + ", частное " + (a4 / b));

if ((a4 + b) > 1) {
    console.log(Math.pow((a4+b), 2))
}
else {console.log('условие не выполняется')
}

//Задача 6


if (((a4 > 2) && (a4 < 9)) || ((b>=14) && (b<14))) {
    console.log('верно');
}
else  {console.log('не верно')
}


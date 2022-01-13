//Задача 1
let name = prompt('Введите Ваше имя'),
    age = prompt('Введите ваш возраст'),
    city = prompt('Введите ваш город'),
    phone = prompt('Введите ваш номер телефона'),
    email = prompt('Введите ваш e-mail'),
    company = prompt('Введите название компании');
    document.write(`Меня зовут ${name}. Мне ${age} лет. <br>
    Я проживаю в городе ${city} и работаю в компании ${company}.<br>
    Мои контактные данные: тел. ${phone}, почта ${email}.<br>`);

// Задача 2
let year = 2022 - +age;
document.write(`<br>${name} родился в ${year} году.`);

//Задача 3
let a3 = '123456',
    sum1 = +a3[0] + +a3[1] + +a3[2],
    sum2 = +a3[3] + +a3[4] + +a3[5];
if(sum1 == sum2) {
    console.log('Да');
} else {console.log('Нет');}

// Задача 4
let a4 = 1;
(a4 > 0) ? console.log('Верно') : console.log('Неверно');

// Задача 5
let a = 10, b = 2;
console.log('Сумма: ' + (a + b) + ', разность: ' + (a - b) + ', произведение: ' + (a * b) + ', частное: ' + (a / b));
if((a + b) > 1) {
    console.log('Сумма в квадрате: '+ Math.pow((a + b),2));
}

//Задача 6
if((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log('Верно');
} else {console.log('Неверно');}


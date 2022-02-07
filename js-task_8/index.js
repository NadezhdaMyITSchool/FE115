// 1. - Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.

// let Calc = function() {
//     this.turn = function() {
//         this.on = prompt('Для включения напишите "on" ');
//         if (this.on == 'on') {
//             this.get();
//         }

//         else {
//             alert('До свидания')
//         }
 
//     };

//     this.get = function() {
//         this.a = +prompt('Введите число a');
//         this.b = +prompt('Введите число b');
//         this.oper = prompt('Введите операцию: +, -, *, /');

//         this.operation();
//     };

//     this.operation = function() {
//         switch(this.oper) {
//             case '+':
//                 this.result = this.a + this.b;
//             break;

//             case '-':
//                 this.result = this.a - this.b;
//             break;

//             case '*':
//                 this.result = this.a * this.b;
//             break;

//             case '/':
//                 this.result = this.a / this.b;
//             break;
//             default: this.result = 0
//         }
//         this.show();
//     };

//     this.show = function() {
//         alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
//     };
// };

// //Объект calc
// let calc = new Calc();
// calc.turn();



// 2. - Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки, счетчик горения лампочки.
// let Light = function() {
//     this.turn = function() {
//         this.on = confirm('Вы хотите включить лампочку?');
//         if (this.on) {
//             this.get();
//         }
//         else {
//             alert('Ну и сиди в темноте)')
//         }
 
//     };

//     this.get = function() {
//         this.P = +prompt('Введите мощность лампочки в Вт');
//         this.price = +prompt('Введите стоимость электроэнергии в вашем регионе за 1 кВт/ч');
//         this.time = +prompt('Введите время горения лампочки в часах');

//         this.account();
//     };

//     this.account = function() {
//         this.result = (this.P/1000)*this.time*this.price;
//         this.show();
//     };

//     this.show = function() {
//         alert('Вам придется заплатить: ' + this.result + ' рублей');
//     };
// };
    
// let light = new Light();
// light.turn();
// console.log(light);


//3. Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды), вкл./выкл., расчет времени закипания воды.
// let Boil = function() {
//     this.turn = function() {
//         this.on = confirm('Вы включили чайник?');
//         if (this.on) {
//             this.get();
//         }
//         else {
//             alert('Срочно попей чайку')
//         }
 
//     };

//     this.get = function() {
//         this.P = +prompt('Введите мощность чайника в кВт');
//         this.V = +prompt('Введите объем чайника');
//         this.water = +prompt('Сколько вы налили воды?');
//         this.temp1 = +prompt('Какой температуры вы налили воду?');
//         this.temp2 = +prompt('До какой температуры хотите нагреть?');

//         this.time();
//     };

//     this.time = function() {
//         this.result = Math.round(0.00117*(this.V-this.water)*(this.temp2-this.temp1)*60/this.P);

//         this.show();
//     };

//     this.show = function() {
//         alert('Ваш чайник закипит через ' + this.result + ' минут');
//     };
// };
    
// let kettle = new Boil();
// kettle.turn();
// console.log(kettle);


//4. Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл. двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад (ввод информации о скорости движения), расчет пройденных километров.
// let Car = function() {
//     this.turn = function() {
//         this.on = confirm('Вы завели машину?');
//         if (this.on) {
//             this.get();
//         }
//         else {
//             alert('Никуда не едем')
//         }
 
//     };

//     this.get = function() {
//         this.brand = prompt('Введите марку машины');
//         this.number = prompt('Введите номер машины');
//         this.transmission = confirm('Вы включили передачу?');

//         if (this.transmission) {
//             this.up = confirm('вы ехали вперед?');
//             if (this.up) {
//                 this.upV = +prompt('Введите скорость с которой вы ехали вперед в км/ч');
//                 this.upTime = +prompt('Введите время сколько вы ехали вперед в минутах');
//             }
//             else {
//                 alert('Вы наверное хотите поехать в другую сторону');
//                 this.upV = 0;
//                 this.upTime= 0;
//             } 

//             this.down = confirm('может вы ехали еще назад?');
//             if (this.down) {
//                 this.downV = +prompt('Введите скорость с которой вы ехали назад в км/ч');
//                 this.downTime = +prompt('Введите время сколько вы ехали назад в минутах');
//             }

//             else {
//                 alert('Правильно,только вперед');
//                 this.downV = 0;
//                 this.downTime= 0;
//             }
//         }
//         else {
//             alert('Включите передачу чтобы поехать')
//         }


//         this.distance();
//     };

//     this.distance = function() {
//         this.result = this.upV*this.upTime/60 + this.downV*this.downTime/60; 

//         this.show();
//     };

//     this.show = function() {
//             alert('Машина ' + this.brand + ' с номером ' + this.number + ' проехала ' + this.result + ' км');
        
//     };
// };
    
// let car = new Car();
// car.turn();
// console.log(car);



//Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.почта), проверка введенной информации, например: проверить возраст – должен быть целым неотрицательным числом больше 18, вывод информации о конкретном контакте, вывод всех контактов.
let Contact = function() {

    this.get = function() {
        this.fullName = prompt('Введите ФИО');
        this.number = +prompt('Введите номер телефона');
        this.email = prompt('Введите электронную почту');
        this.age = +prompt('Введите возраст');

        if (Number.isInteger(this.age) && this.age>0) {
            this.show();
        } else {
            alert('Введите корректные данные')
        } 
    };


    this.show = function() {
        if (this.age>=18) {
            alert(this.fullName + ' добро пожаловать к нам в команду')
        } else {
            alert(this.fullName + ' нужно подрасти')
        }  
    };
};
    
let user = new Contact();
user.get();
console.log(user);

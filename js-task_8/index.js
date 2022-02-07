/*- Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.*/

let Calc = function () {
    this.get = function () {
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /');

        this.operation();
    };
    this.operation = function () {
        switch(this.oper){
            case '+':
                this.result = this.a + this.b;
                break;
                case '-':
                    this.result = this.a - this.b;
                    break;
                    case '*':
                        this.result = this.a * this.b;
                        break;
                        case '/':
                            this.result = this.a / this.b;
                            break;
                            default: this.result = 0;
        }
        this.show();
    };
    this.show = function () {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    }
};

let calc = new Calc();
calc.get();

/*2.Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
    электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
    счетчик горения лампочки.*/

    let Calc = function (name) {
        this.info = function () {
            this.name = name;
            this.mosh = +prompt('Введите мощность лапочки в Вт'); 
            this.price = 0.209;  //prompt('Введите стоимость эллектроэнергии за 1 Квт', '+', '/', 'ч ');
            if (confirm('Включить лампочку')) {
                this.workTime = +prompt('Сколько времени работает лампочка?')
            }else{
                this.workTime = 0;
            }
            this.operation()
        }
          this.operation = function () {
              this.result =(this.mosh / 1000) * this.price * this.workTime;
              this.show()
              
          }
          this.show = function () {
 
            if (this.workTime == 0 || this.workTime == undefined) {
                console.log('Лампочка "' + this.name + '" не включена');
            } else {
                console.log('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
            }
        };
    };
    

   let calc = new Calc()
   calc.info()
/*3. Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
вкл./выкл., расчет времени закипания воды.*/
 let calcWater = function () {
     this.get = function (name) {
         this.name = name;
         this.power = +prompt('Введите мощность чайника');
         this.volum =  +prompt('Введите объем чайника');
         this.water =  +prompt('Ввести колличество воды ');
     if (confirm('Включить чайник')) {
         this.workWater = +prompt('Сколько по времени закипает чайник')
        }else{
            this.workWater = 0;
        }
        this.operation()
     }
     this.operation = function () {
         this.result = (this.power / 2200) * this.water * this.workWater;
           this.show()
        } 
        this.show = function () {
            if (this.workWater == true || this.workWater == false) {
               alert('Чайник "' + this.name + '" не включен');
            } else {
                alert('Чайник "' + this.name + '" проработал - ' + this.workWater + 'ч, по времени закипает', ' = ' + this.result + 'м');
            }
            this.show();
                };
                this.show = function () {
                   alert(this.power + ' ' + this.operetion + ' ' + this.volum + ' = ' + this.result);
                }
  };


 let calkWater = new calcWater()
 calkWater.get()


 /*Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.*/

let Car = function() {
    this.turn = function() {
        this.on = confirm('Вы завели машину?');
        if (this.on) {
            this.get();
        }
        else {
            alert('Машина не заведена')
        }
 
    };

    this.get = function() {
        this.brand = prompt('Введите марку машины');
        this.number = prompt('Введите номер машины');
        this.transmission = confirm('Вы включили передачу?');

        if (this.transmission) {
            this.onward = confirm('вы ехали вперед?');
            if (this.onward) {
                this.onwardV = +prompt('Введите скорость с которой вы ехали вперед в км/ч');
                this.onwardTime = +prompt('Введите время сколько вы ехали вперед в минутах');
            }
            else {
                alert('Вы наверное хотите поехать в другую сторону');
                this.onwardV = 0;
                this.onwardTime= 0;
            } 

            this.down = confirm('может вы ехали еще назад?');
            if (this.down) {
                this.downV = +prompt('Введите скорость с которой вы ехали назад в км/ч');
                this.downTime = +prompt('Введите время сколько вы ехали назад в минутах');
            }

            else {
                alert('Правильно,только вперед');
                this.downV = 0;
                this.downTime= 0;
            }
        }
        else {
            alert('Включите передачу чтобы поехать')
        }
        this.distance();
    };

    this.distance = function() {
        this.result = this.onwardV+ this.onwardTime + this.downV + this.downTime; 

        this.show();
    };

    this.show = function() {
            alert('Машина ' + this.brand + ' с номером ' + this.number + ' проехала ' + this.result + ' км');

    };
};

let car = new Car();
car.turn();

/*- Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом больше 18, вывод информации о конкретном
контакте, вывод всех контактов.*/


let user = function () {
    this.name = 'No name'
    this.age = 0;
    this.secName = "No secName"
    this.tel = "No tel"
    this.email = " No email"
    this.lastname = 'No lastname'

   this.get = function () {
     this.Old = +prompt('Введите ваш возраст?')
     if (this.Old >= 18) {
         alert('Верно')
     }else{
         alert('Неверно')
     }
     
 }   
}

    let userAlex = new User()
    let userBob = new User()
    let userDima = new User()

    userAlex.name = 'Alex'
    userBob.name = 'Bob'
    userDima.name = 'Dima'


    userAlex.age = 20;
    userBob.age = 15;
    userDima.age= 18;

    userAlex.tel = 37525765389;
    userBob.tel = 37525763789;
    userDima.tel= 3752576688;


    userAlex.email = 'Alexmango@gmail.com';
    userBob.email = 'Bobmango@gmail.com';
    userDima.email= 'Dimamango@gmail.com';

    userAlex.lastname = 'Ivanov';
    userBob.lastname = 'Petrov';
    userDima.lastname = 'Derevanco';

    userAlex.lastname = 'Ivanovich';
    userBob.lastname = 'Petrovich';
    userDima.lastname = 'Victorovich';

    console.log(userAlex);
    console.log(userBob);
    console.log(userDima);

 let user = new User()
 user.get()
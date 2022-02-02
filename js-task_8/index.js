/*- Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.*/

let Calc = function () {
    this.get = function () {
        this.a = prompt('Введите число а');
        this.b = prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /');
    };
    this.operation = function () {
        
    };
    this.result = function () {
        
    }
};

let calk = new Calc();
calk.get();
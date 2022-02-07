let Calculation = function() {
    this.get = function() {
        this.a = +prompt('Введите первое число');
        if(!parseInt(this.a)) {
            alert('Вы не ввели число!');
            return false;
        }      
        this.b = +prompt('Введите второе число');
        if(!parseInt(this.b)) {
            alert('Вы не ввели второе число!');
            return this.get();
        }
        this.move = prompt('Введите выполняемую операцию (+, -, *, /)');
        if(this.move == +this.move || this.move == '' || this.move == null) {
            alert('Не корректная операция!')
            return this.get();

        }

        this.operation();
    }
    this.operation = function(){
        switch(this.move) {
            case '+' :
                this.result = this.a + this.b
                break;
            case '-' :
                this.result = this.a - this.b
                break;
            case '*' :
                this.result = this.a * this.b
                break;
            case '/' :
                this.result = this.a / this.b
                break;  
            case '%' : 
            this.result = (this.a / 100) * this.b
                break; 
            default: this.result = 0;         
        }
        this.show();

    };
    this.show = function() {
        alert(this.a + ' ' + this.move + ' ' + this.b + ' = ' + this.result);

    };
};
let calculation = new Calculation();
calculation.get();


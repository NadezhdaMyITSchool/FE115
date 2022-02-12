//Задача из видео урока.
let Calc = function() {
	this.get = function() {
		this.a = +prompt('Введите число а');
		this.b = +prompt('Введите число b');
		this.oper = prompt('Введите операцию: +, -, *, /');
		this.operation();
	}
	this.operation = function(){
		switch(this.oper) {
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
	}
	this.show = function() {
			alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
		}
	}

	let calc = new Calc();
	calc.get();

// Контакты
	let Contacts = function() {
    this.get = function() {
    this.name = prompt('Введите свое имя');
        reName = /^[А-ЯЁ]{1}[а-яё]{1,29}$/u;
        validName = reName.test(this.name);
	    if (!validName) {
		        alert('Введите корректные данные');
		        return this.get();
		};

        this.surname = prompt('Введите свою фамилию');
        reSurname = /^[А-ЯЁ]{1}[а-яё]{1,29}$/u;
            validSurname = reSurname.test(this.surname);
	        if (!validSurname) {
		    alert('Введите корректные данные');
		        return this.get();
		    };

        this.age = +prompt('Введите свой возраст');
	        if (this.age < 18 || !Number.isInteger(this.age)) {
		        return alert('Вы слишком юны');
		    };

        this.phone = prompt('Введите свой телефон в формате +xxx (xx) ххх-хх-хх');
        let rePhone = /^\+[\d]{1,4}\ \([\d]{2,3}\)\ [\d]{2,4}-[\d]{2,3}-[\d]{2,3}$/;
        let validPhone = rePhone.test(this.phone);
        if (!validPhone) {
        	alert('Введите правильный номер');
        	return this.get();
        };

        this.mail = prompt('Введите свой email');
        let reMail = /^[\w]{1}[\w-\.]{2,}@[\w-]{2,11}\.[a-z]{2,4}$/i;
        let validMail = reMail.test(this.mail);
        if(!validMail) {
        	alert('Что-то не так с вашим e-mail');
        	return this.get();
        }

        this.show();
    }

    this.show = function() {
    	alert('Добро пожаловать! Ваши данные: ' + this.name + ' ' + this.surname + '. Возраст ' + this.age + '. Телефон ' + this.phone + '. Email ' + this.mail);
    }

}

let cont = new Contacts();
cont.get();

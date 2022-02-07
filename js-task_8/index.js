let Contacts = function() {
    this.getData = function() {
        this.name = prompt('Введите совое ФИО');
        this.age = +prompt('Введите совой возраст');
        this.phone = prompt('Введите совой телефон');
        this.mail = prompt('Введите совой email');

        this.checkAge();
    }

    this.checkAge = function() {
        if (this.age >= 18 & Number.isInteger(this.age)) {
            return alert(this.name + ' ' + this.age + ' ' + this.phone + ' ' + this.mail)
        }
    }

}

let cont = new Contacts();
cont.getData()
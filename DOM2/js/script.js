


const doctorArray = [
    {"id": 1, "name": "Терапевт", "parent_id": null}, 
    {"id": 2, "name": "ЛОР", "parent_id": null}, 
    {"id": 3, "name": "Эндокринолог", "parent_id": null}, 
    {"id": 11, "name": "Терапевт Нестерович Светлана Петровна", "parent_id": 1}, 
    {"id": 12, "name": "Терапевт Яценко Галина Ильдусовна", "parent_id": 1}, 
    {"id": 13, "name": "ЛОР Аношко Лилия Николаевна", "parent_id": 2}, 
    {"id": 14, "name": "ЛОР Леус Галина Владимировна", "parent_id": 2},
    {"id": 15, "name": "ЛОР Мирутко Дмитрий Дмитриевич ", "parent_id": 2}, 
    {"id": 16, "name": "Эндокринолог Рустамов Мирзабек Надирович", "parent_id": 3}, 
    {"id": 17, "name": "Эндокринолог Сергеева Ирина Геннадьевна", "parent_id": 3},]

let form = document.querySelector("#visitForm");


form.addEventListener("submit",function(event) {
    //event 
    //this
    event.preventDefault();
    checkForm();
})
//проверка формы
let checkForm = function() {
    let fio = document.getElementById("visitFio");
    let address = document.getElementById("visitAddress");
    let contact = document.getElementById("visitContact");
    let mkb = document.getElementById("visitMKB");
    let doctor = document.getElementById("visitDoctor");
    let date = document.getElementById("visitDate");

    let visitArray = [fio, address, contact, mkb, doctor, date];
    let formFlag = true;
    visitArray.forEach(elem => {
        if (elem.value.length==0 ) {
            elem.classList.add("is-invalid");
            elem.nextElementSibling.style.display = "block";
            formFlag = false;
        } 
    })
    if (formFlag) {
        let visitObj = {}
        visitArray.forEach(elem => {
            visitObj[elem.getAttribute("name")] = elem.value            
            
        })
        //второй вариант
        // visitObj = {
        //     fio : fio.value,
        //     address: address.value,
        //     contact: contact.value,
        //     mkb: mkb.value,
        //     doctor: doctor.value,
        //     date : date.value
        // }
        sendForm(visitObj)
    }


    
}

let sendForm = function(obj) {
    alert(`
        Ваши данные:
        ФИО: ${obj.fio}
        Адрес: ${obj.address}
        Контакты: ${obj.contact}
        Дата посещения: ${obj.date}

    `)
}

//убираем ошибку при фокусе

let removeValid = function() {
    this.classList.remove("is-invalid");
    if (this.nextElementSibling.tagName != "SELECT") {
        this.nextElementSibling.style.display = "none";
    }
    
}


let formElements = document.querySelectorAll("input.form-control, select.form-select");

formElements.forEach(elem => elem.addEventListener("focus", removeValid));



let visitDoctorBlock = document.querySelector("#visitDoctorBlock");
let visitDoctor = document.querySelector("#visitDoctor");

//Добавление направлений в select
visitDoctor.innerHTML = `<option selected disabled value="">Выберите направление</option>`;

let directionArray = doctorArray.filter(elem=> elem.parent_id === null)

visitDoctor.innerHTML += directionArray.map(elem => {
    return `<option id='doc${elem.id}'>${elem.name}</option>`
})




let setDoctor = function() {
    if (this.nextElementSibling.tagName == "SELECT") {
        this.nextElementSibling.remove();
    };
    let selected = this.options[this.selectedIndex];
    let selectedId = +selected.id.slice(3);
    let doctors = doctorArray.filter(elem=> elem.parent_id === selectedId);
    
    if (doctors.length!=0) {
        let newSelect = document.createElement("select");
        newSelect.classList.add("form-select")
        newSelect.innerHTML = `<option selected disabled value="">Выберите врача</option>`;
        newSelect.innerHTML += doctors.map(elem => {
            return `<option id='doc${elem.id}'>${elem.name}</option>`
        })

        this.after(newSelect)

    }
}

visitDoctor.addEventListener("change", setDoctor);

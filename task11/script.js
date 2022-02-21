function delivery() {

    
    let fieldName = null,
     fieldPhone = null,
     fieldMail = null,
     fieldDateCurrent = null,
     fieldCourier = null,
     fieldDistA = null,
     fieldDistB = null,
     fieldDateDeparture = null,
     fieldDateDelivery = null;
    
    let allFields = [
        // fieldName,
        // fieldPhone,
        // fieldMail,
        // fieldDateCurrent,
        // fieldCourier,
        // fieldDistA,
        // fieldDistB,
        // fieldDateDeparture,
        // fieldDateDelivery
    ]

    let dictances = [
        {a: 'Минск', b: 'Брест', c: 342},
        {a: 'Минск', b: 'Гомель', c: 291},
        {a: 'Минск', b: 'Могилев', c: 203},
        {a: 'Минск', b: 'Витебск', c: 275},
        {a: 'Минск', b: 'Гродно', c: 267},

        {a: 'Брест', b: 'Минск', c: 342},
        {a: 'Брест', b: 'Гомель', c: 536},
        {a: 'Брест', b: 'Могилев', c: 530},
        {a: 'Брест', b: 'Витебск', c: 617},
        {a: 'Брест', b: 'Гродно', c: 269},

        {a: 'Гомель', b: 'Минск', c: 291},
        {a: 'Гомель', b: 'Брест', c: 536},
        {a: 'Гомель', b: 'Могилев', c: 177},
        {a: 'Гомель', b: 'Витебск', c: 340},
        {a: 'Гомель', b: 'Гродно', c: 558},

        {a: 'Могилев', b: 'Минск', c: 203},
        {a: 'Могилев', b: 'Брест', c: 530},
        {a: 'Могилев', b: 'Гомель', c: 177},
        {a: 'Могилев', b: 'Витебск', c: 163},
        {a: 'Могилев', b: 'Гродно', c: 470},

        {a: 'Витебск', b: 'Минск', c: 275},
        {a: 'Витебск', b: 'Брест', c: 617},
        {a: 'Витебск', b: 'Могилев', c: 163},
        {a: 'Витебск', b: 'Гомель', c: 340},
        {a: 'Витебск', b: 'Гродно', c: 542},

        {a: 'Гродно', b: 'Минск', c: 267},
        {a: 'Гродно', b: 'Брест', c: 269},
        {a: 'Гродно', b: 'Могилев', c: 470},
        {a: 'Гродно', b: 'Гомель', c: 558},
        {a: 'Гродно', b: 'Витебск', c: 542},
    ]

    let prices = [
        {method: 'Самолет', price: 100},
        {method: 'Такси', price: 5},
        {method: 'Частный водитель', price: 50},
        {method: 'Пеший курьер', price: 2}
    ]

    let deliveryMethods = ['Самолет', 'Такси', 'Частный водитель', 'Пеший курьер'];
    let destinations = ['Минск', 'Брест', 'Гомель', 'Могилев', 'Витебск', 'Гродно']; 

    
    let h1 = document.createElement('h1');
    h1.innerText = 'Заполните форму доставки'
    document.body.append(h1);

let showForm = function() {
       
       let form = document.createElement('form');
       form.classList.add('delivery_form');
       form.addEventListener('submit' , (e) => {
        formEvent(e, form)});
        

 

        // let destinationsOptions = function(elem) {
        //    destinations.map(function(v){
        //        let destinationsOption = document.createElement('option');
        //        destinationsOption.value = v;
        //        destinationsOption.innerHTML = v;
        //     elem.appendChild(destinationsOption);
        //    });}
       
           

       let fio = document.createElement('input');
       fio.setAttribute('type', 'text');
       fio.setAttribute('name', 'fio');
       fio.setAttribute('placeholder', 'Введите ФИО')
       fio.classList.add('form__inputs');
       fio.required = 'true';

       let phone = document.createElement('input');
       phone.setAttribute('type', 'phone');
       phone.setAttribute('name', 'phone');
       phone.classList.add('form__inputs');
       phone.setAttribute('placeholder', 'Введите ваш номер телефона');
       phone.required = 'true';

       let mail = document.createElement('input');
       mail.setAttribute('type', 'email');
       mail.setAttribute('name', 'mail');
       mail.setAttribute('placeholder', 'Введите вашу почту');
       mail.classList.add('form__inputs');
       mail.required = 'true';

       function twoDigits(num) {
        if (num < 10) {
        return ('0' + num).slice(-2);
        } else {
        return num
        }
        }
        

       let today = document.createElement('input')
       today.setAttribute('type', 'datetime');
       today.setAttribute('name', 'date');
       today.setAttribute('readonly', 'readonly');
       today.classList.add('form__inputs');
       let date = new Date()
       today.value = date.toDateString() + '  Time - ' + twoDigits(date.getHours()) + ':' + twoDigits(date.getMinutes());
       today.required = 'true';

       let courier = document.createElement('select');
       courier.setAttribute('name', 'courier');
       courier.classList.add('form__inputs');
       courier.required = 'true';
           let deliveryOption = createSelect(deliveryMethods);
           deliveryOption.map(option => {
            courier.append(option);
           });

       let departure = document.createElement('select');
       departure.setAttribute('name', 'depart');
       departure.classList.add('form__inputs');
       departure.required = 'true';
    //    destinationsOptions(departure);

      
       let arrival = document.createElement('select');
       arrival.setAttribute('name', 'arrival');
       arrival.classList.add('form__inputs');
       arrival.required = 'true';
    //    destinationsOptions(arrival);

       let optionDestination = createSelect(destinations);
       let optionDeparture = createSelect(destinations);
       optionDeparture.map(option => {
           departure.append(option);
       });
       optionDestination.map(option => {
           arrival.append(option);
       })

       let departureDate = document.createElement('input');
       departureDate.setAttribute('name', 'dateDepart');
       departureDate.setAttribute('type', 'date');
       departureDate.classList.add('form__inputs');
       departureDate.required = 'true';

       let deliveryDate = document.createElement('input')
       deliveryDate.setAttribute('type', 'date');
       deliveryDate.setAttribute('name', 'dateDeliv')
       deliveryDate.classList.add('form__inputs');
       deliveryDate.required = 'true';

       let sumButton = document.createElement('button');
       sumButton.innerText = 'Рассчитать стоимость';
       sumButton.classList.add('sumButton');

    
       
    //    let check = function() {
    //        let inputField = 
    //        [fio, phone, mail, today, courier, 
    //         departure, arrival, departureDate, deliveryDate];
    //         let formFlag = true;
    //         inputField.forEach(elem => {
    //             if(elem.value.length == 0) {
    //                 formFlag = false; 
    //             }
    //         })
    //         if(formFlag) {
    //             let inputObj = {
    //                 fieldName : fio.value,
    //                 fieldPhone : phone.value,
    //                 fieldMail : mail.value,
    //                 fieldDateCurrent : today.value,
    //                 fieldDistA : departure.value,
    //                 fieldDistB : arrival.value,
    //                 fieldDateDeparture : departureDate.value,
    //                 fieldDateDelivery : deliveryDate.value
                    
    //             }
    //             }else if(!formFlag) {
    //             p = document.createElement('p');
    //                 p.innerText = 'Все поля должны быть заполнены!';
    //                 form.after(p);
                    

    //         }
    //         sendForm();
    //    }
    //    let sendForm = function() {
    //        console.log(`Ваши данные: 
    //        ФИО : ${fio.value}
    //        Телефон : ${phone.value}
    //        Почта : ${mail.value}
    //        Дата : ${today.value}
    //        Способ доставки : ${courier.value}
    //        Пункт отправления : ${departure.value}
    //        Пункт прибытия : ${arrival.value}
    //        Дата Отправления : ${departureDate.value}
    //        Дата доставки : ${deliveryDate.value}`);
    //    }
        
    function formEvent(e, container, dep, ariv) {
            e.preventDefault();
            dep = departure.value;
            ariv = arrival.value
            if(dep == ariv) return;
            
        
            // save();
          
            console.log(allFields);
            [...container.children].map((elem, i) => {
                if (elem.nodeName != 'BUTTON') allFields[i] = elem.value;
            });
             [ 
                fieldName,
                fieldPhone,
                fieldMail,
                fieldDateCurrent,
                fieldCourier,
                fieldDistA,
                fieldDistB,
                fieldDateDeparture,
                fieldDateDelivery,
            ] =allFields 
            
            let price = calculation();
            showCalculate(price);
        }
      

        form.append(fio, phone, mail, today, courier, departure, arrival, departureDate, deliveryDate, sumButton);
        document.body.append(form);

    };
    function createSelect(data) {
        return data.map(elem => {
            let option = document.createElement('option');
            option.setAttribute('value', elem);
            option.innerText = elem;
            return option;
        })

    }
    //         function save() {
    //     let d = document,
    //   inp = d.getElementsByClassName('form__inputs'),
    //   mas = allFields;
    //   for (let i = 0; i < inp.length; i++) {
    //     mas[i] = inp[i].value;
    //     mas[i] = allFields[i];
    //   }
    //   console.log(allFields);
    // }
    
    function calculation() {
        let distA = fieldDistA,
            distB = fieldDistB,
            method = fieldCourier;
        let dist = dictances.find(elem => {
            if ((elem.a == distA || elem.b == distA) && (elem.a == distB || elem.b == distB)) {
                return elem;
            }
        })
        
        let coof = prices.find(elem => elem.method == method ? elem: null) 
        return dist.c * coof.price; 
        
    }
   function showCalculate(price) {
       if(document.body.lastChild.className != 'price'){
       let result = document.createElement('div');
       result.classList.add('price');
       result.innerText = `Стоимость доставки от ${fieldDistA} до ${fieldDistB} будет равна ${price}`;
       document.body.append(result);
    }else {
        document.body.lastChild.innerText = `Стоимость доставки от ${fieldDistA} до ${fieldDistB} будет равна ${price}`;
   }

   }
    
    
showForm();    
};
window.addEventListener('DOMContentLoaded', delivery);


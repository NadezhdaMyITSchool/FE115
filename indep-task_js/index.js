
function delivery() {
    let fieldName = null,
        fieldPhone = null,
        fieldEmail = null,
        delMethods = null,
        fieldDateCurrent = null,
        fieldDistA = null,
        fieldDistB = null,
        fieldDateDeparture = null,
        fieldDateDelivery = null;
    let dataArr = [
        fieldName,
        fieldPhone,
        fieldEmail,
        delMethods,
        fieldDateCurrent,
        fieldDistA,
        fieldDistB,
        fieldDateDeparture,
        fieldDateDelivery
    ];
    let distances = [
        {
            a: 'Минск',
            b: 'Гродно',
            d: 276
        },
        {
            a: 'Минск',
            b: 'Витебск',
            d: 291
        },
        {
            a: 'Минск',
            b: 'Брест',
            d: 351
        },
        {
            a: 'Минск',
            b: 'Гомель',
            d: 312
        },
        {
            a: 'Минск',
            b: 'Могилев',
            d: 198
        },
        {
            a: 'Гродно',
            b: 'Витебск',
            d: 567
        },
        {
            a: 'Гродно',
            b: 'Брест',
            d: 234
        },
        {
            a: 'Гродно',
            b: 'Гомель',
            d: 597
        },
        {
            a: 'Гродно',
            b: 'Могилев',
            d: 483
        },
        {
            a: 'Витебск',
            b: 'Брест',
            d: 633
        },
        {
            a: 'Витебск',
            b: 'Гомель',
            d: 329
        },
        {
            a: 'Витебск',
            b: 'Могилев',
            d: 158
        },
        {
            a: 'Брест',
            b: 'Гомель',
            d: 649
        },
        {
            a: 'Брест',
            b: 'Могилев',
            d: 535
        },
        {
            a: 'Гомель',
            b: 'Могилев',
            d: 177
        }
    ];
    let prices = [
        {
            method: 'самолет',
            price: 10
        },
        {
            method: 'такси',
            price: 2
        },
        {
            method: 'частный водитель',
            price: 3
        },
        {
            method: 'пеший курьер',
            price: 1
        }
    ]

function showForm() {
 let deliveryMethods = ['самолет', 'такси', 'частный водитель', 'пеший курьер'];
 let destinations = ['Минск', 'Гродно', 'Витебск', 'Брест', 'Гомель', 'Могилев']

    let form = document.createElement('form');
    form.setAttribute('class', 'deliveryForm');

    let fio = document.createElement('input');
    fio.setAttribute('type', 'text');
    fio.setAttribute('placeholder', 'ФИО');
    fio.setAttribute('name', 'fio');
    fio.required = 'true';

    let phone = document.createElement('input');
    phone.setAttribute('type', 'tel');
    phone.setAttribute('placeholder', 'телефон');
    phone.setAttribute('name', 'phone');
    phone.required = 'true';

    let email = document.createElement('input');
    email.setAttribute('type', 'email');
    email.setAttribute('placeholder', 'yourmail@mail.com');
    email.setAttribute('name', 'email');
    email.required = 'true';

    let deliveryType = document.createElement('select');
    deliveryType.setAttribute('name', 'deliveryType');
    deliveryType.required = 'true';
    let deliveryTypeOptions = createSelect(deliveryMethods);
    deliveryTypeOptions.map(option => {
        deliveryType.append(option);
    })

    let today = document.createElement('input');
    today.setAttribute('type', 'datetime');
    today.setAttribute('name', 'today');
    let nowToday = new Date();
    today.value = `${nowToday.getDate()} / ${nowToday.getMonth() + 1} / ${nowToday.getFullYear()}, ${nowToday.getHours()}:${nowToday.getMinutes()}:${nowToday.getSeconds()}`
    today.required = 'true';

    let departure = document.createElement('select');
    departure.setAttribute('name', 'departure');
    departure.required = 'true';

    let departureOptions = createSelect(destinations);
    departureOptions.map(option => {
        departure.append(option);
    })

    let destination = document.createElement('select');
    destination.setAttribute('name', 'destination');
    destination.required = 'true';

    let destinationOptions = createSelect(destinations);
    destinationOptions.map(option => {
        destination.append(option);
    })

    let departureDate = document.createElement('input');
    departureDate.setAttribute('type', 'date');
    departureDate.setAttribute('name', 'departureDate');
    departureDate.required = 'true';

    let deliveryDate = document.createElement('input');
    deliveryDate.setAttribute('type', 'date');
    deliveryDate.setAttribute('name', 'deliveryDate');
    deliveryDate.required = 'true';

    let costBtn = document.createElement('button');
    costBtn.setAttribute('type', 'submit');
    costBtn.innerHTML = 'Рассчитать стоимость';
    form.addEventListener('submit', (e) => {
        formHandler(e, form, departure, destination);
    });

    document.body.append(form);
    form.append(fio, phone, email, deliveryType, today, departure, destination, departureDate, deliveryDate, costBtn);

}

function createSelect (arr) {
    return arr.map(elem => {
        let option = document.createElement('option');
        option.setAttribute('value', elem);
        option.innerHTML = elem;
        return option;
    })
}

function formHandler(e, container, dep, dest) {
    e.preventDefault();
    if(dep.value == dest.value) return
    [...container.children].map((elem, i) => {
        if(elem.tagName != 'BUTTON') dataArr[i] = elem.value;
    });
    [
        fieldName,
        fieldPhone,
        fieldEmail,
        delMethods,
        fieldDateCurrent,
        fieldDistA,
        fieldDistB,
        fieldDateDeparture,
        fieldDateDelivery
    ] = dataArr;
    console.log(dataArr);
    let price = calculation();
    showCalculation(price);
}

function calculation() {
    let distA = fieldDistA,
        distB = fieldDistB,
        method = delMethods;
    let dist = distances.find(elem => {
        if ((elem.a == distA || elem.b == distA) && (elem.a == distB || elem.b == distB)) {
            return elem;
        }
    });
    let coef = prices.find(elem => elem.method == method ? elem : null)
    return dist.d * coef.price;

}

function showCalculation(price) {
    if(document.body.lastChild.className != 'price') {
        let priceFinal = document.createElement('div');
        priceFinal.setAttribute('class', 'price');
        priceFinal.innerHTML = `Стоимость доставки ${price}`;
        document.body.append(priceFinal);
    } else {
        document.body.lastChild.innerHTML = `Стоимость доставки ${price}`;
    }
    
}

showForm()
}
window.addEventListener('DOMContentLoaded', delivery)


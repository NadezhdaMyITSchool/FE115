//1. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice вырежте и запишите в новый массив элементы [4, 5].

arr = [1, 2, 3, 4, 5];
arr1 = arr.slice(3, 5);  
console.log(arr1);



//2. Дан массив ["Banana", "Orange", "Apple", "Mango", "Apple"]. Заменить все яблоки на груши
 arr2 = ["Banana", "Orange", "Apple", "Mango", "Apple"];


 a = [];
 a = arr2.map(function(item) {
     return item == "Apple" ? "Peach" : item;
 });
 console.log(a);

//-----------FOR EACH------
 arr21 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
 arr21.forEach(function(item, i) {
     if(item == "Apple")
     arr21[i] = "Peach"

});
console.log(arr21)
//--------
arr2.forEach((item, index, array) => {
     if (item == "Apple") {
         arr2[index] = "груша";
     }
 });
 console.log(arr2);

 //------------------------------------
// let arr3 = arr2.filter(function(fruit) {
//     return fruit !="Apple";
// });
// console.log(arr3);   выведет новый массив отфильтровав по нашему условию- убрав все яблоки
//----------------------------


//3. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. Решить через Reduce и forEach
//-----REDUCE
let arr3 = [8, 2, 0, 3, 4, 5, 5, 6, 7];
let kol = 1;
let result1 = arr3.reduce((sum, item) => {
    if(sum>10) {
        console.log(kol);
        
    }  else {
        kol++;
        return sum + item;
    }
});
сonsole.log(kol, result1);


let count=0, sum=0, flag = false;
arr3.forEach( item  => { 
    sum = sum + item;
    if (flag == false) count++ ;
    if (sum > 10) flag = true;
})
// console.log(sum);
// console.log(flag)

console.log(count)




//4. Дан массив с именами ["rachel", "joe", "ben", "ross", "marcel"]. Сделать каждую первую букву заглавной, используя методы перебора массива

arr4 = ["rachel", "joe", "маша", "ben", "ross", "marcel"];

arr4.forEach(item => console.log(capitalizeFirstLetter(item)));

function capitalizeFirstLetter(item) {
    return item[0].toUpperCase() + item.slice(1); 
}

//return item[0].toUpperCase() - из первой буквы исходного слова, приведенной к верхнему регистру

//item.slice(1) -из остальной части слова, которая получается методом slice, которому в качестве аргумента передаётся начальный индекс, с которого происходит "вырезание"

// второй метод  Map
console.log(arr4.map(n => `${n[0].toUpperCase()}${n.slice(1)}`).join(', '))




//5. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. 
arr5 = [1, 2, 3, 4, 5, 6, 10];
let arrNew = arr5.map(item => item*item);
console.log(arrNew);


//6. Дан массив с числами. Оставьте в нем только отрицательные числа.
arr6 = [1, -2, -3, 4, 5, -6, 0, 10];
arrayNew = arr6.filter(item => item < 0);
console.log(arrayNew)

//filter -фильтрует и оставляет только то, что соответствует условию



//7. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr7 =['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'восемь'];
arrayNew7 = arr7.filter(item => item.length >5);
console.log(arrayNew7);



//8. Напишите код, который определяет сумму и произведение значений массива
//10. Дан массив с числами. Найдите сумму этих чисел через reduce
arr8 = [1, 2, 3, 4, 5];
let sumArray = arr8.reduce((itemLeft, itemRight, currentIndex) => {
return itemLeft+itemRight
    }  
);
console.log(sumArray);

console.log(arr8.reduce((itemLeft, itemRight) => itemLeft*itemRight));



//9. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел
arr9 = [4, -2, -3, 9, 5, -6, 0, 144];
arrNew9 = arr9.filter(item => item > 0);
console.log(arrNew9);

console.log(arrNew9.map(item => Math.sqrt(item)));
//0 убирает


//11 МЕТОД FILL(value, startIndex, finishIndex) - аполняет все элементы массива от начального до конечного индексов одним значением.(a, b, c)-a-на что меняем, b - с каого индекса включительно, с - по какой не включительно
let arr11 = [1, 2, 3, 4, 5, 6];
console.log(arr11.fill(0, 2, 4));  //[1, 2, 0, 0, 5, 6]
// console.log(arr11.fill(5, 1)); //[1, 5, 5, 5, 5, 5]
// console.log(arr11.fill(5)); //[5, 5, 5, 5, 5, 5]


//метод includes(searchElement,startIndex) позволяет определить, содержит ли массив искомый элемент. В случае нахождения элемента метод возвращает логическое значение true, в обратном случае false.
//Допускается использование отрицательных значений, в этом случае индекс с которого будет произведено сравнение элементов будет расчитан по следующей формуле: length (длина массива) + startIndex.

let arr111 = [1, 'a', 2, 'b', 0, 'a', 'b', 'c'];
console.log(arr111.includes(0));  //true -так как 0 есть
console.log(arr111.includes('d')); //false
console.log(arr111.includes(1, 1)); //false, т.к ищет начиная с 1 индекса
console.log(arr111.includes(0, -6));//длина 8 +(-6)=index=2
console.log(arr111.includes(0, 2));



//Метод flat() - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth(глубина)
array = [1, 2, [5, 6, [8,3]]];
console.log(array);

let arrayN = array.flat();
console.log(arrayN);   //[1,2,5,6,[8,3]]

let arrayN1 = arrayN.flat();
console.log(arrayN1);  //[1,2,5,6,8,3]

let arrayN2 = array.flat(2);//если знаем вложенность, то указываем, [1,2,5,6,8,3]
console.log(arrayN2);

//flatMap() ------?????????????????????????????




//some() - позволяет проверить соответствует ли по крайней мере один элемент в массиве условию, заданному в передаваемой функциБ передает true либо false
//Функция обратного вызова, которая будет выполнена один раз для каждого элемента в массиве до тех пор, пока не найдет такой элемент, для которого вернет истинное значение.
arr112 = [1, 2, 3, -5, ,  4, 5, 6];
let chek = function(item) {
    return item = ' ';
}
    
 console.log(arr112.some(chek));
//в чем разница с includes без использования индекса?????????




//??????????????????????
//every() позволяет проверить (в порядке возрастания индекса), все ли элементы в массиве соответствуют условию заданному в передаваемой функции.

// arr113 = [1, 2, 3, -5,  4, 5, 6];

// console.log(arr113.every(
//     function chek113(item) {
//     return item > 2;
// }));


//findIndex() возвращает значение индекса элемента в массиве, который соответствует условию в переданной функции, если ни один элемент не удовлетворяет условию в переданной функции - то -1.
arr114 = [1, 2, 3, -5,  4, 5, 6];

console.log(arr114.findIndex(
    function chek113(item) {
    return item == 3;
}));



//12. Написать функцию, которой передаем, имя, фамилия и возраст, и она возвращает строку "Привет, Иван Петров с возрастом 17 лет" 

let name = 'Петя';
let firstName = 'Дудочкин';
let age = '17';
let hello = function (name, firstName, age) {
    console.log('Привет '+ name + ' ' + firstName + ' ' + 'с возрастом ' + age + 'лет')
};
hello(name, firstName, age);


//13. Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.
let calc = function(a, b, c) {
    console.log((a-b)/c) ;
  }
  let x= 14;
  let y = 4;
  let z = 2;

calc(x, y, z);

//сокращенная запись
let qwe = (a,b,c) => ((a-b)/c);
console.log(qwe(x,y,z));


//14. Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.

let result = function(a) {
    let sqr = a*a;
    let cube = a*a*a;
    return [sqr, cube] ;
    
}
console.log(result(z));
//return не возвращает два значения????


//15. Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.
let a1 = 100,
    b1 = 102;

let minMax = function (num1, num2) {
    if (num1<num2) {
        console.log('min '+ num1);
        console.log('max '+ num2);
    }
    else if (num1>num2) {
        console.log('min '+ num2);
        console.log('max '+ num1)
    }

        else {
            console.log('Числа равны')
        }
};

minMax(a1,b1);

// -------2 вариант

let minM = function (num1, num2) {
    if (num1==num2) {
        console.log('Числа равны')
    }
    else {
        console.log('min ' + Math.min(num1,num2));
        console.log('max ' + Math.max(num1,num2));
    }
};
minM(a1,b1);



//16. Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван). Через new Date()

let names = 'Иван';
let date = new Date();
let hour = date.getHours();

let hi = function (name, time) {
    if (time>=6 && time<12) {
        console.log ('Доброе утро, ' + name);
    } else if (time>=12 && time<18) {
        console.log ('Доброе день, ' + name);
    } else if (time>=18 && time<22) {
        console.log ('Доброе вечер, ' + name);
    } else {console.log ('Доброй ночи, ' + name);}
};
hi(names, hour)
console.log (date);


// let now = new Date().toLocaleString();  //время на данный момент
// console.log (now);
// let hour = now.getHours();
// console.log (hour);










//Разобраться с 3 задачей forEach!!!!!!!!!!!!!!!!!!!!!!!!
//https://qna.habr.com/q/694205



//https://itchief.ru/javascript/date - работа с датами, временем
//http://old.code.mu/tasks/javascript/advanced/nekotorye-prodvinutye-funkcii-javascript.html 

let arr = new Map([
 ['str', 'Hello'],
 ['sum', 123],
 ['num', 15.8],
 ['flag', true],
 ['txt', 'true']
]);

// arr.forEach(function (item, i) {
//  console.log("param key:" + i + " value: " + item + " is type of " + typeof item);
// });

const arrA = new Map([
 ['a1', 3 % 5],
 ['a2', 5 + '3'],
 ['a3', '5' - 3],
 ['a4', 75 + 'кг'],
 ['a5', 785 * 653],
 ['a6', 100 / 25],
 ['a7', 0 * 0],
 ['a8', 2 / 0],
 ['a9 ', 89 / 0],
 ['a10', 98 + 2],
 ['a11', 5 - 98],
 ['a12', (8 + 56 * 4) / 5],
 ['a13', (9 - 12) * 7 / (5 + 2)],
 ['a14', +"123"],
 ['a15', 1 || 0],
 ['a16', false || true],
 ['a17', true > 0],
]);
//
// arrA.forEach(function (item, i) {
//  console.log("param key:" + i + " value: " + item + " is type of " + typeof item);
// });


//3. V = 3.1415 r^2 h;
let h = 10;
let VCilindra = 3.1415 * Math.pow(arrA.get('a7') / 2, 2) * h;
// console.log(VCilindra);

//4. S = 3.1415 × r2
let r = 5;
let SKruga = 3.1415 * Math.pow(r, 2);
// console.log(SKruga);

//5. S = ((a+b)/2)hНайдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см (h)
let a = 5;
let b = 7;
let hTr = 10;
let STrap = ((a + b) / 2) * hTr;
// console.log(STrap);

//6.
let a1 = 8;
let b1 = 3;
// a+2(x-b)=16;
let x1 = ((16 - a1) / 2) + b1;
// console.log(x1);
// b(x+15)=a+6x;
let x2 = (a1 - 15 * b1) / (b1 - 6);
// console.log(x2);
// x+2x+ax+bx=23780
let x3 = 23780 / (3 + a1 + b1);
// console.log(x3);

//7.
let srt1 = 'индо земля зашаталась под ногами-и вырос,';
let srt2 = 'и заревел он голосом диким...';
let srt3 = 'блеснула молния и ударил гром,';
let srt4 = 'а так какое-то чудище, страшное и мохнатое,';
let srt5 = 'как будто из-под земли, перед купцом:';
let srt6 = 'Он подошёл и сорвал аленький цветочек.';
let srt7 = 'зверь не зверь, человек не человек,';
let srt8 = 'В ту же минуту, безо всяких туч,';
let text = srt6 + ' ' + srt8 + ' ' + srt3 + ' ' + srt1 + ' ' + srt5 + ' ' + srt7 + ' ' + srt4 + ' ' + srt2;
// console.log(text);














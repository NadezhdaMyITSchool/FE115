console.log('task10');
document.write('task10' + '<br \\/>');

let dutyFree = function (normPrice, discount, hol) {

 return Math.floor(hol / ((normPrice * discount) / 100));
}

console.log(dutyFree(12, 50, 1000));
console.log(dutyFree(17, 10, 500));
console.log(dutyFree(24, 35, 3000));

document.write(dutyFree(12, 50, 1000) + '<br \\/>');
document.write(dutyFree(17, 10, 500) + '<br \\/>');
document.write(dutyFree(24, 35, 3000) + '<br \\/><br \\/><br \\/>');
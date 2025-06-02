const score = 500
console.log(score);

const balance = new Number(800);
console.log(balance);

console.log(balance.toString().length);
// 800.00 
console.log(balance.toFixed(2));
// 800.0
console.log(balance.toFixed(1));


// automatic round figure converted with two digit no 
const otherNumber = 25.956
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(3));

const hundred = 1000000000
console.log(hundred.toLocaleString());
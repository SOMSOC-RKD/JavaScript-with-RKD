// const score = 500
// console.log(score);

// const balance = new Number(800);
// console.log(balance);

// console.log(balance.toString().length);
// 800.00 
// console.log(balance.toFixed(2));
// 800.0
// console.log(balance.toFixed(1));


// automatic round figure converted with two digit no 
// const otherNumber = 25.956
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));

const hundred = 1000000000
// console.log(hundred.toLocaleString('en-IN'));
// console.log(hundred.toLocaleString());

// ************************* MATH *************************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4));
// console.log(Math.floor(4.4));
// console.log(Math.sqrt(4.4));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min)
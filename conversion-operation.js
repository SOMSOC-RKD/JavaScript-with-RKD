let score = "99ab"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "99" => 99 easily convert string 2 number
// "99ab" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log( booleanIsLoggedIn);
 
//  1 => true , 0 => false
// "" => f
// "rkd" => t



// *****************number to string convert code*****************
let someNumber = 99
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log( typeof stringNumber);

// ****************operation ********************************
let value = 3
let negValue = -value
console.log(negValue);
// for run this code write  (PS C:\Users\PC\Desktop\git> node javascript-with-rkd/conversion-operation then enter)
// console.log(2+2);
// console.log(2-2);    
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);    
// console.log(2%2);

// let a = "Ramkrishna"
// let b = " Das"
// let c =(a+b)

// console.log(c);


// ,,,,,,,,,,,,,,,,,sting + number
let a = "5"
let b = 6
let c =(a+b)

console.log(c);
// ,,,,,,,,,,,,,,,, [(+ true) is posible but (true +) is not possible]
console.log(+true)  



// increament operation 1

// let gameCounter = 100
// gameCounter++ ;
// console.log(gameCounter)




// increament operation 2

// let gameCounter = 100
// ++gameCounter ;
// console.log(gameCounter)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// link for study about prefix and post fix
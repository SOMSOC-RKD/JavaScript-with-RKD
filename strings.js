
const name = "Ramkrishna"
const age = 25

// old method
// console.log( name +  age + " you good");


//  in new method [``] is used 
// console.log(`Hellow my name is ${name}.I am ${age} year old.`)

// here [0=U,1=b, 2= i, 3=s, 4=o , 5=f 6=t]
const gameName = new String('Ubisoft')
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName[6]);

console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
// position of character[charAt]
console.log(gameName.charAt(3));
console.log(gameName.indexOf('U'));



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

// here  0 to 5 but 5 not counted only 0,1,2,3,4 is counted,,, in "substrings" nagative value not showing
const newString = gameName.substring(0,5)
 console.log(newString);

//   in "slice" nagative value is showing

const anotherString = gameName.slice (-8,5)
 console.log(anotherString);

//  trim/ clean space

const newStringOne = "     Ram    Das    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://github.com/SOMSOC-RKD/JavaScript-with-RKD/blob/main/strings.js"
console.log(url.replace ('strings', 'string'));

// to identify letter or object in perticular URL is present or Not
console.log(url.includes('RYT'));


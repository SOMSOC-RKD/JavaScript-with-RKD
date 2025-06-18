// arrays  ,,,,, array are write all time in "[]" = brackets, not Braces = "{}"
// data put within array is called "Elements"
// const myArr = [1,2,3,4,5,6, "RKD",25]
// console.log(myArr[0]);

const myArr = [0,1,2,3,4,5,6]
const myHeros = ["hanuman", "mahadev"]

const myArr2 = new Array(1,2,3,4,5)
//  console.log(myArr[1]);



 // Array method************

// when push in array it should be a number its add number

// myArr.push(1)
// myArr.push(10)
// myArr.push(157546)

//.pop use when push data is remove
// myArr.pop()


//.shift use when unshift  data is remove
myArr.unshift(6)
myArr.shift()
//  console.log(myArr)


// console.log(myArr.includes(9))
// console.log(myArr.includes(1))

//  const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// ***********SLICE, SPLICE**********
//normal
console.log("A", myArr);

// slice
// in slice element only two like 1,3 but result [1,2] and in splice all elements are shows like [1,2,3]
const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

//splice
// in splice original array is manupulated or effected 
const myn2 = myArr.splice(1,3)

console.log(myn2);
console.log("C", myArr);


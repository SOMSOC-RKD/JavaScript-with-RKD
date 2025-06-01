
// stack(primitive memory), 
// store in stack memory  here one copy of data is delivered
// let myName = "Ramkrishna"
// let anothername = myName;

// anothername = "RKD"
// console.log(anothername);
// console.log(myName);

// heap (non-primitive memory)
// store in heap memory  here not copy of data is delivered here reference of data and original value of data is deliverd.

let userOne = {
    email: "dasr4741@gmail.com",
    upi: "125689524@ypl"
}

let userTwo = userOne

userTwo.email = "agnimitra55@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
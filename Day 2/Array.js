//Array --Resizable ,mix datatypes


const myArr =[0,1,2,3,66,666,77]
console.log(myArr[0]);

// Shallow copy -->array 

const myArr2 =new Array (1,2,3,4)
console.log(myArr2);


// Array methods
// push 
// pop
// myArr.unshift(9)
myArr.shift(9) //remove first 
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr =myArr.join()
console.log(myArr);
console.log(typeof newArr); //Join converts into string



// slice ,splice

console.log("A ", myArr);
const myn1 =myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);


const myn2 =myArr.splice(1,3)

console.log("C ",myArr);
console.log(myn2);


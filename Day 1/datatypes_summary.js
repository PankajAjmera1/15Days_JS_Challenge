// primitive
// 7 types : String , Number ,Boolean , null , undefined ,Symbol,BigInt


const score= 100;
const scoreValue =100.3
const isLoggedIn =false
const outsideTemp =null
const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id ===anotherId);

const bigNumber =4343554534n
console.log(bigNumber);
// statically or dynamically typed js?

// Reference Type(Non Primitive)
// Array,objects ,Functions

const heros = ["shaktiman","spiderman"]
let myobj ={
    name : "pankaj",
    age : 22 ,
}

const myFunction =function(){
    console.log("Hello Decoder");
}

console.log(typeof myFunction);
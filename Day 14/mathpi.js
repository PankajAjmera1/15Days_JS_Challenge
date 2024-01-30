const descriptable =Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descriptable);

// console.log(Math.PI);


const chai = {
    name : 'ginger',
    price : 250,
    isAvailable :true,


    orderchai :function(){

        console.log("chai fat gyi ");

    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable :false,
    enumerable :false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for (let [key,value] of Object.entries(chai)) {
    if(typeof value !=='function'){
    console.log(`${key} :${value}`);
    }
    
}
// ==> singleton //const tinderUser = new Object ()


const tinderUser ={}
tinderUser.id ="123abc"
tinderUser.name ="Decoder"
tinderUser.isLoggedIn =false
console.log(tinderUser);

const regularUser = {
    email :"some@gmail.com",
    fullName:{
        userfullName :{
            firstname:"Decoder",
            lastname :"Pankaj"

        }
    }
}

// console.log(regularUser.fullName);


const obj1 ={1:"a", 2:""}
const obj2 ={3:"a" ,4:"b"}

// const obj3 = Object.assign({},obj1,obj2)


const obj3 = {...obj1,...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
// hasOwnProperty

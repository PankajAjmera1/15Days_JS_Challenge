// object Literal

const user ={
    username : "Decoder",
    loginCount : 8,
    signedIn : true,



    getUserdetails  :function(){
        // console.log("Got it ");
        console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserdetails());
// console.log(this);


// Constructor function

function User (username ,loginCount , isLoggedIn){
    this.username =username;
    this.loginCount =loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcom ${this.username}`);
    }
    return this
}

const userOne = new User("Decoder",12 ,true)
const userTwo =new User("Decoder PAnkaj",11 ,true)

console.log(userOne.constructor);
console.log(userTwo);

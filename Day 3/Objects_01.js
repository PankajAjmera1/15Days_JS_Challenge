//Singleton=> constructer se bnta h


//object literals

const mySym =Symbol("key1")

const Jsuser ={
    name : "Decoder",
    age :22,
    location :"UP",
    [mySym ]:"mykey1",
    isLoggdIn : false,
    "Email":"Email@decoder"
}
console.log(Jsuser.location);
console.log(Jsuser["location"]);
console.log(Jsuser[mySym]);

Jsuser.Email ="change@email"

// Object.freeze(Jsuser)

Jsuser.Email ="hifreezee@mail"

console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("Hello JS CHallenger");

}

Jsuser.greetingTwo = function(){
    console.log(`Hello JS CHallenger , ${this.name}`);

}

console.log(Jsuser.greeting());

console.log(Jsuser.greetingTwo());

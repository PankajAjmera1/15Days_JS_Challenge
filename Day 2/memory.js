// Stack(Primitive) ,Heap (Non-Primitive)
let myYoutube ="Decoder";

let anothername = myYoutube;
anothername ="chai"
console.log(myYoutube);
console.log((anothername));
let userOne ={
    email:"user@.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email = "hi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

// Heap original and stack copy me deal krta
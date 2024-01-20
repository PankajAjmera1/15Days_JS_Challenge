function calculateCartPrice(...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(9,200,400));





const user ={
    username :"decoder",
    price : 199
}

function handleObject(anyObject){
    console.log(`Usrname is${anyObject.username}`);
}
// handleObject(user)
handleObject({
    username:"Pankaj"
})



// aray
const myNewArray =[200,44,5,890]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
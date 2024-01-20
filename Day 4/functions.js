function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("C");
    console.log("D");
    console.log("E");
    console.log("R");

}
sayMyName()

// 

function addTwonumbers(num1,numb2){ //finction def =>Parameter
    // let result = numb2+num1
    // return result
    return num1+numb2

}
const result = addTwonumbers(3,4)

// console.log("Rresult"result);
console.log("Result:",result);


function loginUserMessage(userName){

    if(userName ===undefined) //(!username)
    {
        console.log("Please enter username");
        return

    }

return`${userName} just logged in`

}
// console.log(loginUserMessage("Decoder"));
console.log(loginUserMessage());











function SetUsernamer(username){
    //complex db calls
    this.username =username
    console.log("called");
}

function createUser(username,email,password){
    // SetUsernamer(username)
    SetUsernamer.call(this,username)
    this.email =email
    this.password =password
}

const chai =new createUser("chai","Chai@gmail","123456")
console.log(chai);

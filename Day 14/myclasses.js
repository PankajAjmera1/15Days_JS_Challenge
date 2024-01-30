// // ES6


// class User {
//     constructor(username ,email ,password){
//         this.username =username
//         this.email =email
//         this.password =password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username}hidecoder`
//     }
// }

// const chai = new User ("chai ","chai@gmail" ,"123")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());




// Behind the scene

function User(username,email,password){
    this.username =username
    this.email =email
    this.password =password
}

User.prototype.encryptPassword =function(){
    return `${this.password}abc`
}
const tea = new User("tea","tea@","123")
console.log(tea.encryptPassword());
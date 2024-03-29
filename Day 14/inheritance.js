class User {
    constructor(username){
        this.username =username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email =email
        this.password =password
    }
    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}
const chai = new Teacher ("chai","chai@teacher","1245")
chai.addCourse()


const masalChai = new User("masalchai")

masalChai.logMe()

console.log(chai === masalChai);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
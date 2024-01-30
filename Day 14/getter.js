// getter and setter

class User{
    constructor(email,password){
        this.email=email
        this.password =password
    }
    get password(){
        return this.ppassword.toUpperCase()
    }
    set password(value){
        this.ppassword =value  //maximum call stack error
    }
}
const decoder =new User ("decode@ai","abc")
console.log(decoder.password);
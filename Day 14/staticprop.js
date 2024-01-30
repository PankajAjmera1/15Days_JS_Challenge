class User {
    constructor(uername){
        this.username =uername
    }

    logMe(){
        console.log(`Username :${this.username}`);
    }
    static createId (){
        return `123`
    }
}
const decoder = new User ("decoder pankaj")

// console.log(decoder.createId());
class Teacher extends User {
    constructor(username ,email){
        super(username)
        this.email =email
    }
}

const iphone = new Teacher("iphone","iphone@")
// console.log(iphone.createId());
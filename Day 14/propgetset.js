// old getter setter

function User (email,password){
    this.eemail =email
    this.ppassword =password

    Object.defineProperty(this,'email',{
        get : function(){
            return this.eemail.toUpperCase()
        },
        set : function(value){
            this.eemail=value
        }
    })

}

const chai = new User ("chai@","123")
console.log(chai.email);


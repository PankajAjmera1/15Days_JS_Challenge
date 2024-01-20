const user ={
    username: "decoder",
    price :999,
     

    welcomeMessage : function(){
        console.log(`${this.username},welcome`);
        // console.log(this);
    }}

    // user.welcomeMessage()
    // user.username ="Pankaj"
    // user.welcomeMessage()

    console.log(this); //{}


    // function chai(){
    //     console.log(this);
    // }
    // chai()


    // function chai(){
    //     let username ="pankaj"
    //     console.log(this.username);
    // }
    // chai()

    // const chai =() => {
    //     let username ="decoder"
    //     console.log(this.username);
    // }
    // chai()


//    const addtwo =(num1,num2) =>{
//     return num1+num2

//     }
//     console.log(addtwo(3,4));


// const addtwo =(num1,num2) =>  num1+num2

// const addtwo =(num1,num2) =>  (num1+num2)

const addtwo =(num1,num2) =>  ({username:"Pankaj"})




    
    console.log(addtwo(3,4));
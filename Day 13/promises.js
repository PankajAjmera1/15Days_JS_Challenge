// fetch('htps://something').then().catch().finally()

// consume and creation
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    //  DB Calls ,cryptography , network

    setTimeout(function(){
        console.log('Async task complete');
        resolve()
    },1000)
})


// Consume

//resolve ==>then
promiseOne.then(function(){
    console.log('Promise consumed');
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async 02');
        resolve()
    },1000)
}).then(function(){
    console.log('asyncr 02 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Decoder",email : "decoder@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})



const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username : "Deocde",password:"123456"})

        }
        else{
            reject('ERROR :Something went wrong')
        }
    },1000)
})


promiseFour.then((user) => {
        console.log(user);
        return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error){
    console.log(error);
}).finally(() => console.log("The promise either resolvd or rejected"))



const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username : "JavaScript",password:"123456789"})

        }
        else{
            reject('ERROR :JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
     try {
        const response = await promiseFive
        console.log(response); 
     } catch (error) {
        console.log(error);
     }
}
consumePromiseFive()




// using api 




// async function getAllUsers (){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("Error 01",error);
//    }
// }


// getAllUsers()






fetch('https://jsonplaceholder.typicode.com/users')
.then((resultRRes) => {
    return resultRRes.json()

})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))







// fetch special queue 






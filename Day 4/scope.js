var c =50 //global scope

let a=300




if(true){
    let a =10
    const b=20
    var c=30
    console.log("inner" ,a);
}
// a & b 
console.log(c); 
console.log(a);
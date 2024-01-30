// let myName = "Pankaj   "
// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",
    getSPiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.pankaj = function(){
    console.log(`Pankaj present in all objects`);
}
Array.prototype.arrPankaj =function(){
    console.log(`Pankaj in Array to small herarchy`);
}
myHeros.pankaj()
// heroPower.pankaj()

myHeros.arrPankaj()
// heroPower.arrPankaj()

let anotherUsername = "Chai    "

String.prototype.truelength =function(){
    
}
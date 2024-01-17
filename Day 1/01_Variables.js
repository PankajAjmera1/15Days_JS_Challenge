const accountId = 21194
let accountEmail = "decoder@google.in"
var accountPasword = "12345"
accountCity = "Jaipur"
 let accountState;

// accountId =2  not allowed
accountEmail = "p@123.in"
accountPasword =  "211234"
accountCity = "Benagaluru"
// console.log(accountId);
// New way to print

/*Prefer not to use var
bcz of issue  issue in block scope and functional */
console.table([accountId,accountEmail,accountPasword,accountCity,accountState])
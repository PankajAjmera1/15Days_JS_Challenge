const myNumbers =[1.2,4,4,5,7.,8,9,]

// const newnums =myNumbers.map ((num)=> num+10)
// console.log(newnums);


// chaonong
 const newnums = myNumbers
                        .map((num) => num*10)
                        .map((num) => num+1)
                        .filter((num) => num>=40)

console.log(newnums);
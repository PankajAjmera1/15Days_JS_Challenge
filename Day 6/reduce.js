const mynums =[1,2,3]

// const mytotal =mynums.reduce(function (acc,curcal){
//     console.log(`acc:${acc} and currval ${curcal}`);
//     return acc + curcal
// },0)



const mytotal =mynums.reduce((acc,curr)=> acc+curr ,0)
 console.log(mytotal);


 const shoppingcart=[
    {
        itemname :"js course",
        price : 299
    },
    {
        itemname :"py course",
        price : 1299
    },
    {
        itemname :"java course",
        price : 5299
    },
    {
        itemname :"aiml course",
        price : 3299
    },

 ]

 const pricetopay =shoppingcart.reduce((acc,item) => acc + item.price ,0 )

 console.log(pricetopay);
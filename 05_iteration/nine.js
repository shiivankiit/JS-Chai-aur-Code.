const mynums = [1,2,3]
const mytotal = mynums.reduce(function(acc,currval){
    console.log(`acc ${acc} and currval:${currval}`);
    return acc+currval
},0)

//using arrow function.
const mytotals = mynums.reduce((acc,currval)=>acc+currval,0);
console.log(mytotal);


const shoppingcart= [
    {  
        itemname:"js course",
        price:2999
    },
    {
          itemname:"py course",
          price:3999
    },
    {
          itemname:"ts course",
          price:4999
    },
      {
          itemname:"node course",
          price:2999
    }
]
//create a function which sums all the value of price
const totalprice = shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(totalprice);

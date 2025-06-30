const myNumers = [1,2,3,4,5,6,7,8,9,10]
const newno=myNumers.map((num)=>{
   return num=num+10;
})

//chaning
const newNums = myNumers
             .map((num)=>num*10)
             .map((num)=>num+1)
             .filter((num)=>num>=40)
console.log(newNums);

//map:-->creates a new array of from calling  a function for every arry elmnt.
//doesnot execute function for emepty element.
//does not chnage the orignal array.
``
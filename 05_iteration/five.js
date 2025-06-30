const coding = ["js","ruby","java","python","copy"]
//for each() calls a function for each element in the array.
//it is also used for array.
coding.forEach(function(items){
    console.log(items);
})
//arrow function
coding.forEach((item)=>{
     console.log(item);
})

const arr=[
    {
         languageName:"javascript",
         languageFileName:"js"
    },
    {
          languageName:"java",
          languageFileName:".java"
    },
    {
           languageName:"python",
          languageFileName:".py"
    }
]

arr.forEach((item)=>{
        console.log(item.languageName);    
})
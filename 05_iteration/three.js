//High order arry loops.
//for of used for array.
//for in used for objects.
const arr = [1,2,3,4,5]

// for(const iterator of object){

// }

for  (const num of arr ){
   // console.log(num);
}
const greetings = "Hello world"
for(const greet of greetings)
{
    //console.log(`Each char is ${greet}`);
}

//Maps:holds key value pair.
const map = new Map() //creating a map.
map.set('IN',"India")
map.set('USA',"United state of america")
//console.log(map);

//it will prints the array
for(const key of map){
    console.log(key); 
}
//prints the key value seprately.
for(const [key,value] of map){
    console.log(key,':-',value);
    
}
//Primitive data-types. it's all is call-by-value.
//7 types: String,NO,Bool,NULL,undefined,Symbol,Big int,

const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;

let name="Sam";
let meme;

const id=Symbol('123');
const autoId=Symbol('123');//both of them are different.
console.log(id=== autoId);
console.log(typeof id);
console.log(typeof autoId);


//Refrence type or Non-primitive type.
//Array,Objects,Functions.
const heroes=["shaktiman","dog","elephant","naggraj"];
const family={
    name:"Sam",
    age:"20",
    city:"austraila"
}

const myfunction = function ()
{
    console.log("Hello world");
}
//Sum function.
function sum(a,b){
    return a+b;
}
let findsum=sum(2,3);
console.log(findsum);



//========================  Stack and Heap Memory.

//Stack(Primitive),Heap(Non-primitive).
//Stack will geave you the copy of the variable.so if you make any changes it does not affect original value.
//Heap geaves you the refrence of original value.

let bag="Red ball";
let anotherbag=bag;

anotherbag="Yellow ball";
console.log(bag);
console.log(anotherbag);


//Heap.--->Both od them refrence to a same variable.

let userOne={
    name:"Andrew",
    age:20,
    email:"hello@gmail.com"
}
let userTwo=userOne;
userTwo.name="Jack";
console.log(userOne.name);
console.log(userTwo.name);






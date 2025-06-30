//array
//Js array are resizable.
//Shallow copy=>It share the same refrence.
//Deep copy=>Do not share the same refrence.
const myarr=[0,1,2,3,4,5]  //no
const hero=["suhant","akshya"] //string
const  arr= new Array(0,1,2)
// console.log(myarr[0]);


//Array methods

myarr.push(6)  //adds the value in the last.
console.log(myarr);
myarr.pop()//removes the last element.

myarr.unshift(9)//add the value in the start
console.log(myarr);

myarr.shift()//removes the value from start.
console.log(myarr);

console.log(myarr.includes(4));
console.log(myarr.indexOf(4));

const newArr = myarr.join()

console.log(myarr);
console.log(newArr);

console.log(myarr);
console.log(typeof newArr);


//slice ,splice.

console.log("A",myarr);

const mynew1 = myarr.slice(1,3)//didn't manipulate the original array.
console.log("After slice "+mynew1);
console.log(myarr);
console.log(typeof mynew1);

const mynew2=myarr.splice(1,3);//manipulate the original array.
console.log("Original array "+ myarr);
console.log("After splice "+ mynew2);






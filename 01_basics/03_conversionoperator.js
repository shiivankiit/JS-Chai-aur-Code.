                                                        // String to no.
let score="33abc";
console.log(typeof(score));
console.log(typeof score);

let valueNo= Number(score);
console.log(typeof valueNo);
console.log(valueNo);

//"33"=>33, "33abc"=NAN. 
//true=1  , false=0.
                                                           //No to bool.
let islogg=1;
let boolislogg=Boolean (islogg);
console.log(boolislogg);
console.log(typeof boolislogg);

//1=>true 0=>false. 
//" "=> false.
//"hfhfu"=>true.
                                                                //No to String
let no=43;
let stringno= String (no);
console.log(stringno);
console.log(typeof stringno);

//********************************************************* Operations.****************************************************

let value=3;
let negvalue=-value;
console.log(negvalue);
console.log(typeof negvalue);

// console.log(2+2);
// console.log(2/2);
// console.log(2*2);
// console.log(2%2);
// console.log(2-2);
// console.log(2**2);

let str1="hello";
let str2="deep";

let str3=str1 + str2;
console.log(str3);
console.log(typeof str3);

console.log("1"+2);
console.log("2"+1);
console.log("1"+2+2);//priority will be given to the first type if string then all will be cnvrted to string
console.log(1+2+"2");//if no then all of them is cnvrted to the no.

let count=0;
count++;// prefix and postfix.
console.log(count);



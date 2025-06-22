const name="Michael"
const age=35

//String interpolation.
console.log(`Hello my name is ${name} and age is ${age}`);
//String object
const gameName= new String(`Jack hawk`)
//gameName is object here.we can acess it as a key value pair.
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.charAt(6));
//and much more method.

const newStr="Push yourself"
const modify=newStr.substring(0,4)
console.log(modify);

const cutstr=newStr.slice(3,8);
console.log(cutstr);

let game=" gtav"
console.log(game);
console.log(game.trim());

const url="https:/google.com.noonecare"
console.log(url.replace('noonecare','-'));

console.log(url.includes('google'));
console.log(url.includes('sam'));







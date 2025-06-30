const heroes=["thor","Ironman","spiderman"]
const heroines=["madhuri","katrina","shradha"]

heroes.push(heroines);
console.log(heroes);//array of heroines work as a single element here


const all = heroes.concat(heroines);//returns a new array
console.log(all);

const allnew = [...heroes,...heroines]//seprate the array
console.log(all);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(Infinity)//cnvrt it in a single array
console.log(real_another_array);


//specially used for data scrapping.

console.log(Array.from("Hitesh"));//forms the array.

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//combines them and form a new array.


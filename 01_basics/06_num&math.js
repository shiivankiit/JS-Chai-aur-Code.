const score=400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));//get priority before decimal.

console.log(Math);
console.log(Math.abs(-4));//-ve cnvrt to positive
console.log(Math.round(4.3));//round off the value
console.log(Math.ceil(4.2));//uppar part
console.log(Math.floor(4.9));//lower part
console.log(Math.min(3,4,5,6));
console.log(Math.max(4,9,6,5));
console.log(Math.random());
console.log((Math.random()*10)+1);


const min = 10;
const max =20;

console.log(Math.floor(Math.random()*(max-min+1))+min);

// How It Works:
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive), e.g., 0.234, 0.879, etc.
// Math.random() * (max - min + 1) scales that random decimal to a number between:
// 0 and max - min + 1
// In this case: 0 to 11 (because 20 - 10 + 1 = 11)
// Math.floor(...) rounds the result down to the nearest whole number between 0 and 10.
// Adding min shifts the range from:
// 0–10 → 10–20
// So the final result is a random integer from 10 to 20.















const mySym = Symbol("key1")
const user={
    name:"sam",
    [mySym]:"mykey1",
    age:20,
    city:"autralia",
    email:"abc@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(user.email);
console.log(user["email"]);
console.log(user.mySym);
console.log(typeof user.mySym);


user.email="cde@gmail.com";
//Object.freeze(user);//now we can change the value of user.

user.greeting= function(){
    console.log("Hello JS user");
}
console.log(user.greeting());

const accountId=22123;//we cant change it later.
let accountEmail="sam@gmail.com";//use to declare var that can be update....Block Scope.
var accountPassword="12345";//it does not have a block scope.
accountcity="Jaipur";

// Variables declared inside a { } block cannot be accessed from outside the block:
// Example
// {  let x = 2;}
// // x can NOT be used here
// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.
console.table([accountEmail,accountPassword,accountId,accountcity]);

// | Feature        | `var`                               | `let`         | `const`       |
// | -------------- | ----------------------------------  | ------------- | ------------- |
// | Scope          | Function-scoped                     | Block-scoped  | Block-scoped  |
// | Re-declaration | ✅ Allowed                          | ❌ Not allowed | ❌ Not allowed |
// | Re-assignment  | ✅ Allowed                          | ✅ Allowed     | ❌ Not allowed |
// | Hoisted        | ✅ Yes (initialized as `undefined`) | ✅ Yes (TDZ)   | ✅ Yes (TDZ)   |

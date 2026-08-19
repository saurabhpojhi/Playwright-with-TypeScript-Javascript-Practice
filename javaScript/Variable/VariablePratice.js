// 4 Ways to Declare a JavaScript Variable:
// Using var
// Using let
// Using const

//In this example, x, y, and z, are variables, declared with the var keyword:
var x= 4;
var y =5;
var z= x+y;
console.log(z);

// When to Use JavaScript var?
// Always declare JavaScript variables with var,let, orconst.

// The var keyword is used in all JavaScript code from 1995 to 2015.

// The let and const keywords were added to JavaScript in 2015.

// If you want your code to run in older browser, you must use var.

// When to Use JavaScript const?
// If you want a general rule: always declare variables with const.


// If you think the value of the variable can change, use let.

 const pen = 10;
 const book = 10;
 let total = pen+book;
console.log(total);
// The let keyword was introduced in ES6 (2015).

// Variables defined with let cannot be Redeclared.

// Variables defined with let must be Declared before use.

// Variables defined with let have Block Scope.

/* let x = "ram"
let x = 0 ; // SyntaxError: 'x' has already been declared

 */



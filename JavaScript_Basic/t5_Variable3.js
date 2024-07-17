// 3.
// Carry out a chain of conversions: create a
// Boolean from a BigInt created from a
// Number that was created from a String.
// Start with the value "1234". Is it possible?


let str1 = "1234";
let num1 = Number(str1);
let bigInt1 = BigInt(num1);
let bool1 = Boolean(bigInt1);


console.log(str1);
console.log(num1);
console.log(bigInt1);
console.log(bool1);
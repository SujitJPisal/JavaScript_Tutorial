// Print all values and all types of those values
// using console.log. Try to use string
// interpolation to display the value and type
// at the same time with a single console.log
// call, 
//for example, in the following form:  1000 [number].

let bool = true;
let num = 9;
let bigInt = 123456789123n;
let str = "Hello";
let obj = undefined;
let obj2 = null;


console.log(bool+` [${typeof bool}]`);
console.log(num+` [${typeof num}]`);
console.log(bigInt+` [${typeof bigInt}]`);
console.log(str+` [${typeof str}]`);
console.log(obj+` [${typeof obj}]`);
console.log(obj2+` [${typeof obj2}]`);

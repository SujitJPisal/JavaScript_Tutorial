// 5. Try adding two values of different types
// and check the results.

let i1 = 1;
let i2 = 2n;

// console.log(i1+i2);//Uncaught TypeError TypeError: Cannot mix BigInt and other types, use explicit conversions


let s1 = "41";
let s2 = "true";
console.log(i1+s1);

let b1 = true;
console.log(s1+b1);
console.log(s2+b1);

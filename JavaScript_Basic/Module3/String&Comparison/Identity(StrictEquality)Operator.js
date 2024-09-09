// identity (strict equality) operator


console.log(10 === 5); // 
console.log(10 === 10); // 
console.log(10 === 10n); // 
console.log(10 === "10"); // 
console.log("10" === "10"); // 
console.log("Alice" === "Bob"); // 
console.log(0 === false); // 
console.log(undefined === false);

//false  10===5
//true   10===10
//false  10===10n
//false  10 ==="10"
//true   "10" === "10"
//false  "Alice" ==="Bob"
//false  0===false
//false  undefined === false
// Logical operators

// a conjunction, i.e. logical AND (&& symbol)
// an alternative, i.e. logical OR (symbol ||)
// a negation, i.e. logical NOT (symbol !)

let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";


console.log(!nr);    // true
console.log(!year);   // false
console.log(!name);   // false
console.log(!empty);   // true


console.log(!!nr);    // false
console.log(!!name);   // true



// [Running] node "/workspaces/JavaScript_Tutorial/JavaScript_Basic/Module3/LogicalOperator.js"
// true
// false
// false
// true
// false
// true
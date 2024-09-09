// Other operators

// typeof
let year = 10191;
console.log(typeof year); // -> 
console.log(typeof false); // -> 

//number
//boolean


// instanceof
let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // ->
console.log(name instanceof Array); // ->

//true
//false


//delete
let user = {
name: "Alice",
age: 38
}; 
console.log(user.age); // -> 
delete user.age;
console.log(user.age); // -> 

// 38
// undefined
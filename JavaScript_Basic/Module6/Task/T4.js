// Use the debugger to understand why the final result logged is equal to zero 
// when on each iteration of for, a loop value of the variable result increases.
// Use Watch to track the changes in the selected variables.

let counter = 0; 
let maxValue = 10; 
let result = 1; 
 
debugger; 
for (counter = 0; counter < maxValue; counter++) { 
    console.log(result); 
    result *= maxValue - counter - 1; 
} 
 
console.log("Final result: ", result);



//  There are ten different numbers in this
// numbers array.
// let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];
// Write a program that 
// 1) first writes out all these numbers on the console, 
// 2) then only those that are even (hint: the remainder of dividing an even number by 2 is equal to 0),
// 3) then only those that are larger than 10 and at the same time smaller than 60. 


let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

// for first
console.log('all numbers');
for(let n of numbers){
    console.log(n);
}

//Second - those that are even
console.log('those that are even');
for(let n of numbers){
    if(n%2 == 0){
        console.log(n);
    }
}


//Third - those that are larger than 10 and at the same time smaller than 60. 

console.log('those that are larger than 10 and at the same time smaller than 60');
for(let n of numbers){
    if(n>10 && n<60){
        console.log(n);
    }
}

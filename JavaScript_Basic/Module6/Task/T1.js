// Write your own div function that will take
// two call arguments and return the result of
// dividing the first argument by the second.
// In JavaScript, the result of dividing by zero
// is the value Infinity (or -Infinity, if we try to
// divide a negative number). Change this. If
// you pass 0 as the second argument, your
// function should throw a RangeError
// exception with the appropriate message.
// Prepare a test call of the function for both
// valid division and division by zero.
// We have declared an array of numbers:


 
function div(a, b){
    
    if(b == 0)
    {
        throw new RangeError('Dinominator can not be zero');        
    }
    else
    {
        return a/b;
    }
    
    
}

console.log(div(100,0));
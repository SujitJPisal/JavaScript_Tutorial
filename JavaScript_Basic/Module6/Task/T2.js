
// We have declared an array of numbers:

// let numbers = [10, 40, 0, 20, 50];

// Write a program that, in a loop, 
// divides the number 1000 by successive elements of the numbers array, 
// displaying the result of each division. To divide the numbers, 
// use the function from the previous task. 
// Use the try ... catch construction to handle an exception thrown 
// in the case of division by zero. If such an exception is caught, 
// the program should print an appropriate message (taken from the exception) 
// and continue its operation (division by successive elements of the array).




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

let numbers = [10, 40, 0, 20, 50];
let num = 1000;


    for(let n of numbers)
    {
        
        try{
            let ans;
            ans = div(num, n);
            
            console.log(ans);
            
        }
        catch(Error)
        {
            console.log('Wrong value -'+ n);
                
        }
        
    }


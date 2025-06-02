//0-Function types
//01-Function Declaration
function userProfile(name)
{
    console.log(`Hello, ${name}!`);  
}
//let name="Student"
userProfile("student");


//02-Arrow function
let double1 = (value) =>
{
    console.log(value*value);

}
double1(20);

//02-Single line Arrow function
const double = (a) =>a*a;
console.log(double(4));

//03-Anonymous function
let setTime = function() 
{
    setTimeout(() => {
        
    }, 2000);
    console.log("This message is delayed by 2 seconds");
    
}
setTime();


 

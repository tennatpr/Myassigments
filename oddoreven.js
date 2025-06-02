//01-Odd or Even 
function isOddOrEven(number)
{
    if(number%2===0)
        return "Even";
    else
        return "Odd";
}
let num=5;
console.log("number "+num + " is "+ isOddOrEven(num));

num=4;
console.log("number "+num + " is "+ isOddOrEven(num));

function numberType (number)
{

if (number>0)
    return "positive";

else if (number<0)
return "negative";

else

return "zero"
}

let number = 5;

console.log("Number "+number + " is a " +numberType(number));

number = -6;

console.log("Number "+number + " is a " +numberType(number));

number = 0;

console.log("Number "+number + " is a " +numberType(number));

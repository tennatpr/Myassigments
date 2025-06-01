//Palindrome check

function palindrome(name1)
{
    let reverse="";
    let len=name1.length;
    console.log(len);

    let char=name1.split("");
    console.log(char);

    for(let index=len-1;index>=0;index--)
    {
        reverse=reverse+char[index];
       
    }
     console.log(reverse);
      

let pal = name1 === reverse;
if(pal)
{
    console.log("Palindrome");
    console.log(`Result is ${pal}`);
}
    
else
{
    console.log("Not a Palindrome");
    console.log(`Result is ${pal}`);
}
}

palindrome("madam");
palindrome("teacher");
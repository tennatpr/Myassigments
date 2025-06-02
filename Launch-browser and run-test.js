//03 Launch Browser using if else and Run Tests using switch
//Launch Browser
function launchBrowser(browser)
{
    if(browser=='Chrome')
        console.log("Browser launched is "+browser);
    else
        console.log("Browser launched is  "+browser);
}
function runTests(testType)
{
    switch(testType)
    {
        case 'Sanity':
            console.log("Test type running is Sanity");
            return "Sanity";
           break;
        case 'Regression':
            console.log("Test type running is Regression");
            break;
        default:
            console.log("Test type running is Smoke");
            break;
    }
}
let browser="Chrome";
launchBrowser(browser);

let testType="Sanity";
//runTests(testType);
console.log(runTests(testType));



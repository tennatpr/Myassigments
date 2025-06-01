// // //Given a string s consisting of words and spaces, return the length of the last word in the string.
// // //Example 1:
// // //Input: s = "Hello World"
// // //Output: 5
// // //Explanation: The last word is "World" with length 5

// // let input = "hello world";
// // let splitinputarray = input.split("");
// // console.log(splitinputarray);

// // let length = splitinputarray.length
// // let lastword = splitinputarray[splitinputarray.length-1];
// // console.log(`last word is ${lastword}`);

// // let lastwordlength = lastword.length;        
// // console.log(lastwordlength);
// // console.log(`Length of ${lastword} is ${lastwordlength}`)

// ///*Example 2:
// //Input: s = " fly me to the moon "

// //1. Trim the String
// let input2 = " fly me to the moon ";
// let output2 = input2.trim();
// console.log(output2);

// //2. Split the string into an array of words.
// let output2Split = output2.split(" ");
// console.log(output2Split);

// //3. Find the last word in the array.
// let length2=output2Split.length;
// let lastWord2 = output2Split[output2Split.length - 1];
// console.log(`The last word is ${lastWord2}`);

// //4. Calculate the length of this word.
// let lastWordLength2=lastWord2.length;
// console.log(lastWordLength2);
// console.log(`Length of ${lastWord2} is ${lastWordLength2}`);

// Example:3
// 1. Remove spaces and convert all letters to the same case
// 2. Sort the Characters
// 3. Compare Sorted Strings
// 4. Return the Result*/

//1. Remove spaces and convert all letters to the same case
let in1='listen';
let in2='silent';

// Normalize both strings: remove spaces and convert to lowercase

let normalized1 = in1.replace(/\s+/g, '').toLowerCase();
let normalized2 = in2.replace(/\s+/g, '').toLowerCase();

console.log(normalized1); // 'listen'
console.log(normalized2); // 'silent'

//2. Sort the Characters

let normalized1Sort = normalized1.split("").sort().join("");
console.log(`Sorted form of ${in1} is ${normalized1Sort}`);

let normalized2Sort = normalized2.split("").sort().join("");
console.log(`Sorted form of ${in2} is ${normalized2Sort}`);

//3. Compare Sorted Strings
let result=normalized1Sort===normalized2Sort;

//4. Return the Resulmalized1Sortt
if(result)
{
    console.log(`${in1} and ${in2} are Anagram"`);
    console.log(`Result = ${result}`);
}
else
{
    console.log(`${in1} and ${in2} are NOT Anagram"`);
    console.log(`Result = ${result}`);
}
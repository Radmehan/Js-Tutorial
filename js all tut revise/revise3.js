console.log("this is revise 2 tut");
// variable in js
// var,let const
var name="Harry";
var channel;
channel="codeWithHarry";
marks=34;
console.log(name,channel,marks);

// Rules for creating Javascript variable
1/* 
1. can't start with numbers
2. can start with letter, number,_ or $
3.are case sensitive
*/
var city='Dhaka';
//$city='Dhaka';    //don't use $ or _ bcz they create a great confusion
//_city='Dhaka';
console.log(city);

const ownerName="rohan";    
// ownerName="harry";       //should avoid
console.log(ownerName);

// const fruits;   //should avoid
const fruits= 'Apple';

{
    let city= "sondip";
    city='kolkata';
    console.log(city);
}
console.log(city);

const arr1=[1,2,3,4,5,];
arr1.push(10);
console.log(arr1);

//most common progaramming case types
/* 
1. cammelCase=
2.khabab-case=
3.snake_case
4.Pascalcase
*/
console.log("this is tuttorial 46");
/*let reg=/harry/; //this is a regular expression in js
console.log(reg);
console.log(reg.source);*/
let reg=/harry/; 
let str="this is great code with harry and also harry bhai";

//function to match expression
//1. exec() - This function will return an array for match or null for no match

/*let result=reg.exec(str);
console.log(result);*/
let result=reg.exec(str);
console.log(result);

//use flag for verifying all character

/*
//g is global flag
let reg=/harry/g; 
console.log(reg);
console.log(reg.source);

let str="this is great code with harry and also harry bhai";

let result=reg.exec(str);
console.log(result);
result=reg.exec(str);
console.log(result);
result=reg.exec(str);*/
//console.log(result);

//i means case insensitive
/*
let reg=/harry/i; 
console.log(reg);
console.log(reg.source);

let str="this is great code with haRry and also harry bhai";
let result=reg.exec(str);
console.log(result);
console.log(result.input);
//console.log(result["input"]);
console.log(result.index);


let reg = /harry/;
console.log(reg);
console.log(reg.source);

let str = "this is great code with harry and also harry bhai ";
let result = reg.exec(str);
if (result) {
    console.log(result);
    console.log(result.input);
    console.log(result.index);
}*/
//2. test() - returns true or false

let result2 = reg.test(str);
//console.log(result2); //--> this will only print true if the "reg" is there in rhe string "a"

//3. match()- it will returns an arary of results or null

//reg = /harry/i;
/*reg = /harry/g;
str = "this is great code with harry and also harry bhai ";
//let result3=reg.match(str); --> this is wrong*/
let result3=str.match(reg);
//console.log(result3);


//4. search()- returns index of first match else -1

//let result4=reg.search(str); --> this is wrong
/*-let reg = /harry/;
//reg = /harryd/;
let str = "this is great code with harry and also harry bhai ";*/
let result4 = str.search(reg);
//console.log(result4);

//5. replace()- retutrn new replaced string with all the replacement
//reg=/harry/g; //replace all word
str = "this is great code with harry and also harry bhai ";
let result5= str.replace(reg, "shuvom");
console.log(result5);
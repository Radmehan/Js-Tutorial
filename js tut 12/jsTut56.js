console.log("this is tutorial 56");
let people=["harry","rohan", "skilf","shuvam","vikrant"];

//Traditional for loop
/*for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}*/

// 1=> Iterating an Object

let obj={
    name:"harry",
    language:"javascript",
    hobbies:"android app development"
}
//console.log(myObj);

// 1.1=> Iterating object using traditional for loop
/*for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
    
}

// 1.2=> iteratin object using for in loop

for(let key in obj){
    //console.log(obj.key);
    console.log(obj[key]);
}

// 1.3=>we can use for in with strings to loop through  the same things

let string="this is my string";
for(let value in string){
    let char=string[value];
    console.log(char);
}*/

//[***********For of loop*************]
people=["harry","rohan", "skilf","shuvam","vikrant"];
for(let name of people){
    console.log(name);
}

let string="this is my string";
for (const value of string) {
    console.log(value);
}

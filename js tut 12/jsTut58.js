console.log("this is tut 58");

//set store unique values
const mySet = new Set();
console.log("the set look like this:", mySet);

//Adding values to this set
mySet.add("this");
mySet.add("this");
mySet.add("my name");
mySet.add("that");
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add("that2");
console.log("the set look like this now:", mySet);

//use a constructor to initialize set
/*let mySet2= new Set([1, 45, "this", false, {a:4, b:8},"this"]);
console.log("New set",mySet2);*/

console.log(mySet.size);        //get the size of set

console.log(mySet.has(34));     // check wheather set ha 34 or 346
console.log(mySet.has(346));

console.log("before removal",mySet);
console.log("before removal",mySet.has("that2"));
mySet.delete("that2");          //removal an element from the set
console.log("after removal",mySet);
console.log("after removal",mySet.has("thst2"));

// Iterating a set
console.log("******for of loop*****");
for(let item of mySet){
    console.log("Item is: ",item);
}

console.log("******for in loop*****");
mySet.forEach((element)=>{ 
    console.log(element);
})

console.log("******Array*****");
let value=Array.from(mySet);
console.log(value);

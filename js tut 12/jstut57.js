console.log("this is tut 57");

// Maps in javascript : we can use any type of value
const myMap= new Map();
console.log(myMap);

const key1= "my Str",  key2={}, key3=function(){};

//aeeting map values
myMap.set(key1, "this is a string");
myMap.set(key2, "this is an empty Object");
myMap.set(key3, "this is a blank function");
console.log(myMap);

//Getting  values from a map

let value1=myMap.get(key1);
console.log(value1);

value1=myMap.get(key2);
console.log(value1);

value1=myMap.get(key3);
console.log(value1);

//getting size of the map

console.log(myMap.size);

//You can loop using for...of to get keys and values

for(let [key,value] of myMap){
    console.log(key,value);
}
//get only keys
for(let key of myMap.keys()){
    console.log("key is:", key);
}
//get only values
for(let value of myMap.values()){
    console.log("value is:", value);
}

//You can loop through a map using for each loop

myMap.forEach((value,key)=>{
    console.log("the key is:",key);
    console.log("the value is:",value);

})

//converting map an ARRAY

let myArray=Array.from(myMap);
console.log("map to array is:", myArray);

//converting keys an ARRAY
let myKeysArray=Array.from(myMap.keys());
console.log("map to key is array is:", myKeysArray);

//converting values map an ARRAY
let myValuesArray=Array.from(myMap.values());
console.log("map to value array is:", myValuesArray);
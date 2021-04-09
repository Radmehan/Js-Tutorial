console.log('this is tut 7');
let marks=[34,23,45,76,90];
const fruits=["orange","apple","pineapple"];
const mix=["str",89,[3,5]];

const arr=new Array(23,124,44,"mango");
// console.log(arr);
// console.log(mix);
// console.log(fruits);
// console.log(marks);

// console.log(arr.length)
// console.log(Array.isArray('sdaff'));

arr[0]="harry";
let arrElement=arr[0];
// console.log("Element : ",arrElement)
// console.log(arr)

let value=marks.indexOf(34);
// console.log(value);

// Modifiying Array

// console.log(marks);
// marks.push(234);
// marks.unshift(100);
// marks.pop();
// marks.shift();
// marks.splice(1,2)
// marks.reverse()

let marks2=[1,2,3,4];
// marks=marks.concat(marks2)
// console.log(marks)

let myObj={
    name:"harry",
    chanel:"code with harry",
    isActive:true,
    marks:[1,2,3,43]
}

console.log(myObj);
console.log(myObj.name);
console.log(myObj['name']);
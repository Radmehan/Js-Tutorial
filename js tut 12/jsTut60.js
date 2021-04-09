console.log("this si tut 60");
//destructuring in js

let a, b;
[a, b] = [34, 564];
console.log(a, b);


//[a,b,c,d]=[1,2,3,4,5,6,7,8,9,10,11,12,13];
[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//array destructurimg
({ a, b, c } = { a: 34, b: 345, c: 67, d: 45, e: 34 });
({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 });
console.log(a, b, c, d);

const fruits = ['apple', 'banana', 'mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);

//Object Destructuring
laptop={
    model:'hp pavilliion',
    age:'23 days',
    gender:'male',
    net:1234,
    start :function(){
        console.log('started');
    }
}
const {model,age,gender,net, start}=laptop;
//let {model,age,gender2} = laptop;

//console.log(model,age,gender2);
console.log(model,age,gender,net,start);
start();

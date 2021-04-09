console.log("this is tut 59");

//symbol in js..It contains unique value

let syml =  Symbol();
syml=Symbol("My identifier");
//syml=new Symbol();
console.log("symbol is",syml);
//console.log("symbol is",typeof syml);

let syml2=Symbol("My identifier");
console.log(syml===syml2);

const a="this is";
const b= 'this is';

console.log(a===b);
console.log(null===null);
console.log(undefined===undefined);

let key1=Symbol('Identifier for key1');
let key2=Symbol('for key2');
let myObj={}
myObj[key1]="Harry";
myObj[key2]='Rohan';
myObj['name']='Good Boy';
myObj[4]='Good in';

console.log(myObj);
console.log(myObj[key1]);
console.log(myObj[key2]);
//console.log(myObj.key2);  //can not do this because it is same as myObj['key2']

//symbols are ignored for in loop
for(key in myObj){
    console.log(myObj[key]);
}

console.log('********str*******')
console.log(JSON.stringify(myObj));
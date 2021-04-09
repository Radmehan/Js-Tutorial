console.log("this is tut 5");
let myVar;
myVar=34;
myVar=String(myVar);
console.log(myVar,(typeof myVar)) ;

let booleanVar=true;
booleanVar=String(booleanVar);
console.log(booleanVar, (typeof booleanVar));

let date= new Date();
date=String(new Date());
console.log(date,(typeof date));

let arr=[1,2,3,4,5];
arr=String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i=0;
i=new Date();
console.log(i.toString());

let stri="3434";
stri=Number("3434");
stri=Number("343d4");
stri=Number(true);
stri=Number([1,2,3,4,5]);
console.log(stri, (typeof stri));

let number='43';
number=parseInt(number);
number=Number(number);
console.log(number,(typeof number));
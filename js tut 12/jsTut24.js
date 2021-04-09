console.log("welcome to js tut 24");
let today=new Date();
console.log(today);
console.log(typeof today);

let otherDate=new Date("9-16-2006 04:04:08");
otherDate=new Date("06/15/1976 04:04:08");
otherDate=new Date("June 15 1996 10:04:08 ");
console.log(otherDate);

let a;
a=otherDate.getDay();
a=otherDate.getMonth();
a=otherDate.getFullYear();
a=otherDate.getSeconds();
a=otherDate.getMinutes();
a=otherDate.getHours();
a=otherDate.getDate();
console.log(a);


otherDate.setDate(23);
otherDate.setHours(22);
otherDate.setMinutes(21);
otherDate.setSeconds(20);
otherDate.setMilliseconds(19);
otherDate.setMonth(8);
console.log(otherDate);

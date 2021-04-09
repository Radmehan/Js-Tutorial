console.log("Welcome to tutorial 7");
const html=document.querySelector("#container");
const myHtml=`<h1>Welcome to tutorial 7</h1>
Name : <span id="firstName"></span><br/>
Last Name : <span id="lastName"></span><br/>
Channel Name: <span id="youtube"></span><br/>
Active : <span id="active"></span>`;
html.innerHTML=myHtml;

//--------------ARRAY REVIEW--------------------
/*let marks=[34,23,24,93,73,25];
let fruits=["orwnge","Apple","Pineapple"];
let mixed=["Str",89,[3,5]];
let arr=new Array(23,123,21,"orange");
console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(mixed[2][1]);
console.log(arr.length);
console.log(Array.isArray(arr));
console.log(Array.isArray("dshasy"));

//-------update Array
arr[0]="Harry";
console.log(arr);
let arrElm=arr[0];
console.log("element: ",arrElm);

let value=marks.indexOf(34);
console.log(value);

//--------modifying array
console.log(marks);
//marks.push(3456);
//marks.unshift(1009);
//marks.shift();
//marks.pop();
//marks.splice(1,3,34,35,36);
marks2=[4,5,6];
marks=marks.concat(marks2);
console.log(marks);*/


//------------------OBJECT REVIEW-----------------

let myObj = {
'first name':"Code with",
name:"Harry",
channel:"CodeWithHArry",
isActive:true,
//marks:[1,2,3,45]
}

html1=document.querySelector("#firstName");
html2=document.querySelector("#lastName");
html3=document.querySelector("#youtube");
html4=document.querySelector("#active");

html1.innerHTML=myObj['first name'];
html2.innerHTML=myObj.name;
html3.innerHTML=myObj.channel;
html4.innerHTML=myObj.isActive;

console.log(myObj);
console.log(myObj.name);
console.log(myObj.channel);
//console.log(myObj.marks[0]);
console.log(myObj['first name']);



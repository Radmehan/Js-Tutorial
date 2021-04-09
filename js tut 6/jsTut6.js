/*console.log("js tutorial 6");
let country ="Bangladesh";
let man = "population";
let myHtml=`<h1>About ${country}</h1>
<p>${country} is a world ${man} country</p>`;
let html = document.querySelector("#container");
html.innerHTML=myHtml;

let day="morning";
const name="Harry";
const greeting="Good Morning";
let myHtml3=`<h1>Hello ${name}</h1>. <p> Now it is ${day}.
 I wish you ${greeting}.</p> `;

myHtml2=document.querySelector("#container1");
myHtml2.innerHTML=myHtml3;*/

const name="Harry";
const greeting="good morning";
console.log(greeting +" "+ name);
let html="<h1>This is heading</h1> "+
"<p>this is paragraph tag</p>";
console.log(html);
html=html.concat("this ", "str2");
console.log(html);
let html1=document.querySelector("#container1");
html1.innerHTML=html;
console.log(html.length);
console.log(html.toUpperCase());
//html1.innerHTML=(html.toUpperCase());
console.log(html.toLowerCase());
html1.innerHTML=(html.toUpperCase());
//html1.innerHTML=(html.toLowerCase());
console.log(html[2]);
console.log(html.indexOf[3]);
console.log(html.indexOf("this"));
console.log(html.indexOf("sdfsf"));
console.log(html.indexOf("<"));
console.log(html.charAt(1));
console.log(html.charAt(4));
console.log(html.endsWith("str2"));
console.log(html.endsWith("sdfsf"));
console.log(html.includes("is"));
console.log(html.includes("sdfsf"));
console.log(html.substring(0,15));
console.log(html.slice(0,4));
console.log(html.slice(-4));
console.log(html.split(" "));
console.log(html.split(">"));
console.log(html.replace('this','it'));
console.log(typeof html);









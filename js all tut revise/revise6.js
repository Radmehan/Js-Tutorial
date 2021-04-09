console.log("this is tut 6");
const name="harry";
const greet='Good Morning';
console.log(greet+' '+ name);
let html;
/* html="<h1>This is heading</h1>"
 <p>This is my para</p>" */

// html="<h1>This is heading</h1>"+
// "<p>This is my para</p>"

html=`<h1> This is a heading</h1>..hello ${name}
<p>This is my para</p>`;
html= html.concat("this", " str2");
 console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());
// console.log(html[0]);
// console.log(html[1]);
// console.log(html.indexOf('h1'));
// console.log(html.indexOf('hafre1'));
// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('>'));
// console.log(html.charAt(3));
// console.log(html.endsWith("str2"));
// console.log(html.includes("this"));
// console.log(html.substring(0,4));
// console.log(html.slice(-4));
// console.log(html.split(' '));
// console.log(html.split('>'));
// console.log(html.replace('this','it'));

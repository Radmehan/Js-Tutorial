console.log("welcome to js tut 16");
let element=document.createElement("li");
element.className="classUl";
element.id="createId";
element.setAttribute("title","myTitle");
//element.innerText="<b>hello world</b>";
//element.innerHTML="<b>hello world</b>";

let text=document.createTextNode("this is code");
element.appendChild(text);

let ul=document.querySelector("ul.this");
ul.appendChild(element);



console.log(ul);
console.log(element);

let elem2=document.createElement("h3");
elem2.id="elem2";
elem2.className="elem2";

let txtNode=document.createTextNode("this is heading");
elem2.appendChild(txtNode);
element.replaceWith(elem2);

let myul=document.getElementById("myUl");
myul.replaceChild(element, document.querySelector("#fui"));
myul.removeChild(document.querySelector("#lui"));
let pr=elem2.getAttribute("id");
//pr=elem2.getAttribute("class");
pr=elem2.hasAttribute("href");
console.log(pr);
console.log(elem2,pr);
//elem2.removeAttribute("id");
elem2.setAttribute("title","hello")

console.log(myul);
console.log(elem2);

let newOne=document.createElement("h3");
newOne.className="head";
newOne.id="head";
newOne.innerHTML="<a href='https://www.codewithharry.com/'>Go to code With Harry</a>";

//let tnode=document.createTextNode("<a href='https://www.codewithharry.com/'>Go to code With Harry</a>");
//newOne.appendChild(tnode);

let newUl=document.querySelector(".this");
newUl.appendChild(newOne);
let pr2=newOne.hasAttribute("href");
console.log(pr2);
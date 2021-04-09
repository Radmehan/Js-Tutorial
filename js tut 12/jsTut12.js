console.log("Welcome to tut 12");


//let a=document;
//a=document.all;
//a=document.body;
//a=document.head;
//a=document.forms;
//a=document.forms[0];
/*a.forEach(function(ele){
    console.log(ele);
})*/

/*Array.from(a).forEach(function(ele){
    console.log(ele);
})*/

//a=document.links;
//a=document.links[0];
//a=document.links[0].href;

//a=document.images[0].src;

//document.querySelector("#firstChild").innerHTML=a;
//console.log(a);
//console.log(typeof a);

let element=document.querySelector("#firstChild");
//element=element.className;
//element=element.childNodes;
//element=element.parentNode;
element.style.color="red";
element.innerText="harry is a coader";
element.innerHTML=`<b>harry is a well coader</b>`;
//console.log(element);
let sel=document.querySelector("h1");
sel.style.color="green";
//console.log(sel);
//let elems=document.getElementsByClassName("child");
//console.log(elems);

let cont=document.getElementsByClassName("no");
//console.log(cont[0]);
cont=document.querySelector("#container");
//console.log(cont.childNodes);
console.log(cont.children);
//let nodeName=cont.childNodes[0].nodeName;
//console.log(nodeName);
let nodetype=cont.children[0].nodeType;
console.log(nodetype);
console.log(cont.children[2].children[1].children[2].children);
console.log(cont.firstChild);
console.log(cont.firstElementChild);
//cont.innerHTML=cont.firstElementChild
console.log(cont.lastChild);
console.log(cont.lastElementChild);
console.log(cont.childElementCount);
console.log(cont.firstElementChild.parentNode);
console.log(cont.firstElementChild.parentNode.nextSibling);
console.log(cont.firstElementChild.parentNode.nextElementSibling);
console.log(cont.firstElementChild.nextElementSibling);
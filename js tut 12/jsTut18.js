console.log("this is tut 18");
let btn=document.querySelector("#btn");

btn.addEventListener("click",func1);
function func1(e){
    console.log("Thanks",e);
   e.preventDefault();
}

/*btn.addEventListener("dblclick",func2);
function func2(e){
    console.log("Thanks its a double click");
    e.preventDefault();
}

btn.addEventListener("mousedown",func3);
function func3(e){
    console.log("Thanks its a mouseDown",e);
    e.preventDefault();
}*/


let footer=document.querySelector(".footer");
/*footer.addEventListener("mouseenter",func4);
function func4(e){
    console.log("tnx its a mouse enter",e);
    e.preventDefault();
}*/

/*footer.addEventListener("mouseleave",func5);
function func5(e){
    console.log("tnx its a mouse leave",e);
    console.log(e.offsetX,e.offsetY);
    e.preventDefault();
}*/

let container1=document.querySelector("#allSec");
container1.addEventListener("mousemove",func6);
function func6(e){
    console.log("tnx you tegerred mouse",e);
    //console.log(e.offsetX,e.offsetY);
    //document.body.style.background="red";
    //document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetX},${e.offsetX+e.offsetY})`;
    //document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetX},${e.offsetX})`;
    document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetX},${e.offsetY})`;
    //document.body.style.backgroundColor=`rgb(${e.offsetX}, ${e.offsetX}, 254)`;
    e.preventDefault();
}


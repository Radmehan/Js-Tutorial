console.log("Welcome to js tutorial 8");
//const age=45;

/*if(age>=18){
console.log("You r adult");
}
else{
    console.log("You r child");
}*/

/*let vari=34;
if(typeof vari !=="undefined"){
console.log("Vari is defined");
}
else{
    console.log("vari is not defined");
}

const doesDrive=false;
if(doesDrive==true){
console.log("You con drive");
}
else{
    console.log("You can't drive");
}*/

//let age=35;
//const doesDrive=false;

/*if(doesDrive==true || age>=18){
console.log("You con drive");
}
else{
    console.log("You can't drive");
}


if(doesDrive==true && age>=18){
console.log("You con drive");
}
else{
    console.log("You can't drive");
}*/

//---Ternary Operator---

let age=18;
let country="India";
let myPassword="124Asd";
let regPassword="124Asd";
let myHtml=( (country==="Bangladesh" || country==="India" || country==="Japan" ) && (myPassword===regPassword && age>=18) ?"You can register" : "You can't register");

html=document.querySelector("#container");
html.innerHTML=myHtml;

console.log( (country==="Bangladesh" || country==="India" || country==="Japan" ) && (myPassword===regPassword && age>=18) ?"You can register":"You can't register");






/*switch(age){

case 18:
    console.log("age is 18");
    break;

case 28:
    console.log("age is 18");
    break;
default:
    console.log("age is unknown");

}*/
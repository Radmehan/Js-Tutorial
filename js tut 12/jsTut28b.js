console.log("this is Tut 28b")

let obj={
    name: "code with harry",
    address:"Mars"
}
console.log(obj);

function Obj(givenName){
    this.name=givenName

}
Obj.prototype.getName=function(){
    return this.name;
}
Obj.prototype.setName=function(newName){
    this.name=newName;
}

// Object.prototype.getName=function(){
//     return this.name;
// }
let obj2= new Obj("rohan")
console.log(obj2);

/*
let obj3={
    1:"me"
}
console.log(obj3)*/
// console.log(obj2.getName())
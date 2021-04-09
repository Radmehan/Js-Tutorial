console.log("this is tutorial 28");
let obj={
    name:"Harry",
    channel:"Code with harry",
    address:"Murs"
}


function Obj(givenName){
    this.name=givenName;
}

Obj.prototype.getName=function(){
    return this.name;
}

/*obj.prototype.getName=function(){

    return this.name;
}*/

/*Object.prototype.getName=function(){
    return this.name;
}*/

Obj.prototype.setName=function(newName){
    this.name=newName;
}

let obj2=new Obj("harry");
console.log(obj2);
console.log(obj2.toString());

//console.log(obj);
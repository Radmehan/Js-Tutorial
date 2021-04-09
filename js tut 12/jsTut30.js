console.log("Tis is tut 30");
const proto={
    slogan:function(){
        return "this company is the best";
    },
    changeName:function(newName){
        this.name=newName;
    }
}

//This value create object
const harry=Object.create(proto);
harry.name="Harry";
harry.role="Programmer";
harry.changeName("Harry2");
//console.log(harry);


//This value also create obj b8 old version

const harry1=Object.create(proto, {
    name:{value:"HARRY", writable:true},
    role:{value:"Programmer"}
})
harry1.changeName("HArry2");
//console.log(harry1);


//employee constructor

function employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;

}
employee.prototype.slogan=function(){
    return `this company is best regards ${this.name}`;
}
let harryObj=new employee("harry",350990,20);
console.log(harryObj);
console.log(harryObj.slogan());

//programmer

function programmer(name,salary,experience,language){
    employee.call(this,name,salary,experience);
    this.language=language;
}

//inherit the prototype
programmer.prototype=Object.create(employee.prototype);

//set menually constructor
programmer.prototype.constructor=programmer;

let rohan=new programmer("Rohan",1000,0,"Javascript");
console.log(rohan);
console.log(rohan.slogan());

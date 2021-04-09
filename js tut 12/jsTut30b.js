console.log("This is tut 30")
const proto = {
    slogan: () => {
        return `This is company is the best`;
    },
    changeName: function(newName) {
        this.name = newName
    }
}

/*this create harry object
const harry = Object.create(proto);
harry.name = "harry";
harry.role = "programmer";
harry.changeName("harry2");
console.log(harry);
*/

// this also create harry object
const harry2= Object.create(proto,{
    name:{value:"harry", writable:true},
    role:{value:"programmer", writable:true}
})
harry2.changeName("harry2");
// console.log(harry2);

//employee constructor

function Employee(name,salary,experience){
    this.name=name,
    this.salary=salary,
    this.experience=experience
}
//slogan
Employee.prototype.slogan=function(){
    return `this company is besr regards by ${this.name}`;
}

let harryObj=new Employee("harry",334545,87);
console.log(harryObj.slogan());

//programmer
function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language=language
}

//inherit the prototype
Programmer.prototype=Object.create(Employee.prototype)

//set manually constructor

Programmer.prototype.constructor=Programmer


rohan=new Programmer("rohan",23423,65,"Javascript");
console.log(rohan);
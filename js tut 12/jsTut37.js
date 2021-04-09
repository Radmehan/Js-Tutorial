console.log("This is tut 37");

//pretend that this response is comming from the survcer
const students=[
    {name:"Harry",subject:"JavaScript"},
    {name:"Rohan", subject:"Machine Learing"}
]

function enrollStudent(student,callback){
    setTimeout(function(){
        students.push(student);
        console.log("student has been enrolled");
        callback();
    },1000);
}


function getStudents(){
    setTimeout(function(){
       let str="";
       students.forEach(function(student){
           str+=`<li>${student.name}</li>`;
         });
       document.getElementById("students").innerHTML=str;
       console.log("students have been enrolled");
    },5000); 
}

let newStudent={name:"Sunny",subject:"Python"};
enrollStudent(newStudent,getStudents);
//getStudents();
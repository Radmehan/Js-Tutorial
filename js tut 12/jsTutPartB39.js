console.log("js tut 39 part b");

//  COPY FROM JS TUTORIAL 37

//pretend that this response is comming from the survcer

const students=[
    {name:"Harry",subject:"JavaScript"},
    {name:"Rohan", subject:"Machine Learing"}
]

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log("student has been enrolled");
            //callback();
            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
              
        },1000);
     

    })
    
}


function getStudents(){
    setTimeout(function(){
       let str="";
       students.forEach(function(student){
           str+=`<li>${student.name}</li>`;
         });
       document.getElementById("students").innerHTML=str;
       console.log("students have been fetched");
    },5000); 
}

let newStudent={name:"Sunny",subject:"Python"};
/*enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("some error occured");
});*/


enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("some error occured");
});


//getStudents();
//func.then(function(){resolve}).catch(function(){reject})
//function inside Then() is ran as - Resolve()
//function inside Catch() is ran as - Reject()
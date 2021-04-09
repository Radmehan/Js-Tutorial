console.log("This is tut 42");

//button with is myBtn
let myBtn = document.getElementById("mybtn");

//div with id content
let content = document.getElementById("content");

/*function getData(){
    console.log("started get data");
    url="harry.text";
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.text();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}
console.log("before running getdata");
getData();
console.log("after running getdata");*/

/*function getData(){
    console.log("started get data");
    url=`https://api.github.com/users`;
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}
console.log("before running getdata");
getData();
console.log("after running getdata");*/

//  function postData(){
//      url = "http://dummy.restapiexample.com/api/v1/create";
//      data = `{"name":"test23451","salary":"123","age":"23"}`
//      params = {
//          method:'post',
//          headers: {
//              'Content-Type': 'application/json'
//          },
//          body: data
//      }
//      fetch(url,params).then(response=>response.json()
//      ).then(data=> console.log(data)
//      )
//  }

// console.log("Before running getData")
// getData()
// console.log("After running getData")

function postData(){
    let data={first_name:"Jhon",
     last_name:"Adams",
     job_title:"Software Engineer"
    };
    const options={
        method:"POST",
        body:JSON.stringify(data),
        headers:{
        'Content-Type':"application/json"
        }
    }

    fetch('https://reqres.in/api/users',options)
        .then(response=>response.json())
        .then(data=>console.log(data))

}

postData()

// https://reqres.in/api/users
// first_name:"Jhon",
//         last_name:"Adams",
//             


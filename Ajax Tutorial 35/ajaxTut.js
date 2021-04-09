console.log("This is ajax tutorial");

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);
function buttonClickHandler() {
    console.log("You have clicked fetch btn");

    //Intantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    //GET= https://reqres.in/api/products/3
    // xhr.open('GET', 'https://reqres.in/api/products/3', true);

    //USE THIS FOR POST REQUEST
    xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=the-times-of-india&apiKey=4502b5e1b10b488f99a4abc72f717a0b', true);
    

    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log('on progress')
    }

    // xhr.onreadystatechange= function(){
    //     console.log("the readystate is",this.readyState)
    // }
    //what to do when progress is ready
    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText);
        }
        else {
            console.log("Some error occured")
        }
    }
xhr.send()
console.log("We are done");

}
// get= http://dummy.restapiexample.com/api/v1/employees
//GET= https://reqres.in/api/products/3

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popButtonClickHandler);
function popButtonClickHandler() {
    console.log("You have clicked pop btn");

    //Intantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    //GET= https://reqres.in/api/products/3
    // xhr.open('GET', 'https://reqres.in/api/products/3', true);

    //USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
	xhr.getAllResponseHeaders("Content-type","application/JSON")
    

    //what to do on progress(optional)
    xhr.onprogress = function () {
        console.log('on progress')
    }

    // xhr.onreadystatechange= function(){
    //     console.log("the readystate is",this.readyState)
    // }
    //what to do when progress is ready
    xhr.onload = function () {
        if (this.status === 200) {

            console.log(this.responseText);
        }
        else {
            console.log("Some error occured")
        }
    }
params=`{"name":"test1234gf","salary":"123","age":"23"}`;
xhr.send(params);
console.log("We are done");

}
console.log("This is tut 17");
let head = document.querySelector("#heading");
head.addEventListener("click", function (e) {
    let variable = e.target;
    variable = e.target.id;
    variable = Array.from(e.target.id);
    //variable=e.offsetX;
    //variable=e.offsetY;
    variable=e.clientX;
    console.log("You have clicked");
    console.log(e);
    console.log(variable);

})
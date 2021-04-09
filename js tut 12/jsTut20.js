console.log("This is tut 20");
let impArr=["vagitable","sutki","vendi"];

localStorage.setItem("Name","Harry");
localStorage.setItem("Name2","Rohan");
//localStorage.setItem("Sabzi",impArr);
localStorage.setItem("Sabzi",JSON.stringify(impArr));

//localStorage.clear();
//localStorage.removeItem("Name");






let name=localStorage.getItem("Name");
//name=localStorage.getItem("Name2");
//name=localStorage.getItem("Sabzi");
name=JSON.parse(localStorage.getItem("Sabzi"));

console.log(name);
//console.log(name[1]);
/*impArr.forEach(function(element){
    console.log(element);
})

for(i=0;i<impArr.length;i+=1){
    console.log(impArr[i]);
}
*/

sessionStorage.setItem("sessionName","sHarry");
sessionStorage.setItem("sessionName2","sRohan");
sessionStorage.setItem("sessionSabzi",JSON.stringify(impArr));
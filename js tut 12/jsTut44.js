console.log("This is tut 44");

//pretend this is coming from a server as response
let a= "harry vai";
a=undefined;
if(a!=undefined){
    throw new Error("this is not undefined");

}
else{
    console.log("this is undefined");
}


try {
    null.console;
   // jkldssadhds
   console.log("we are inside try block");
   //functionharry(); 

} catch (error) {
    console.log("r u okay?");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("we will run this");
}
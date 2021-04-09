console.log("this is tut 47");
let regex=/harry/;
let str="harry is harry";
  //  regex=/harrysdfsg/;
//lets look some meta character symbols---------
regex=/^h/;   //^ means expression will match if strinf starts with
regex=/^harr/;
//regex=/^harrdcf/;

regex=/ry$/; //$ at the end of the string means "str ends with"
//regex=/ryy$/;

regex=/h.rry/;// matches any one character
//str="hadrry is harry";
//str="hadrry is hadrry";

regex=/h*rry/;// matches any 0 or more one character
//str="haddssgsserry is harry";
//str="haddssgsserry";

regex=/ha?rryi?/; // ? after charcter that means character is optional
/*regex=/ha?rryi?t/;
str="harry ";
str="hrry";
str="hrryi";
str="hrryj";*/

//regex=/h*rry/;
regex=/h\*rry/;
//str="h*rry means code with harry";
str="harry means code with harry";

let result=regex.exec(str);
console.log("the result from exec is :", result);

if(regex.test(str)){
    console.log(`the string ${str} matches the expressions ${regex.source}`);
}
else{
    console.log(`the string ${str} does not match the expressions ${regex.source}`);
}
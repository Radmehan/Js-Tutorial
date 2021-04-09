console.log("this is tut 48");
/*regular expression
    basic function
    metacharacter symbol
    character sets*/
// let regex=/^h/;
//regex=/^h/i;

//character sets - we use Squre brackets "[ ]" 

let regex = /harry/;
let str = "harry bhai";


regex = /h[a-z]rry/;  //can be any character a to z
regex = /h[ryu]rry/; //can be an r, u or y
regex = /h[aty]rry/;  //can be an a, t or y
regex = /h[^aty]rry/; //^ means not of a, t or y
regex = /h[^aty]rr[yu]/; //not of a, t or y + can be y & u
regex = /h[^aty]rr[yu0-9]/; //not of a, t or y + can be y, Y & y regex = /h[a-zA-Z]rr[yu0=]/;
regex = /h[^aty]rr[yu0-9][0-9]/; //we can have as many character sets as we want


str = "hrrry bhai";
str = "htrry bhai";
str = "hzrry bhai";
str = "hirru bhai";
str = "hirrt bhai";
str = "hirry8 bhai";

//quantifires - we use curlybrace "{ }" 

regex = /har{2}y/;
regex = /har{0,2}y/; // r can occured exactly 0 to 2 (0 or 1 or 2) times

str = "harry bhai"; // r can occured 2 times
str = "harrry bhai";
str = "hay bhai";
str = "hary bhai";
str = "harry bhai";
str = "harrry bhai";

// groupings - we use paranthesis "( )" for groupings

regex = /(har){2}/;
regex = /(har){2}([0-9]r){3}/;

str = "harry bhai";
str = "harharbhai";
str = "harhar1r4r5rbhai";

let result = regex.exec(str);
console.log("the result from exec is :", result);

if (regex.test(str)) {
    console.log(`the string ${str} matches the expressions ${regex.source}`);
}
else {
    console.log(`the string ${str} does not match the expressions ${regex.source}`);
}
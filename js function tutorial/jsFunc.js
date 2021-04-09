console.log("welcolme to js function tutorial");
let bkashTaka=2000;
let tax1=2; //2%
let total=bkashTaka/100*tax1;
let result=bkashTaka/100*tax1+bkashTaka;
//document.getElementById("showKoro").innerHTML=total;
document.querySelector("#showKoro").innerHTML=result;

let mobilePrice=15000;
let taxNew=7;
let newResult;
newResult=mobilePrice+mobilePrice/100*taxNew;
document.querySelector("#showKoroNew").innerText=newResult;

/* Function 1st part */

function taxCal(){
    /*let write;
    write="hello world";
    document.querySelector("#taxCal").innerHTML=write;*/
    let mobile=20000;
    let mTax=7;
    let mPrice=mobile+mobile/100*mTax;
    document.querySelector("#mPrice").innerHTML=mPrice;
}
taxCal();


/* Function 2nd part is a RETURN function 

function calculator(){
    let productPrice;
    let proTax;
    let total;

   productPrice=30000;
    proTax=8;
    total=productPrice+productPrice/100*proTax;
    return total;

}
document.querySelector("#sPhone").innerHTML=calculator();
document.querySelector("#laptop").innerHTML=calculator();
document.querySelector("#camera").innerHTML=calculator();*/



/* peramiter pass*/

function calculator(price,tax,kreta){
    let productPrice;
    let proTax;
    let total;

   productPrice=price;
    proTax=tax;
    total=productPrice+productPrice/100*proTax;
    return total +" by "+kreta;

}
document.querySelector("#sPhone").innerHTML=calculator(30000,7,"Rohim");
document.querySelector("#laptop").innerHTML=calculator(66000,12,"korim");
document.querySelector("#camera").innerHTML=calculator(60000,15,"Safik");
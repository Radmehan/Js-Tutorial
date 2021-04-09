console.log("welcome to js tutorial 9");

list=document.querySelector('.this');
let str="";
for(i=0; i<10; i+=1){
    console.log(i);
    // str+=`<li>{index[i]}</li>`;
    str+=`<li>i+</li>`
    list.innerHTML=str;
}

/*let a = 34;
a++;
a+=1;
console.log(a);*/

/*let j=0;
while(j<=10){
    console.log(j);
    j+=1;
}*/



/*let j=0;
while(j<10){
    console.log(j+1);
    j+=1;
}*/


/*let k=0;
do{
    console.log(k);
    k+=1;
}
while(k<10);*/

/*let k1=110;
do{
console.log(k1);
k+=1;
}
while(k<10);
console.log("Done");*/

/*let k = 1;
do {
    console.log(k);
    if (k === 5) {
        break;
    }

    k += 1;
}
while (k < 10); */

/*let k = 1;
do {
    
    if (k === 599) {
        console.log(k);
        break;
        
    }

    k += 1;
}
while (k < 1000);*/


/*let l=0;
do{
    if(l===5){
        continue;
    }
    console.log(l);
    l+=1;
}
while(l<10);*/

/*for (i = 0; i < 10; i += 1) {
    if (i === 5 || i === 6 || i === 7) {
        continue;
    }
    console.log(i);
}
console.log("done");

k = 0;
while (k < 10) {
    k +=1;
    if (k%3==0) {
        continue;
    }

    console.log(k);
    

}*/

/*let arr=["korim","rohim","sofik"];
arr.forEach(function(element,index){
console.log(`The number of ${index}=> and the name is ${element}`);

});

for(i=0;i<arr.length;i+=1){
console.log(arr[i]);
}*/

/*
let obj={
name:"Harry",
age:30,
type:"programmer",
type2:function(greeting){
   let againName=this.name;
   let againAge=this.age;
   let againType=this.type;
   //let gree=greeting;
   let result=againName+" "+againType+" "+againAge//+" "+gree;
   return result+" "+`${greeting}`;
}
}
for(let x in obj){
    //console.log(obj);
    //console.log(obj[x]);
    //console.log(obj.name);
    console.log(obj.type2("Thank you"));
    //console.log(`${x}=>${obj[x]}`);
}*/
console.log("this is tut 52");
//Generators in js
//1-1B
function* numberGen(){
    let i=0;
    //yield 1;    
    //yield 2;
    //yield 3;
    //yield 4;
    while (true) {
        //yield (i).toString();
        yield i;
        i+=1;
    }
}
const gen=numberGen();

/*console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());*/

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
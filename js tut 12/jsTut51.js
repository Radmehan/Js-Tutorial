console.log("this tut 51");
//iterators

function fruitsIterator(values){

    let nextIndex=0;
    //we wiil return an obj
    return {
        next:function(){
            if(nextIndex<values.length){
                //we will return this obj
              return { 
                   value:values[nextIndex++],
                   done:false
              }
            }
            else{
                //we return obj with only done
                
                   return{
                        done:true
                   }
                
            }
        }
    }
}




const myArry=["apples","grapes","oranges","bhindi"];
console.log(myArry);

//using the iterator

const fruits=fruitsIterator(myArry);
/*console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());*/

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
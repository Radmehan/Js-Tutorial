console.log("async and sync js");
/*
for (let index = 0; index < 4555; index++) {
    const element = index;
    console.log("This is index number", element)
    
}
console.log("done printing");*/

setTimeout(() => {
    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log("This is index number", element)
        
    }
}, 100);
console.log("done printing");
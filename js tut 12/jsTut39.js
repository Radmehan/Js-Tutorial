console.log("this is tut 39");
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("function: your promise has been resolved");
                resolve();
            }
            else {
                console.log("function: your promise has not been resolved");
                reject("sorry not fulfilled ");
            }

        }, 2000);

    })
}
func1().then(function () {
    console.log("harry: thanks for resolving");
}).catch(function (error) {
    console.log("harry: very bad bro. Reason " + error);
})
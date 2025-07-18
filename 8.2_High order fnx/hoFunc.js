/*
* A function that does one or both
1. Takes one or multiple functions as arguments
2. Returns a function
*/

function multipleGreet(func, n){  // higher order func
    for(let i=1; i<=n; i++){
        func();
    }
}

function greet(){
    console.log("Namaste");
}

multipleGreet(greet, 500);
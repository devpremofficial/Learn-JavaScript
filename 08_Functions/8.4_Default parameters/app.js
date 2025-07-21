/*
Default parameters in functions

SYNTAX
function addTwoNum(a, b=2){
    return a + b;
}

addTwoNum(2) // output -> 4

*/

function sum(a, b=2){
    return a + b;
}

console.log(sum(2)); // 4
console.log(sum(2, 4)); // 6
/*
Storing values of array in multiple variables
*/

let names = ["tony", "bruce", "peter", "adam", "catlyn"];
// let [winner, runnerUp] = names;
let [winner, runnerUp, ...others] = names;


console.log(winner);
console.log(runnerUp);
console.log(others);
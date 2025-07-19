/*
setInterval(callback, time interval);
*/

// setInterval(() => {
//     console.log("prem chand");
// }, 2000)


let id = setInterval(() => {
    console.log("prem chand");
}, 500)


let id2 = setInterval(() => {
    console.log("vs code");
}, 1000)

console.log(id)
console.log(id2)

// Stop the interval
clearInterval(id);
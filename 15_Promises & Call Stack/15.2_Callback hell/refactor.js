let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        h1.style.color = color;
        resolve("color changed to");
    }, delay)
    })
}

changeColor("red", 1000)
.then((result) => {
    console.log(`${result} red`);
    return changeColor("blue", 1000);
})
.then((result) => {
    console.log(`${result} blue`);
    return changeColor("orange", 1000);
})
.then((result) => {
    console.log(`${result} orange`);
})
.catch(() => {
    console.log(`Failed`);
})

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("crimson", 1000);
//         });
//     });
// });
let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000)

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000)

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000)

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay)
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("crimson", 1000);
        });
    });
});

// callback nesting --> callback hell

// To prevent callback hell JS introduced Promises, async & await etc.
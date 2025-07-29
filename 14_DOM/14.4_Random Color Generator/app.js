let btn = document.querySelector("button");
let box = document.querySelector(".box");
let para = document.querySelector(".box p");

btn.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    para.innerHTML = randomColor;
    box.style.backgroundColor = randomColor;
})
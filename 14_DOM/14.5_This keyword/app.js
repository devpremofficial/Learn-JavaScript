// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this); // * btn object
// })

// btn.addEventListener("click", () => {
//     console.log(this); //* Window object
// })



// **********************************************

let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let btn = document.querySelector("button");

function changeColor (){
    console.log(this.innerText);
    this.style.backgroundColor = "yellow";
}

h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);
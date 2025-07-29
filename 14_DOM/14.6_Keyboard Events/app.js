let btn = document.querySelector("button");
let input = document.querySelector("input");

btn.addEventListener("click", function(event){
    console.log("button clicked!");
    console.log(event);
})

input.addEventListener("keydown", function(event){
    console.log(event.code);
    // console.log("Key was pressed !");
})
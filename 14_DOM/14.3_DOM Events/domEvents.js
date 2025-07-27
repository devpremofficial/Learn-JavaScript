let btn = document.querySelector("button");
console.log(btn);

let box = document.querySelector(".box");

// btn.onclick = function (){
//     console.log("Button was clicked !");
// }

function sayHello(){
    alert("Helloooo");
}

// btn.onclick = sayHello(); ❌
btn.onclick = sayHello; // ✅

// * ON MOUSE ENTER

box.onmouseenter = function(){
    console.log("You hover on box!");
    box.style.width = "500px";
}

//! IS TARIKE SE, INKI HUM EK BAAR MEIN EK HI VALUE SET KAR SAKTE HAI, ISLIYE HUM EVENT LISTENERS KO USE KARTE HAI, MULTIPLE FUNCTIONS KO EXECUTE KARANE KE LIYE.
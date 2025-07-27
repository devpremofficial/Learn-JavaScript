// Selecting element by Id

let mainImage = document.getElementById("mainImg");
mainImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0CXQW3CNDOftOamFF5UPRE-h4kjpz38e-g&s";
// console.log(mainImage);


// Selecting element by className

let oldImg = document.getElementsByClassName("oldImg");
// console.log(oldImg);

// Selecting element by tagName

let para = document.getElementsByTagName("p");
// console.log(para);


// * QUERY SELECTOR

// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector('#mainImg'));
// console.dir(document.querySelector('.oldImg'));

// console.log(document.querySelector(".box a")); // it only select first occurance, not return a collection

// console.log(document.querySelectorAll(".box a"));


//* MANIPULATING ATTRIBUTES

let img = document.querySelector("#mainImg");
// console.log(img.getAttribute("id"));

img.setAttribute("id", "spiderman-img");
// console.log(img.getAttribute("id"));


//* CSS STYLES 

let h1 = document.querySelector("h1");
h1.style.backgroundColor = "#D10B0A";
h1.style.color = "#ffffffff";

let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.backgroundColor = "yellow";
// }

for(link of links){
    link.style.backgroundColor = "yellow";
}
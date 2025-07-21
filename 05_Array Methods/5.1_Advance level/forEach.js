/*
arr.forEach(some function defination or name)
*/

const arr = [2, 4, 6, 8];

// function print(el){
//     console.log(el);
// }

// arr.forEach(print);

// or

// arr.forEach((el) => {
//     console.log(el);
// })


let array = [{
    name: "Prem",
    marks: 78
}, {
    name: "Shradha",
    marks: 89
}, {
    name: "Kajal",
    marks: 85
}];


array.forEach((student) => {
    console.log(student.marks);
})
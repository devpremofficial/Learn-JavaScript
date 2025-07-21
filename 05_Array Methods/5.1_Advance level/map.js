let num = [1, 2, 3, 4];

let double = num.map((n) => {
    return n*2;
})

// console.log(double);

let students = [{
    name: "Prem",
    marks: 78
}, {
    name: "Shradha",
    marks: 89
}, {
    name: "Kajal",
    marks: 85
}];

let gpa = students.map((el) => {
    return el.marks/10;
})

// console.log(gpa);
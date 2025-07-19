const student = {
    name: "Prem",
    marks: 92,
    prop: this, // global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks;
    }
}

// console.log(student.prop);
// console.log(student.getName());
console.log(student.getMarks());
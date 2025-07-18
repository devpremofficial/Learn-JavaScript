const student = {
    name: "Prem chand",
    age: 20,
    eng: 85,
    phy: 95,
    math: 90,
    getAvg(){
        let avg = (this.eng + this.phy + this.math) / 3;
        console.log(`${this.name} got average narks of ${avg}`); 
    }
}

student.getAvg();

// function getAvg(){
//     console.log(this);
// }


// getAvg();
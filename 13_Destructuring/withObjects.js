const student = {
    name: "Karan hegde",
    age: 21,
    class: 9,
    subjects: ["hindi", "english", "science", "math"],
    username: "karan@78hedge",
    password: "abcd$12"
}

// let {username, password} = student;

let {username: user, password, city = "Mumbai"} = student;
//    |         |
// Search for   store in
// this val     this variable

console.log(user, password);
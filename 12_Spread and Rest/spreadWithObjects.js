let data = {
    email: "randomguy@gmail.com",
    password: "randomguy67"
}
let newData = {id: 123, ...data};
console.log(newData);


// convert array into object
let arr = [2, 5, 6, 3, 2];
let obj = {...arr};

console.log(obj);
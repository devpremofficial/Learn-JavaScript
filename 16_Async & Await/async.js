async function greet(){
    // throw "some random error";  // generate own error
    return "hello !";
}

// console.log(greet());



greet()
.then((res) => {
    console.log(`Promise resolved with result: ${res}`);
})
.catch((err) => {
    console.log(`Promise rejected with err: ${err}`);
})
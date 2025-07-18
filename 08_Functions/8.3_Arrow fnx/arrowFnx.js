// Arrow functions

const sum = (a, b) => {
    console.log(a + b);
}

/*
or 

const sum = (a, b) => (
    a + b
)
*/

sum(4, 5);

const cube = n => {
    return n * n * n;
}

console.log(cube(6));

const pow = (baseVal, powerVal) => {
    return baseVal**powerVal;
}

console.log(pow(4, 2));


//* IMPLICIT RETURN IN ARROW FNX
/*
Jab hamare arrow function ka sirf ek hi kaam ho, ki sirf ek single value ko return karna hai, 
no console.log(something) ❌
no calling to another fnx ❌
no calculation            ❌

only returning a single value ✅
*/

const mul = (a, b) => (
    a * b
);

console.log(mul(8, 9));
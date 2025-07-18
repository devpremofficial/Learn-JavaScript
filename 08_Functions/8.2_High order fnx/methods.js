const calculator = {
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    },
    div: function(a, b){
        return a / b;
    }
}

console.log(`Add: ${calculator.add(5, 10)}`);
console.log(`Sub: ${calculator.sub(10, 5)}`);
console.log(`Mul: ${calculator.mul(5, 10)}`);
console.log(`Div: ${calculator.div(10, 5)}`);


/*
* METHOD (SHORT HAND) - NO NEED TO ADD FUNCTION KEYWORD
*/

const calc = {
    add(a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    },
    mul(a, b){
        return a * b;
    },
    div(a, b){
        return a / b;
    }
}


console.log(calc.add(15, 16));
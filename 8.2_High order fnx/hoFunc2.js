function oddEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }

    } else if(request == "even"){
        return function(n){
            console.log(n%2 == 0);
        }

    } else{
        console.log("wrong request");
    }
}

let request = "odd" // even

let func = oddEvenFactory(request);
console.log(func(4));
function sum(...args){
    // * Interation on args array
    // for(let i=0; i<args.length; i++){
    //     console.log("You gave us ", args[i]);
    // }

    return args.reduce((res, el) => res + el);
}

// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(sum(1, 2, 3, 4, 5));
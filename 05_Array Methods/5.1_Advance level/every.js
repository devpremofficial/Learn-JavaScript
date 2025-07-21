let evenNums = [2, 4, 6, 8];
let oddNums  = [1, 3, 5, 7];

// evenNums.push(7);
let ans = evenNums.every((el) => el%2 == 0);
console.log(ans);


let ans2 = oddNums.every((el) => el%2 != 0);
console.log(ans2);
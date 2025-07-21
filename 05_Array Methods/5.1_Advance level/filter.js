let nums = [1, 2, 3, 4, 5, 6, 7, 8];
let even = nums.filter((num) => (num % 2 == 0));
let odd = nums.filter((num) => (num % 2 != 0));
console.log(`Even: ${even}`);
console.log(`Odd: ${odd}`);
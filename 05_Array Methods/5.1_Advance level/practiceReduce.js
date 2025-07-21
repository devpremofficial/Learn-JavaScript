// Finding maximum in the array

// let arr = [3, 6, 7, 3, 2, 19, 19.5];
// let max = -1;
// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

let arr = [3, 6, 23, 3, 2, 19, 19.5];

let max = arr.reduce((max, el) => {
    if(max < el){
        return el;
    } else{
        return max;
    }
});

console.log(max);
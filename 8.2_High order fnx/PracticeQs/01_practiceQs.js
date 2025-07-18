/*
* Write a JavaScript function that returns array elements larger than a number
Input:

An array of numbers: [10, 5, 20, 8, 30, 15]

A comparison number: 12

Desired Output:
A new array containing only the numbers from the input array that are larger than 12. So, we'd expect [20, 30, 15].
*/


function compareNum(arr, num){
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > num){
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);
}

let array = [15, 12, 8, 25, 30, 50];
let compareNumber = 8;

compareNum(array, compareNumber);



//? WHENEVER YOU HAVE ANY KIND OF PROBLEM, DON'T CODE IMMEDIATELY, FIRST DRY RUN OR MAKE STRATEGY ON A PAPER & PEN
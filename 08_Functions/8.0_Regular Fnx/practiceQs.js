/*
* Create a function to roll a dice & always display the value of the dice(1 to 6)
*/

function rollDice(){
    let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
}

// rollDice();

/*
* Create a function that gives us the average of 3 numbers
*/

function getAvg(num1, num2, num3){
    let average = (num1 + num2 + num3) / 3;
    console.log(average);
}

// getAvg(3, 4, 5);

/*
* Create a function that print the table based on user input
*/


function printTable(num){
    for(let i=num; i<=num*10; i+=num){
        console.log(i);
    }
}

// printTable(4)

/*
* Create a function that returns the sum of numbers from 1 to n
*/

function getSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }

    console.log(sum);
}

// getSum(10);


